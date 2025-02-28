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

      {/* 🔥 Updated Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {language === "en" ? "Case Study for " : "ケーススタディ："}
        <span className="text-yellow-500">{language === "en" ? "Gym24 - Premium Fitness Center" : "Gym24 - プレミアムフィットネスセンター"}</span>
      </h1>

      {/* 🔥 New Description */}
      {/* <p className="text-gray-300 leading-relaxed max-w-3xl">
        {language === "en" 
          ? "Gym24 is a modern fitness center that provides high-quality training spaces, professional trainers, and state-of-the-art equipment. The goal was to develop a digital platform that showcases the gym's facilities, membership plans, and expert trainers while offering a seamless booking experience."
          : "Gym24は、最先端の設備とプロフェッショナルトレーナーを備えた最新のフィットネスセンターです。このジムの施設、メンバーシッププラン、トレーナーを紹介し、シームレスな予約体験を提供するデジタルプラットフォームを開発することが目的でした。"}
      </p> */}

      {/* 🔥 Updated Challenges Section */}
      {/* <h2 className="text-2xl font-bold text-yellow-500 mt-12">
        {language === "en" ? "Challenges" : "課題"}
      </h2>
      <p className="text-gray-300 max-w-3xl">
        {language === "en" 
          ? "One of the main challenges was designing a high-performance website that could load quickly while showcasing high-resolution gym images, membership pricing, and real-time trainer availability."
          : "主な課題は、高解像度のジム画像、メンバーシップ価格、リアルタイムのトレーナー情報を表示しながらも、高速に読み込まれるウェブサイトを設計することでした。"}
      </p> */}

      {/* 🔥 Updated Design Approach */}
      <h2 className="text-2xl font-bold text-yellow-500 mt-12">
        {language === "en" ? "Design Approach" : "デザインアプローチ"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Modern & Dynamic UI" : "モダンでダイナミックなUI"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "We implemented a sleek, dark-themed design with bright yellow highlights to give a strong, energetic feel that aligns with Gym24's branding."
              : "ジム24のブランドイメージに合わせ、エネルギッシュな印象を与えるダークテーマのデザインに明るい黄色のアクセントを加えました。"}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Seamless Membership Plans" : "シームレスなメンバーシッププラン"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "The website features a clear breakdown of different membership options, allowing users to compare plans and sign up effortlessly."
              : "異なるメンバーシップオプションを明確に表示し、ユーザーがプランを比較し、簡単に登録できるようにしました。"}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Trainer Profiles & Booking" : "トレーナープロフィール＆予約"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "Each trainer has a dedicated profile page where users can view their expertise and book personal training sessions instantly."
              : "各トレーナーには専用のプロフィールページがあり、専門分野を確認し、パーソナルトレーニングを即座に予約できます。"}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{language === "en" ? "Mobile Optimization" : "モバイル最適化"}</h3>
          <p className="text-gray-400 mt-2">
            {language === "en" 
              ? "The entire website was designed with a mobile-first approach, ensuring smooth navigation across all devices."
              : "すべてのデバイスでスムーズなナビゲーションを保証するため、モバイルファーストのアプローチで設計しました。"}
          </p>
        </div>
      </div>

      {/* 🔥 Final Outcome */}
      <div className="mt-12">
        {/* <h3 className="text-2xl font-bold text-yellow-500">{language === "en" ? "Final Outcome" : "最終成果"}</h3>
        <p className="text-gray-300 max-w-3xl">
          {language === "en" 
            ? "The final website successfully increased Gym24's online memberships by 40% within three months, improved user engagement, and provided a seamless experience for gym-goers."
            : "最終的に、Gym24のオンラインメンバーシップが3か月以内に40％増加し、ユーザーエンゲージメントが向上し、ジム利用者にとってシームレスな体験を提供しました。"}
        </p> */}

        {/* 🔥 New Gym Image */}
        <img 
          src="/images/gym.png" 
          alt="Gym24 Website Design"
          loading="lazy"
          className="mt-4 w-full max-w-lg flex justify-center mx-auto rounded-lg shadow-lg"
        />
      </div>

      <Footer />
    </section>
  );
}
