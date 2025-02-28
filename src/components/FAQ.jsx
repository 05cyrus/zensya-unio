import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Footer from "./Footer";
import ScrollFloat from './animations/ScrollFloat';

const faqs = [
  {
    question: { en: "Who's behind Zensya?", ja: "Zensyaの背後には誰がいますか？" },
    answer: { en: "Zensya is a team of expert designers and developers committed to delivering top-notch websites.", ja: "Zensyaは、一流のウェブサイトを提供することに専念する専門のデザイナーと開発者のチームです。" }
  },
  {
    question: { en: "Why not hire a full-time designer and developer?", ja: "なぜフルタイムのデザイナーと開発者を雇わないのですか？" },
    answer: { en: "Hiring a full-time team is costly and time-consuming. We provide the same expertise without the overhead.", ja: "フルタイムのチームを雇うことは費用と時間がかかります。私たちは同じ専門知識を提供し、余計なコストを削減します。" }
  },
  {
    question: { en: "What if I'm not happy with the results?", ja: "結果に満足できない場合はどうなりますか？" },
    answer: { en: "We offer revisions to ensure you are satisfied with the final product.", ja: "最終的な製品に満足できるように修正を提供します。" }
  }
];

export default function FAQ({ language }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold">
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
      {language === "en" ? "You got Questions? We got Answers." : "質問がありますか？答えがあります。"}
      </ScrollFloat>
      </h2>

      <div className="mt-12 px-6 md:px-20 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border bg-gray-950 border-gray-800 rounded-lg mb-4">
            <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center p-4 text-left">
              <span className="text-lg">{faq.question[language]}</span>
              {openIndex === index ? <Minus className="w-4 h-4 text-gray-300" /> : <Plus className="w-4 h-4 text-gray-300" />}
            </button>
            {openIndex === index && (
              <div className="pt-4 pl-4 pb-1 text-left text-sm text-gray-300 border-t border-gray-700">
                {faq.answer[language]}
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
