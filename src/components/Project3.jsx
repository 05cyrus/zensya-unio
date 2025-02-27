import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Project3({ language }) {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-300 hover:text-white transition mb-6">
        <ArrowLeft className="w-6 h-6" />
        <span className="ml-2">{language === "en" ? "Back" : "戻る"}</span>
      </button>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {language === "en" ? "Case Study for " : "ケーススタディ："}
        <span className="text-blue-500">{language === "en" ? "Spain Academy" : "スペインアカデミー"}</span>
      </h1>

      <p className="text-gray-300 leading-relaxed max-w-3xl">
        {language === "en" ? "Spain Academy needed a dynamic, multilingual website to attract international students. Our goal was to create an engaging, user-friendly platform with seamless navigation."
          : "スペインアカデミーは、国際的な学生を引き付けるためのダイナミックで多言語対応のウェブサイトを必要としていました。私たちの目標は、魅力的で使いやすく、シームレスなナビゲーションを備えたプラットフォームを作成することでした。"}
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Challenges" : "課題"}
      </h2>
      <p className="text-gray-300 max-w-3xl">
        {language === "en" ? "The biggest challenge was implementing a robust language-switching feature while ensuring that performance and SEO rankings were not affected."
          : "最大の課題は、パフォーマンスやSEOランキングに影響を与えずに強力な言語切り替え機能を実装することでした。"}
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Design Approach" : "デザインアプローチ"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Multilingual Support" : "多言語サポート"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" ? "We integrated a seamless language-switching option with auto-detection based on the user's location."
              : "ユーザーの位置情報に基づいて自動検出されるシームレスな言語切り替えオプションを統合しました。"}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Interactive Learning Tools" : "インタラクティブ学習ツール"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" ? "We designed interactive learning sections to enhance student engagement."
              : "学生のエンゲージメントを高めるために、インタラクティブな学習セクションを設計しました。"}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-blue-500">{language === "en" ? "Final Outcome" : "最終成果"}</h3>
        <p className="text-gray-300 max-w-3xl">
          {language === "en" ? "Spain Academy's new website increased international applications by 35% and improved user retention."
            : "スペインアカデミーの新しいウェブサイトにより、国際的な応募が35%増加し、ユーザーの定着率が向上しました。"}
        </p>
        <img 
          src="/images/Spain-Academy.png" 
          alt="Spain Academy Website Design"
          className="mt-4 w-full max-w-lg flex justify-center mx-auto rounded-lg shadow-lg"
        />
      </div>

      <Footer />
    </section>
  );
}
