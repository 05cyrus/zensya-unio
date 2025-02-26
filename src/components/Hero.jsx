import React from "react";
import { Star } from "lucide-react";
import SplitText from "./animations/splitText";  
import RotatingText from "./animations/RotatingText";

export default function Hero({ language }) {
  return (
    <section className="h-screen bg-gradient-to-b from-blue-800/100 via-black/90 to-black text-white flex flex-col justify-center items-center px-4 text-center">
      {/* Trust Indicators */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <img
              key={i}
              src={`/images/p${i}.jpg`}
              alt="Client"
              className="w-8 h-8 rounded-full border-2 border-black"
            />
          ))}
        </div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm text-gray-400">
          {language === "en" ? "50+ Clients Satisfied" : "50+ のクライアントが満足"}
        </span>
      </div>

      {/* ✨ Animated Split Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-4xl flex items-center justify-center gap-2 whitespace-nowrap">
        <SplitText
          text={language === "en" ? "We Build" : "私たちは構築する"}
          className="whitespace-nowrap"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translateY(20px)" }}
          animationTo={{ opacity: 1, transform: "translateY(0px)" }}
        />
        <RotatingText
          texts={language === "en" ? ["Aesthetic", "High-Converting", "Functional"] : ["美的", "高変換", "機能的"]}
          className="text-blue-500 whitespace-nowrap"
          rotationInterval={2000}  
        />
      </h1>
      <SplitText
        text={language === "en" ? "Websites for Businesses." : "ビジネス向けのウェブサイト。"}
        className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-4xl"
        delay={50}
        animationFrom={{ opacity: 0, transform: "translateY(20px)" }}
        animationTo={{ opacity: 1, transform: "translateY(0px)" }}
      />
      {/* Subtext */}
      <p className="text-gray-400 max-w-3xl mx-auto mt-4 text-lg">
        {language === "en"
          ? "High-converting websites designed with strategic copy and seamless development to attract ready-to-buy customers, turning visitors into loyal clients and driving growth."
          : "戦略的なコピーとシームレスな開発を備えた高変換のウェブサイトで、訪問者を忠実なクライアントに変え、成長を促進します。"}
      </p>

      {/* CTA Button */}
      <a href="#contact" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-full">
        {language === "en" ? "Book a 15-min call" : "15分の通話を予約"}
      </a>

      {/* Fixed Price Text */}
      <p className="text-gray-400 mt-4 text-sm">
        {language === "en" ? "Fixed Prices. No long-term contracts." : "固定価格。長期契約なし。"}
      </p>
    </section>
  );
}
