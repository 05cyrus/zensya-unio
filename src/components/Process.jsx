import React from "react";
import ScrollFloat from './animations/ScrollFloat';

const steps = [
  {
    number: "1",
    title: { en: "Consult", ja: "相談" },
    description: { en: "We’ll discuss your goals and vision over a call to ensure we're aligned.", ja: "電話で目標とビジョンについて話し合い、一致していることを確認します。" }
  },
  {
    number: "2",
    title: { en: "Design", ja: "デザイン" },
    description: { en: "We’ll create a custom design that reflects your brand and meets your needs.", ja: "ブランドを反映し、ニーズに合ったカスタムデザインを作成します。" }
  },
  {
    number: "3",
    title: { en: "Deliver", ja: "納品" },
    description: { en: "Your website will be delivered, optimized for performance and ready to impress.", ja: "ウェブサイトは納品され、パフォーマンスが最適化され、印象的なものになります。" }
  }
];

export default function Process({ language }) {
  return (
    <section className="py-20 bg-black text-white text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold">
      <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
        {language === "en" ? "Our 3-step process." : "3ステッププロセス。"}
        </ScrollFloat>
      </h2>

      {/* Steps Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 mt-12 px-6 md:px-20">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
            {/* Step Number */}
            <div className="relative flex items-center justify-center w-20 h-20 bg-black border border-gray-700 rounded-full text-4xl font-bold">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-blue-500 mt-4">{step.title[language]}</h3>

            {/* Description */}
            <p className="text-gray-400 max-w-xs mt-2">{step.description[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
