import React from "react";
import { LayoutGrid, Zap, Puzzle, Layers, Users, Infinity } from "lucide-react";
import ScrollFloat from './animations/ScrollFloat';

const features = [
  {
    title: { en: "Responsive Design", ja: "レスポンシブデザイン" },
    description: { en: "Flawless experiences across all devices and screen sizes.", ja: "すべてのデバイスと画面サイズで完璧な体験を提供。" },
    icon: <LayoutGrid className="w-8 h-8 text-blue-500" />,
  },
  {
    title: { en: "Lightning Fast", ja: "超高速" },
    description: { en: "Optimized code for speedy load times and smooth interactions.", ja: "高速な読み込みとスムーズな操作のための最適化されたコード。" },
    icon: <Zap className="w-8 h-8 text-blue-500" />,
  },
  {
    title: { en: "Custom Solutions", ja: "カスタムソリューション" },
    description: { en: "Tailor-made frontend solutions to match your unique requirements.", ja: "独自の要件に合ったオーダーメイドのフロントエンドソリューション。" },
    icon: <Puzzle className="w-8 h-8 text-blue-500" />,
  }
];

export default function WhyUs({ language }) {
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
        {language === "en" ? "But, like why us?" : "でも、なぜ私たち？"}
        </ScrollFloat>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 px-6 md:px-20">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start space-y-4">
            {feature.icon}
            <h3 className="text-lg font-semibold">{feature.title[language]}</h3>
            <p className="text-gray-400">{feature.description[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
