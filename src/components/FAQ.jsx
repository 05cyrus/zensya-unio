import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Footer from './Footer';

const faqs = [
  {
    question: "Zensyaの運営者は誰ですか？",
    answer: "Zensyaは、最高品質のウェブサイトを提供する熟練のデザイナーと開発者のチームです。",
  },
  {
    question: "なぜ専属のデザイナーや開発者を雇わないのですか？",
    answer: "専属チームを雇うのはコストが高く、時間もかかります。私たちはその専門知識を低コストで提供します。",
  },
  {
    question: "結果に満足できなかった場合はどうなりますか？",
    answer: "ご満足いただけるよう、修正対応を行います。",
  },
  {
    question: "どれくらいの期間でプロジェクトが完了しますか？",
    answer: "プロジェクトの複雑さによりますが、ほとんどの場合7〜14日以内に完了します。",
  },
  {
    question: "返金はできますか？",
    answer: "最初の数日間でご満足いただけなかった場合は、返金保証を提供しています。",
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
