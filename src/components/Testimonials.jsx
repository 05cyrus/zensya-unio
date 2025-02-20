import React from "react";

const testimonials = [
  {
    name: "Varshith Merugu",
    role: "Founder, WassupMediaCo",
    text: "Roopesh's proficiency in Next.js allowed us to build a good-looking website with ease. His attention to detail and commitment to best practices is unmatched.",
    avatar: "/images/p1.jpg", // Replace with actual user avatar
  },
  {
    name: "Ruby Liza",
    role: "Freelancer",
    text: "Our e-commerce platform's performance skyrocketed after Roopesh optimized it. His deep understanding of Shopify was crucial.",
    avatar: "/images/p2.jpg",
  },
  {
    name: "David Kim",
    role: "Marketing Director, MobileFirst",
    text: "The responsive design Roopesh implemented works flawlessly across all devices. Our mobile conversion rates have increased by 40% since the redesign.",
    avatar: "/images/p3.jpg",
  },
  {
    name: "Lisa Patel",
    role: "Product Owner, EnterpriseApp",
    text: "Roopesh's expertise in Angular helped us modernize our legacy application. The refactored codebase is now much easier to maintain and extend.",
    avatar: "/images/p4.jpg",
  },
  {
    name: "Alex Thompson",
    role: "Accessibility Advocate, InclusiveTech",
    text: "The accessibility improvements Roopesh made to our site have opened up our services to a wider audience. Their commitment to inclusive design is commendable.",
    avatar: "/images/p5.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black text-white text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold">
        What people are <span className="text-blue-500">saying</span> about us.
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6 md:px-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative flex flex-col items-start bg-gray-900 rounded-xl p-6 shadow-lg">
            {/* User Avatar */}
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="text-left">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-300 text-left mt-4">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
