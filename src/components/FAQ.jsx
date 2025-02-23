import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Footer from './Footer';

const faqs = [
  {
    question: "Who's behind Zensya?",
    answer: "Zensya is a team of expert designers and developers committed to delivering top-notch websites.",
  },
  {
    question: "Why not hire a full-time designer and developer?",
    answer: "Hiring a full-time team is costly and time-consuming. We provide the same expertise without the overhead.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer: "We offer revisions to ensure you are satisfied with the final product.",
  },
  {
    question: "How quickly will I receive my project?",
    answer: "Most projects are completed within 7-14 days, depending on complexity.",
  },
  {
    question: "Can I get a refund?",
    answer: "If you're not satisfied within the first few days, we offer a money-back guarantee.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black text-white text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold">
        You got <span className="text-blue-500">Questions?</span> We got Answers.
      </h2>

      {/* Call to Action Button */}
      <div className="mt-6">
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 text-lg"
        >
          <span>Book a 15-min call</span>
          <span className="text-xl">→</span>
        </a>
      </div>

      {/* FAQ List */}
      <div className="mt-12 px-6 md:px-20 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border bg-gray-950 border-gray-800 rounded-lg mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-lg">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="text-blue-500 w-5 h-5" />
              ) : (
                <Plus className="text-blue-500 w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="pt-4 pl-4 pb-1 text-left text-sm text-gray-300 border-t border-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
