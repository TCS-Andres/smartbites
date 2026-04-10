"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "Is SmartBites free?",
    answer:
      "Yes! SmartBites will be free to download with all core features included. We\u2019re focused on making smart eating accessible to every student.",
  },
  {
    question: "When does SmartBites launch?",
    answer:
      "We\u2019re currently in the validation phase. Join the waitlist to be the first to know when we launch and get early access.",
  },
  {
    question: "What schools is SmartBites available at?",
    answer:
      "We\u2019re starting with students in the Miami area, including Miami Shores. But SmartBites will work anywhere \u2014 deals and restaurants are based on your location.",
  },
  {
    question: "How does the leftover ingredient feature work?",
    answer:
      "Just type in the ingredients you already have at home. SmartBites instantly generates simple meal ideas so nothing goes to waste.",
  },
  {
    question: "Do I need to cook to use SmartBites?",
    answer:
      "Not at all! SmartBites also shows nearby restaurant deals and student discounts. Whether you cook or eat out, we help you save.",
  },
  {
    question: "How is SmartBites different from other food apps?",
    answer:
      "Unlike traditional food or budgeting apps, SmartBites combines meal planning, grocery optimization, and restaurant deals in one platform \u2014 designed specifically for the college student lifestyle.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-text-dark text-base md:text-lg">
          {question}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-text-muted flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-text-muted leading-relaxed pb-5 pr-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-text-dark text-3xl md:text-[40px] leading-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
