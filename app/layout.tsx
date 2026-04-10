import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartBites — Save Money on Food, Reduce Waste & Find Student Deals",
  description:
    "SmartBites helps college students save money on food with personalized meal plans, leftover ingredient recipes, automated grocery lists, and nearby restaurant deals. Join the waitlist today.",
  keywords:
    "college food budget app, meal planning app for students, cheap food near college, student restaurant discounts, how to save money on food in college, meal ideas from leftovers, grocery budget planner app, affordable meals for college students, food deals near me for students, reduce food waste app",
  metadataBase: new URL("https://smartbitesapp.com"),
  alternates: {
    canonical: "https://smartbitesapp.com",
  },
  openGraph: {
    title: "SmartBites — The College Student's Food Companion",
    description:
      "Meal plans on your budget. Recipes from your leftovers. Deals near your campus. Join the waitlist.",
    url: "https://smartbitesapp.com",
    siteName: "SmartBites",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "SmartBites — College students eating together",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartBites — The College Student's Food Companion",
    description:
      "Meal plans on your budget. Recipes from your leftovers. Deals near your campus. Join the waitlist.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "SmartBites",
                applicationCategory: ["FoodTech", "Lifestyle"],
                operatingSystem: ["iOS", "Android"],
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                description:
                  "SmartBites helps college students save money on food with personalized meal plans, leftover ingredient recipes, automated grocery lists, and nearby restaurant deals.",
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "SmartBites",
                url: "https://smartbitesapp.com",
                logo: "https://smartbitesapp.com/images/logo.png",
                sameAs: [
                  "https://instagram.com/smartbitesapp",
                  "https://tiktok.com/@smartbitesapp",
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
