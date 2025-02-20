import React from "react";
import { Check } from "lucide-react";
import StarBorder from "./animations/StarBorder"; 

const plans = [
  {
    title: "Unio",
    features: [
      "Custom Landing Page Design",
      "Mobile-Optimized and Fast Loading",
      "Fast Turnaround Time (Within 7 Days)",
      "One Free Revision to Perfect Your Design",
      "Basic Contact Form Integration",
    ],
  },
  {
    title: "Unio +",
    features: [
      "Full Website Design (Up to 5 Pages)",
      "High-Converting Sales Pages",
      "Fully Responsive & Performance Optimized",
      "Three Free Revisions to Refine Every Detail",
      "Post Launch Support",
    ],
  },
  {
    title: "Subscription",
    features: [
      "Domain + Hosting Provided",
      "Website Design (Up to 3 Pages)",
      "High-Converting Sales Pages",
      "One Free Revision to Refine Every Detail",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="py-20 bg-black text-white text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold">
        Transparent <span className="text-blue-500">Plans</span>.
      </h2>

      {/* Pricing Cards with Star Borders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-20">
        {plans.map((plan, index) => (
          <StarBorder key={index} color="red" speed="6s" className="w-full">
            <div className="bg-gray-900 rounded-xl p-8 text-left shadow-lg">
              {/* Plan Title */}
              <h3 className="text-2xl font-bold">{plan.title}</h3>

              {/* Features List */}
              <p className="mt-4 text-gray-300 font-semibold">What's included?</p>
              <ul className="mt-4 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-300">
                    <Check className="text-blue-500 w-4 h-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StarBorder>
        ))}
      </div>
    </section>
  );
}
