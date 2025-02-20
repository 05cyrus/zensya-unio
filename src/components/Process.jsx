import React from "react";

const steps = [
  {
    number: "1",
    title: "Consult",
    description: "We’ll discuss your goals and vision over a call to ensure we're aligned.",
  },
  {
    number: "2",
    title: "Design",
    description: "We’ll create a custom design that reflects your brand and meets your needs.",
  },
  {
    number: "3",
    title: "Deliver",
    description: "Your website will be delivered, optimized for performance and ready to impress.",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-black text-white text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold">
        Our <span className="text-blue-500">3-step</span> process.
      </h2>

      {/* Steps Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 mt-12 px-6 md:px-20">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
            {/* Step Number */}
            <div className="relative flex items-center justify-center w-20 h-20 bg-black border border-gray-700 rounded-full text-4xl font-bold">
              {step.number}
              {/* Line Connection (Hide on Last Step) */}
              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 left-full w-32 h-1 bg-gray-700 hidden md:block"></div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-blue-500 mt-4">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-400 max-w-xs mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
