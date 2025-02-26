import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Project2({ language }) {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-300 hover:text-white transition mb-6">
        <ArrowLeft className="w-6 h-6" />
        <span className="ml-2">{language === "en" ? "Back" : "戻る"}</span>
      </button>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {language === "en" ? "Case Study for " : "ケーススタディ："}
        <span className="text-blue-500">{language === "en" ? "Prestige Drywall Services" : "プレステージドライウォールサービス"}</span>
      </h1>

      <p className="text-gray-300 leading-relaxed max-w-3xl">
        {language === "en" ? "Prestige Drywall needed a strong online presence to showcase their top-tier remodeling and drywall services. We focused on designing a highly visual and professional website to attract new clients."
          : "Prestige Drywallは、一流のリモデリングとドライウォールサービスを紹介するために強力なオンラインプレゼンスを必要としていました。新しいクライアントを引き付けるため、視覚的に魅力的でプロフェッショナルなウェブサイトの設計に重点を置きました。"}
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Challenges" : "課題"}
      </h2>
      <p className="text-gray-300 max-w-3xl">
        {language === "en" ? "The main challenge was to highlight their craftsmanship while maintaining a fast, responsive, and SEO-optimized website."
          : "主な課題は、職人技を強調しながら、高速でレスポンシブかつSEO最適化されたウェブサイトを維持することでした。"}
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Design Approach" : "デザインアプローチ"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Visual Storytelling" : "ビジュアルストーリーテリング"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" ? "We integrated high-quality images and videos of past projects to create an engaging experience."
              : "高品質な画像や過去のプロジェクトの動画を統合し、魅力的な体験を提供しました。"}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Mobile Optimization" : "モバイル最適化"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" ? "We ensured a seamless experience across all devices, improving accessibility and user engagement."
              : "すべてのデバイスでシームレスな体験を提供し、アクセシビリティとユーザーエンゲージメントを向上させました。"}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-blue-500">{language === "en" ? "Final Outcome" : "最終成果"}</h3>
        <p className="text-gray-300 max-w-3xl">
          {language === "en" ? "The result was a professional and visually captivating website that significantly boosted Prestige Drywall's online visibility."
            : "その結果、Prestige Drywallのオンラインでの可視性を大幅に向上させる、プロフェッショナルで視覚的に魅力的なウェブサイトが完成しました。"}
        </p>
        <img 
          src="/images/Prestige.png" 
          alt="Prestige Drywall Website Design"
          className="mt-4 w-full max-w-lg flex justify-center mx-auto rounded-lg shadow-lg"
        />
      </div>

      <Footer />
    </section>
  );
}
