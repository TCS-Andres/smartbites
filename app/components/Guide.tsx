"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const bullets = [
  "Built with real student pain points from campus research",
  "Data-driven approach with measurable engagement goals",
  "Designed by students, for students",
];

export default function Guide() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#F0FAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal>
            <Image
              src="/images/student-phone.jpg"
              alt="Smiling college student looking at their phone while sitting on campus"
              width={500}
              height={625}
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="font-heading font-bold text-text-dark text-3xl md:text-[40px] leading-tight mb-6">
              SmartBites: Your Personal Food Assistant That Gets Student Life
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              We built SmartBites because we know the struggle. We combined meal
              planning, grocery optimization, and local deals into one app that
              actually fits how students live — busy schedules, tight budgets,
              tiny kitchens.
            </p>
            <ul className="space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-text-dark font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
