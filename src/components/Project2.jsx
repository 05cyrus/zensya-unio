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
        <span className="text-blue-500">{language === "en" ? "Sushi Sensation Website" : "寿司センセーション ウェブサイト"}</span>
      </h1>

      <p className="text-gray-300 leading-relaxed max-w-3xl">
        {language === "en" 
          ? "Sushi Sensation required a modern and visually immersive website to showcase its premium dining experience. The goal was to create an elegant, user-friendly platform that seamlessly integrates menu browsing, reservations, and storytelling."
          : "寿司センセーションは、プレミアムなダイニング体験を紹介するために、モダンで視覚的に魅力的なウェブサイトを必要としていました。メニューの閲覧、予約、ストーリーテリングをシームレスに統合するエレガントで使いやすいプラットフォームを作成することが目標でした。"
        }
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Challenges" : "課題"}
      </h2>
      <p className="text-gray-300 max-w-3xl">
        {language === "en" 
          ? "The main challenge was to balance aesthetics with functionality, ensuring a luxurious yet intuitive experience across devices while maintaining fast loading speeds and SEO optimization."
          : "主な課題は、美しさと機能性のバランスを取ることでした。すべてのデバイスで直感的かつ高級感のある体験を提供しつつ、高速な読み込み速度とSEO最適化を維持することが求められました。"
        }
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Design Approach" : "デザインアプローチ"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Visual Storytelling" : "ビジュアルストーリーテリング"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "We incorporated high-resolution imagery of sushi creations and the restaurant's ambiance to enhance user engagement and evoke a sense of exclusivity."
              : "寿司の美しい盛り付けや店内の雰囲気を高解像度の画像で表現し、ユーザーエンゲージメントを向上させ、特別感を演出しました。"
            }
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Seamless Navigation" : "シームレスなナビゲーション"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "A sticky navigation bar ensures that users can effortlessly access the menu, reservations, and contact information without losing their place."
              : "固定ナビゲーションバーを導入し、ユーザーがメニュー、予約、連絡先情報に簡単にアクセスできるようにしました。"
            }
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Mobile Optimization" : "モバイル最適化"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "The site was designed with a mobile-first approach, ensuring an immersive experience across all devices."
              : "モバイルファーストのアプローチで設計され、すべてのデバイスで没入感のある体験を提供します。"
            }
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Reservation System" : "予約システム"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "A streamlined booking system allows customers to make reservations quickly and efficiently, enhancing the restaurant's operational efficiency."
              : "シンプルで効率的な予約システムを導入し、顧客が素早く予約できるようにし、レストランの運営効率を向上させました。"
            }
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-blue-500">{language === "en" ? "Final Outcome" : "最終成果"}</h3>
        <p className="text-gray-300 max-w-3xl">
          {language === "en" 
            ? "The final result is a sleek, high-performance website that elevates Sushi Sensation’s brand image, increases online reservations, and enhances customer engagement."
            : "最終的に、Sushi Sensationのブランドイメージを高め、オンライン予約を増加させ、顧客エンゲージメントを向上させる洗練された高性能なウェブサイトが完成しました。"
          }
        </p>
        <img 
          src="/images/Sushi.png" 
          alt="Sushi Sensation Website Design"
          className="mt-4 w-full max-w-lg flex justify-center mx-auto rounded-lg shadow-lg"
        />
      </div>

      <Footer />
    </section>
  );
}
