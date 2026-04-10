"use client";

import ScrollReveal from "./ScrollReveal";

const beforeItems = [
  "Throwing away expired groceries",
  "Spending $15 on delivery because you can\u2019t decide",
  "Stressing about food every single day",
  "Blowing your budget by Wednesday",
];

const afterItems = [
  "Using every ingredient you buy",
  "Eating well for under $50/week",
  "Knowing exactly what to eat in seconds",
  "Ending the month with money to spare",
];

export default function Transformation() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-text-dark text-3xl md:text-[40px] leading-tight text-center mb-16">
            Imagine This Instead...
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-heading font-bold text-text-muted text-lg mb-6 uppercase tracking-wide">
                Before SmartBites
              </h3>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-muted"
                  >
                    <span className="text-error text-lg flex-shrink-0" aria-hidden="true">
                      &#10060;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="font-heading font-bold text-primary text-lg mb-6 uppercase tracking-wide">
                After SmartBites
              </h3>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-dark"
                  >
                    <span className="text-primary text-lg flex-shrink-0" aria-hidden="true">
                      &#9989;
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
