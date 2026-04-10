"use client";

import ScrollReveal from "./ScrollReveal";

export default function SocialProof() {
  return (
    <section className="bg-gray-50 py-8 md:py-10 border-y border-gray-100">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-text-muted text-sm md:text-base font-medium tracking-wide">
            Developed through real student research, persona analysis &amp; MVP
            validation testing
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
