"use client";

import ScrollReveal from "./ScrollReveal";

const painPoints = [
  {
    icon: "\u{1F4B8}",
    title: "Wasting Money",
    description:
      "You overbuy groceries, eat out too much, and watch food expire in the fridge.",
  },
  {
    icon: "\u{1F92F}",
    title: "Decision Fatigue",
    description:
      "After classes, work, and studying, figuring out what to eat feels impossible.",
  },
  {
    icon: "\u{1F5D1}\uFE0F",
    title: "Food Waste",
    description:
      "Nearly 30% of food bought by students goes to waste. That\u2019s money in the trash.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-text-dark text-3xl md:text-[40px] leading-tight text-center max-w-3xl mx-auto mb-16">
            College Students Shouldn&apos;t Have to Choose Between Eating Well
            and Affording Rent
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-50 text-center">
                <div className="text-4xl mb-4" aria-hidden="true">
                  {point.icon}
                </div>
                <h3 className="font-heading font-bold text-text-dark text-xl md:text-2xl mb-3">
                  {point.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
