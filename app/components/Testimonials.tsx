"use client";

import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "SmartBites helped me stop wasting groceries every week. I save money and actually use what I buy now.",
    author: "SmartBites Beta User",
  },
  {
    quote:
      "I love how easy it is to find cheap food near campus. The deals alone make it worth it.",
    author: "SmartBites Beta User",
  },
  {
    quote:
      "As a busy student, this app takes away the stress of figuring out what to eat. It\u2019s super helpful.",
    author: "SmartBites Beta User",
  },
  {
    quote:
      "This is exactly what college students need \u2014 simple, affordable meal ideas without overthinking it.",
    author: "SmartBites Beta User",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-text-dark text-3xl md:text-[40px] leading-tight text-center mb-16">
            Students Are Already Loving SmartBites
          </h2>
        </ScrollReveal>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="min-w-[280px] md:min-w-0 snap-center bg-white rounded-2xl p-6 shadow-md border-l-4 border-primary flex flex-col justify-between h-full">
                <blockquote className="text-text-dark italic leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="text-text-muted text-sm font-semibold not-italic">
                  — {testimonial.author}
                </cite>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
