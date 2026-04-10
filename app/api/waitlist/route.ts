import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

function readWaitlist(): Array<{ name: string; email: string; school: string; timestamp: string }> {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeWaitlist(data: Array<{ name: string; email: string; school: string; timestamp: string }>) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, school } = body;

    if (!name || !email || !school) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const waitlist = readWaitlist();

    const duplicate = waitlist.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );
    if (duplicate) {
      return NextResponse.json(
        { success: false, message: "This email is already on the waitlist." },
        { status: 409 }
      );
    }

    waitlist.push({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      school: school.trim(),
      timestamp: new Date().toISOString(),
    });

    writeWaitlist(waitlist);

    return NextResponse.json({
      success: true,
      message: "You're on the list!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
