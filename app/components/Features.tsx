"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "Budget-Based Meal Planning",
    image: "/images/meal-planning.jpg",
    imageAlt:
      "Smartphone screen showing a colorful weekly meal plan calendar with food icons",
    description:
      "Tell us your weekly food budget and preferences. SmartBites creates personalized meal plans that keep you fed and on track — no spreadsheets, no stress.",
  },
  {
    title: "Leftover Ingredient Meal Generator",
    image: "/images/leftover-meals.jpg",
    imageAlt:
      "Fresh ingredients on a kitchen counter next to a smartphone showing recipe suggestions",
    description:
      "Got random stuff in the fridge? Type in what you have and SmartBites instantly suggests simple meals you can actually make. Less waste, more flavor.",
  },
  {
    title: "Automated Grocery List Builder",
    image: "/images/grocery-list.jpg",
    imageAlt:
      "Smartphone with a grocery checklist next to a shopping bag with fresh produce",
    description:
      "Once you pick your meals, SmartBites generates an optimized grocery list. Buy only what you need — no more impulse purchases that rot in the fridge.",
  },
  {
    title: "Local Restaurant Deals & Student Discounts",
    image: "/images/restaurant-deals.jpg",
    imageAlt:
      "College student holding a smartphone with discount tags and restaurant icons",
    description:
      "Real-time access to food specials and exclusive student discounts near campus. When you don\u2019t feel like cooking, SmartBites still saves you money.",
  },
  {
    title: "Food Budget Tracking & Insights",
    image: "/images/budget-tracking.jpg",
    imageAlt:
      "Smartphone screen showing a pie chart and bar graph of food spending",
    description:
      "See exactly where your food money goes each week. SmartBites shows your spending patterns so you can adjust and save more over time.",
  },
  {
    title: "Personalized Recommendations",
    image: "/images/student-phone.jpg",
    imageAlt:
      "Smiling college student looking at their phone on campus",
    description:
      "The more you use SmartBites, the smarter it gets. Meal ideas, grocery picks, and deals — all tailored to your tastes and habits.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-text-dark text-3xl md:text-[40px] leading-tight mb-4">
              How SmartBites Saves You Time, Money &amp; Food
            </h2>
            <p className="text-text-muted text-lg">
              Six powerful features. One simple app.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-50 group">
                <div className="relative overflow-hidden">
                  <div className="h-1 bg-primary" />
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-text-dark text-lg md:text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
