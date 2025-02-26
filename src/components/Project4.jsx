import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Project4({ language }) {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-300 hover:text-white transition mb-6">
        <ArrowLeft className="w-6 h-6" />
        <span className="ml-2">{language === "en" ? "Back" : "戻る"}</span>
      </button>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {language === "en" ? "Case Study for " : "ケーススタディ："}
        <span className="text-blue-500">{language === "en" ? "Ian's Portfolio" : "イアンのポートフォリオ"}</span>
      </h1>

      <p className="text-gray-300 leading-relaxed max-w-3xl">
        {language === "en" 
          ? "Ian, a talented UI/UX designer, wanted a personal portfolio website that showcased his design skills and professional journey. He needed a sleek, modern layout that was fully responsive and performance-optimized."
          : "才能あるUI/UXデザイナーのイアンは、デザインスキルとプロフェッショナルな旅を紹介する個人のポートフォリオウェブサイトを求めていました。彼は、完全にレスポンシブでパフォーマンス最適化された洗練されたモダンなレイアウトを必要としていました。"}
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Challenges" : "課題"}
      </h2>
      <p className="text-gray-300 max-w-3xl">
        {language === "en" 
          ? "One of the biggest challenges was making sure Ian’s high-resolution design assets loaded quickly while maintaining a clean aesthetic. We also needed a seamless user experience across all devices."
          : "最大の課題の1つは、イアンの高解像度デザインアセットが迅速に読み込まれ、クリーンな美観を維持できるようにすることでした。また、すべてのデバイスでシームレスなユーザー体験を提供する必要がありました。"}
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Design Approach" : "デザインアプローチ"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Color Palette" : "カラーパレット"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" ? "We crafted a modern and professional monochromatic theme with blue highlights to enhance readability and elegance."
              : "モダンでプロフェッショナルなモノクロテーマを作成し、青のアクセントを加えて可読性とエレガンスを強調しました。"}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Typography & UX" : "タイポグラフィ＆UX"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" ? "We used a clean, sans-serif font for a contemporary look, ensuring a smooth reading experience on all devices."
              : "現代的な外観を確保するためにクリーンなサンセリフフォントを使用し、すべてのデバイスでスムーズな読書体験を提供しました。"}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-blue-500">{language === "en" ? "Final Outcome" : "最終成果"}</h3>
        <p className="text-gray-300 max-w-3xl">
          {language === "en" ? "The final design successfully showcased Ian’s work with an interactive, smooth-scrolling layout that highlights his strengths."
            : "最終的なデザインは、イアンの作品をインタラクティブなスムーズスクロールレイアウトで効果的に紹介し、彼の強みを際立たせました。"}
        </p>
        <img 
          src="/images/IanPortfolio.png" 
          alt="Ian's Portfolio Design"
          className="mt-4 w-full max-w-lg flex justify-center mx-auto rounded-lg shadow-lg"
        />
      </div>

      <Footer />
    </section>
  );
}
