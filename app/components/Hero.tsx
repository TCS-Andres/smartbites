"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #F0FAF0 60%, #F8FBF8 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-accent/5 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full mb-6">
              <span aria-hidden="true">&#127869;</span> Built for College Students
            </span>

            <h1 className="font-heading font-extrabold text-text-dark text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
              Stop Wasting Food & Money — SmartBites Makes College Eating Easy
            </h1>

            <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Personalized meal plans on your budget. Recipes from your
              leftovers. Deals near your campus. One app — zero stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Join the Waitlist — It&apos;s Free
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <p className="text-text-muted text-sm mt-4">
              <span aria-hidden="true">&#128640;</span> Be the first to know when we launch
            </p>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/hero-bg.jpg"
                alt="Diverse college students happily eating together at a modern campus cafeteria"
                width={640}
                height={360}
                className="rounded-2xl shadow-2xl w-full"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
