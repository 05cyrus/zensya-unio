import React from "react";

const testimonials = [
  {
    name: "Varshith Merugu",
    role: { en: "Founder, WassupMediaCo", ja: "創設者, WassupMediaCo" },
    text: {
      en: "Tanisq's proficiency in Next.js allowed us to build a good-looking website with ease. His attention to detail and commitment to best practices is unmatched.",
      ja: "TanisqのNext.jsの熟練度により、簡単に見栄えの良いウェブサイトを構築できました。彼の細部へのこだわりとベストプラクティスへの取り組みは他に類を見ません。"
    },
    avatar: "/images/p1.jpg"
  },
  {
    name: "Alex Thompson",
    role: { en: "Freelancer", ja: "フリーランサー" },
    text: {
      en: "Our e-commerce platform's performance skyrocketed after Tanisq optimized it. His deep understanding of Shopify was crucial.",
      ja: "Tanisqが最適化した後、私たちのEコマースプラットフォームのパフォーマンスは急上昇しました。彼のShopifyの深い理解が重要でした。"
    },
    avatar: "/images/p2.jpg"
  },
  {
    name: "Lisa Patel",
    role: { en: "Marketing Director, MobileFirst", ja: "マーケティングディレクター, MobileFirst" },
    text: {
      en: "The responsive design Tanisq implemented works flawlessly across all devices. Our mobile conversion rates have increased by 40% since the redesign.",
      ja: "Tanisqが実装したレスポンシブデザインは、すべてのデバイスで完璧に機能します。リニューアル以来、モバイルのコンバージョン率が40%向上しました。"
    },
    avatar: "/images/p3.jpg"
  },
  {
    name: "David Kim",
    role: { en: "Product Owner, EnterpriseApp", ja: "プロダクトオーナー, EnterpriseApp" },
    text: {
      en: "Tanisq's expertise in Angular helped us modernize our legacy application. The refactored codebase is now much easier to maintain and extend.",
      ja: "TanisqのAngularの専門知識により、レガシーアプリケーションをモダナイズできました。リファクタリングされたコードベースは、はるかに管理しやすく、拡張しやすくなりました。"
    },
    avatar: "/images/p4.jpg"
  },
  {
    name: "Ruby Liza",
    role: { en: "Accessibility Advocate, InclusiveTech", ja: "アクセシビリティ提唱者, InclusiveTech" },
    text: {
      en: "The accessibility improvements Tanisq made to our site have opened up our services to a wider audience. Their commitment to inclusive design is commendable.",
      ja: "Tanisqが当サイトに加えたアクセシビリティ改善により、より幅広いオーディエンスにサービスを提供できるようになりました。彼の包括的なデザインへの取り組みは称賛に値します。"
    },
    avatar: "/images/p5.jpg"
  }
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
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="text-left">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.role[language]}</p>
              </div>
            </div>
            <p className="text-gray-300 text-left mt-4">{testimonial.text[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
