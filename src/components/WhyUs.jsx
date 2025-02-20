import React from "react";
import { LayoutGrid, Zap, Puzzle, Layers, Users, Infinity } from "lucide-react";

const features = [
  {
    title: "Responsive Design",
    description: "Flawless experiences across all devices and screen sizes.",
    icon: <LayoutGrid className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Lightning Fast",
    description: "Optimized code for speedy load times and smooth interactions.",
    icon: <Zap className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Custom Solutions",
    description: "Tailor-made frontend solutions to match your unique requirements.",
    icon: <Puzzle className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Modern Frameworks",
    description: "Expertise in React, NextJS, MERN, and other cutting-edge technologies.",
    icon: <Layers className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Collaborative Approach",
    description: "We work closely with your team for seamless integration.",
    icon: <Users className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Ongoing Support",
    description: "Continuous maintenance and updates to keep your frontend fresh.",
    icon: <Infinity className="w-8 h-8 text-blue-500" />,
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-black text-white text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold">
        But, like <span className="text-blue-500">why</span> us?
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 px-6 md:px-20">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start space-y-4">
            {feature.icon}
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
