import React from "react";
import { Check } from "lucide-react";
import StarBorder from "./animations/StarBorder"; 
import ScrollFloat from './animations/ScrollFloat';

const plans = [
  {
    title: { en: "Zensya", ja: "ゼンシャ" },
    features: [
      { en: "Custom Landing Page Design", ja: "カスタムランディングページデザイン" },
      { en: "Mobile-Optimized and Fast Loading", ja: "モバイル最適化と高速読み込み" },
      { en: "Fast Turnaround Time (Within 7 Days)", ja: "迅速な対応（7日以内）" },
      { en: "One Free Revision to Perfect Your Design", ja: "デザインを完璧にするための1回の無料修正" },
      { en: "Basic Contact Form Integration", ja: "基本的なお問い合わせフォームの統合" }
    ]
  },
  {
    title: { en: "Zensya +", ja: "ゼンシャ+" },
    features: [
      { en: "Full Website Design (Up to 5 Pages)", ja: "フルウェブサイトデザイン（最大5ページ）" },
      { en: "High-Converting Sales Pages", ja: "高コンバージョンセールスページ" },
      { en: "Fully Responsive & Performance Optimized", ja: "完全レスポンシブ＆パフォーマンス最適化" },
      { en: "Three Free Revisions to Refine Every Detail", ja: "細部まで磨くための3回の無料修正" },
      { en: "Post Launch Support", ja: "ローンチ後のサポート" }
    ]
  },
  {
    title: { en: "Subscription", ja: "サブスクリプション" },
    features: [
      { en: "Domain + Hosting Provided", ja: "ドメイン＋ホスティング提供" },
      { en: "Website Design (Up to 3 Pages)", ja: "ウェブサイトデザイン（最大3ページ）" },
      { en: "High-Converting Sales Pages", ja: "高コンバージョンセールスページ" },
      { en: "One Free Revision to Refine Every Detail", ja: "細部を磨くための1回の無料修正" }
    ]
  }
];

export default function PricingPlans({ language }) {
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
        {language === "en" ? "Transparent Plans." : "透明なプラン。"}
        </ScrollFloat>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-20">
        {plans.map((plan, index) => (
          <StarBorder key={index} color="red" speed="6s" className="w-full">
            <div className="bg-gray-900 rounded-xl p-8 text-left shadow-lg">
              <h3 className="text-2xl font-bold">{plan.title[language]}</h3>
              <p className="mt-4 text-gray-300 font-semibold">
                {language === "en" ? "What's included?" : "含まれるもの？"}
              </p>
              <ul className="mt-4 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-300">
                    <Check className="text-blue-500 w-4 h-4" />
                    <span>{feature[language]}</span>
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
