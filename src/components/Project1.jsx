import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Project1({ language }) {
  const navigate = useNavigate();
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-300 hover:text-white transition mb-6">
        <ArrowLeft className="w-6 h-6" />
        <span className="ml-2">{language === "en" ? "Back" : "戻る"}</span>
      </button>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {language === "en" ? "Case Study for " : "ケーススタディ："}
        <span className="text-blue-500">{language === "en" ? "EdTech" : "エドテック"}</span>
      </h1>

      <p className="text-gray-300 leading-relaxed max-w-3xl">
        {language === "en" ? "With the increasing demands on parents' time, staying updated on their child's progress can be challenging. Our solution was to create an intuitive, user-friendly platform that helps parents monitor performance in real time."
          : "保護者の時間的制約が増す中で、子供の進捗を把握することは困難です。私たちは、保護者がリアルタイムで成績を監視できる直感的で使いやすいプラットフォームを開発しました。"}
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Challenges" : "課題"}
      </h2>
      <p className="text-gray-300 max-w-3xl">
        {language === "en" ? "The key challenge was making the platform both visually appealing and highly functional while ensuring that data remained secure and accessible."
          : "このプラットフォームを視覚的に魅力的かつ機能的にしながら、データのセキュリティとアクセス性を確保することが最大の課題でした。"}
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Design Approach" : "デザインアプローチ"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "User-Centered Design" : "ユーザー中心のデザイン"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" ? "We focused on creating an intuitive dashboard that enables parents and teachers to track progress effortlessly."
              : "保護者と教師が簡単に進捗を追跡できる直感的なダッシュボードの作成に重点を置きました。"}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Security & Performance" : "セキュリティとパフォーマンス"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" ? "We ensured strong encryption methods and optimized performance for a seamless experience."
              : "強力な暗号化手法を採用し、シームレスな体験のためにパフォーマンスを最適化しました。"}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-blue-500">{language === "en" ? "Final Outcome" : "最終成果"}</h3>
        <p className="text-gray-300 max-w-3xl">
          {language === "en" ? "The final product improved engagement and made progress tracking easier for parents and educators alike."
            : "最終製品は、エンゲージメントを向上させ、保護者と教育者が進捗を簡単に追跡できるようになりました。"}
        </p>
        <img 
          src="/images/edtech.jpg" 
          alt="EdTech Dashboard Design"
          className="mt-4 w-full max-w-lg flex justify-center mx-auto rounded-lg shadow-lg"
        />
      </div>

      <Footer />
    </section>
  );
}
