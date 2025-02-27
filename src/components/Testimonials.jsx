import React from "react";

const testimonials = [
  {
    name: "Sophia Reynolds",
    role: "Founder, WassupMediaCo",
    text: "Zensya helped me elevate my online presence with a stunning custom website. Their attention to detail and commitment to quality is truly impressive. I highly recommend Zensya for anyone looking to stand out online.",
    avatar: "/images/p-1.jpeg", 
  },
  {
    name: "Alex Thompson",
    role: "Freelancer",
    text: "Zensya helped my business stand out with a stunning custom website that perfectly reflects our brand. Their attention to detail and creativity exceeded our expectations. Highly recommend Zensya for any business looking to elevate their online presence.",
    avatar: "/images/p2.jpg",
  },
  {
    name: "Sakura Tanaka",
    role: "Marketing Director, MobileFirst",
    text: "Zensya exceeded my expectations with their ability to create a stunning website for my business. Their attention to detail and creativity truly sets them apart. I highly recommend Zensya to anyone looking for a professional and unique website design service.",
    avatar: "/images/p3.jpg",
  },
  // {
  //   name: "Botan sakata ",
  //   role: "Product Owner, EnterpriseApp",
  //   text: "Zensya exceeded my expectations with their Japanese-inspired custom websites. Their attention to detail and creativity truly sets them apart. I am thrilled with the website they created for my business!",
  //   avatar: "/images/p4.jpg",
  // },
  // {
  //   name: "Samantha Miller",
  //   role: "Accessibility Advocate, InclusiveTech",
  //   text: "Zensya did an outstanding job creating a custom website that perfectly represents my business. Their attention to detail and professionalism truly sets them apart. I highly recommend Zensya for anyone looking to elevate their online presence.",
  //   avatar: "/images/p5.jpg",
  // },
];

export default function Testimonials({ language }) {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold">
        {language === "en" ? "What people are saying about us." : "私たちについての声。"}
      </h2>

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
