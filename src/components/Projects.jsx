import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";


const projects = [
  {
    name: { en: "Cuyar", ja: "エドテック" },
    image: "/images/Real-estate-mockup.png",
    link: "/project1",
  },
  {
    name: { en: "Prestige", ja: "プレステージ" },
    image: "/images/Sushi-mockup.png",
    link: "/project2",
  },
  {
    name: { en: "Spain Academy", ja: "スペインアカデミー" },
    image: "/images/SpainAcademy.png",
    link: "/project3",
  },
  {
    name: { en: "Sumit's Portfolio", ja: "イアンのポートフォリオ" },
    image: "/images/sumit-portfolio-mockup.jpg",
    link: "/project4",
  },
];

export default function Projects({ language }) {
  return (
    <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          {language === "en" ? "Sample Websites Design" : "ウェブサイトデザインのサンプル"}
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-6 md:px-20">
        {projects.map((project, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl bg-gray-900 shadow-lg">
            <img
              src={project.image}
              alt={project.name[language]}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end items-center p-6">
              <h3 className="text-lg font-semibold">{project.name[language]}</h3>
              <Link to={project.link} className="mt-3 flex items-center gap-2 bg-white text-black w-fit px-4 py-2 rounded-full text-sm">
                {language === "en" ? "View Project" : "プロジェクトを見る"} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
