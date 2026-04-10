const https = require("https");
const fs = require("fs");
const path = require("path");

const API_KEY = "c3333d6b964e86424fcc05bfc6cd7a6a";
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

const images = [
  {
    filename: "hero-bg.jpg",
    prompt:
      "Vibrant flat illustration of diverse college students happily eating together at a modern campus cafeteria, warm green and yellow color palette, clean modern style, no text, bright and optimistic mood, food on table, smartphones visible",
    aspect_ratio: "16:9",
  },
  {
    filename: "meal-planning.jpg",
    prompt:
      "Clean flat illustration of a smartphone screen showing a colorful weekly meal plan calendar with food icons, green and yellow accent colors, minimalist modern style, no text, white background",
    aspect_ratio: "4:3",
  },
  {
    filename: "leftover-meals.jpg",
    prompt:
      "Flat illustration of fresh ingredients like vegetables, eggs, pasta on a kitchen counter next to a smartphone showing recipe suggestions, bright green and yellow color palette, modern minimal style, no text",
    aspect_ratio: "4:3",
  },
  {
    filename: "grocery-list.jpg",
    prompt:
      "Flat illustration of a smartphone with a grocery checklist next to a small shopping bag with fresh produce peeking out, green and yellow accents, clean modern illustration style, no text, white background",
    aspect_ratio: "4:3",
  },
  {
    filename: "restaurant-deals.jpg",
    prompt:
      "Flat illustration of a college student holding a smartphone with discount tags and restaurant icons floating around, green and yellow color scheme, modern flat design, no text, friendly and casual mood",
    aspect_ratio: "4:3",
  },
  {
    filename: "budget-tracking.jpg",
    prompt:
      "Flat illustration of a smartphone screen showing a simple pie chart and bar graph of food spending with coins nearby, green and yellow palette, minimal modern style, no text",
    aspect_ratio: "4:3",
  },
  {
    filename: "student-phone.jpg",
    prompt:
      "Flat illustration of a smiling college student looking at their phone while sitting on campus grass with a backpack nearby, green and yellow warm tones, modern illustration style, no text, optimistic vibe",
    aspect_ratio: "4:5",
  },
];

function httpRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, data });
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith("https") ? https : require("http");
    const file = fs.createWriteStream(dest);
    proto.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function createTask(image) {
  const body = JSON.stringify({
    model: "nano-banana-2",
    input: {
      prompt: image.prompt,
      aspect_ratio: image.aspect_ratio,
      resolution: "2K",
      output_format: "jpg",
    },
  });

  const res = await httpRequest(
    {
      hostname: "api.kie.ai",
      path: "/api/v1/jobs/createTask",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    },
    body
  );

  if (res.data && res.data.data && res.data.data.taskId) {
    return res.data.data.taskId;
  }
  throw new Error(`Failed to create task for ${image.filename}: ${JSON.stringify(res.data)}`);
}

async function pollTask(taskId) {
  while (true) {
    const res = await httpRequest({
      hostname: "api.kie.ai",
      path: `/api/v1/jobs/recordInfo?taskId=${taskId}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const state = res.data?.data?.state;
    if (state === "success") {
      const resultJson = JSON.parse(res.data.data.resultJson);
      return resultJson.resultUrls[0];
    }
    if (state === "fail") {
      throw new Error(`Task ${taskId} failed`);
    }

    console.log(`  Task ${taskId}: ${state || "unknown"}, polling again in 5s...`);
    await sleep(5000);
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`Generating ${images.length} images...\n`);

  for (const image of images) {
    try {
      console.log(`[${image.filename}] Creating task...`);
      const taskId = await createTask(image);
      console.log(`[${image.filename}] Task ID: ${taskId}, polling...`);

      const imageUrl = await pollTask(taskId);
      console.log(`[${image.filename}] Downloading...`);

      const dest = path.join(OUTPUT_DIR, image.filename);
      await downloadFile(imageUrl, dest);
      console.log(`[${image.filename}] Saved!\n`);
    } catch (err) {
      console.error(`[${image.filename}] Error: ${err.message}\n`);
    }
  }

  console.log("Done!");
}

main();
