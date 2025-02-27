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
        <span className="text-blue-500">{language === "en" ? "Luxury Real Estate Website" : "高級不動産ウェブサイト"}</span>
      </h1>

      <p className="text-gray-300 leading-relaxed max-w-3xl">
        {language === "en" 
          ? "A top-tier real estate firm required an elegant and modern website to showcase their premium properties and attract high-net-worth clients. The goal was to create a visually stunning, easy-to-navigate platform that enhances the property browsing and booking experience."
          : "一流の不動産会社は、高級物件を紹介し、富裕層のクライアントを引き付けるために、エレガントでモダンなウェブサイトを必要としていました。視覚的に魅力的で、使いやすいプラットフォームを作成し、物件の閲覧と予約の体験を向上させることが目標でした。"
        }
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Challenges" : "課題"}
      </h2>
      <p className="text-gray-300 max-w-3xl">
        {language === "en" 
          ? "The primary challenge was to design a luxury experience online that mirrored the sophistication and elegance of the properties. Additionally, the website needed to be fast, responsive, and SEO-optimized for high-ranking visibility."
          : "主な課題は、物件の洗練された高級感を反映したラグジュアリーなオンライン体験をデザインすることでした。また、サイトは高速でレスポンシブかつSEO最適化され、高い検索順位を確保する必要がありました。"
        }
      </p>

      <h2 className="text-2xl font-bold text-blue-500 mt-12">
        {language === "en" ? "Design Approach" : "デザインアプローチ"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Luxury Aesthetics" : "高級感のあるデザイン"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "We used a clean, minimalist design with large high-quality images to create a premium feel and let the properties speak for themselves."
              : "クリーンでミニマリストなデザインを採用し、高品質な画像を大きく配置することで、高級感を演出し、物件そのものの魅力を引き出しました。"
            }
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Seamless Navigation" : "シームレスなナビゲーション"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "A smooth, intuitive browsing experience was implemented, allowing potential buyers to easily explore properties, compare features, and book viewings."
              : "スムーズで直感的な閲覧体験を実現し、購入希望者が物件を簡単に閲覧し、特徴を比較し、内覧を予約できるようにしました。"
            }
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Mobile Optimization" : "モバイル最適化"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "The site was designed with a mobile-first approach to ensure a flawless experience across all devices."
              : "すべてのデバイスで完璧な体験を提供するため、モバイルファーストのアプローチで設計しました。"
            }
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "High-Performance SEO" : "高パフォーマンスSEO"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "Optimized metadata, fast-loading pages, and structured content helped improve search rankings and drive organic traffic."
              : "最適化されたメタデータ、高速読み込みページ、構造化されたコンテンツにより、検索ランキングを向上させ、オーガニックトラフィックを増加させました。"
            }
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-blue-500">{language === "en" ? "Final Outcome" : "最終成果"}</h3>
        <p className="text-gray-300 max-w-3xl">
          {language === "en" 
            ? "The final product is a visually stunning, high-performance real estate website that elevates the brand image and enhances client engagement."
            : "最終的に、視覚的に魅力的で高性能な不動産ウェブサイトが完成し、ブランドイメージを向上させ、クライアントのエンゲージメントを強化しました。"
          }
        </p>
        <img 
          src="/images/Real-estate.png" 
          alt="Luxury Real Estate Website Design"
          className="mt-4 w-full max-w-lg flex justify-center mx-auto rounded-lg shadow-lg"
        />
      </div>

      <Footer />
    </section>
  );
}
