"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function WaitlistCTA() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      school: (form.elements.namedItem("school") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
      } else {
        setErrorMsg(json.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="relative py-20 md:py-28 bg-teal overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-white text-3xl md:text-[40px] leading-tight mb-4">
              Be the First to Eat Smarter
            </h2>
            <p className="text-white/80 text-lg">
              Join the waitlist and get early access when SmartBites launches. It
              takes 10 seconds.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4" aria-hidden="true">&#127881;</div>
                  <h3 className="font-heading font-bold text-text-dark text-xl mb-2">
                    You&apos;re on the list!
                  </h3>
                  <p className="text-text-muted">
                    We&apos;ll let you know when SmartBites launches.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="waitlist-name" className="sr-only">
                      Your name
                    </label>
                    <input
                      id="waitlist-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-dark placeholder:text-text-muted"
                    />
                  </div>
                  <div>
                    <label htmlFor="waitlist-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="waitlist-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@university.edu"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-dark placeholder:text-text-muted"
                    />
                  </div>
                  <div>
                    <label htmlFor="waitlist-school" className="sr-only">
                      School / University
                    </label>
                    <input
                      id="waitlist-school"
                      name="school"
                      type="text"
                      required
                      placeholder="e.g. Florida International University"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-dark placeholder:text-text-muted"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  >
                    {status === "submitting"
                      ? "Joining..."
                      : "Join the Waitlist \u{1F680}"}
                  </button>

                  {status === "error" && (
                    <p className="text-error text-sm text-center" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  <p className="text-text-muted text-xs text-center">
                    We respect your privacy. No spam — just launch updates.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
