import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Wassup Media Co.",
    image: "public/images/WassupMediaCo.png",
    link: "/project1",
  },
  {
    name: "Prestige",
    image: "public/images/Prestige.png",
    link: "/project2",
  },
  {
    name: "Spain Academy",
    image: "public/images/SpainAcademy.png",
    link: "/project3",
  },
  {
    name: "Ian's Portfolio",
    image: "public/images/IanPortfolio.png",
    link: "/project4",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-black text-white text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold">
        Explore how we've helped <br />
        <span className="text-blue-500">businesses</span> like yours grow through <br />
        a perfect website.
      </h2>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-6 md:px-20">
        {projects.map((project, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl bg-gray-900 shadow-lg">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end items-center p-6">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <Link to={project.link} className="mt-3 flex items-center gap-2 bg-white text-black w-fit px-4 py-2 rounded-full text-sm">
                View Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
