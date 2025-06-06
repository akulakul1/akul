import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "Figma", icon: "/Figma.png", info: "12 Projects", bg: "bg-purple-400" },
  { title: "React", icon: "/React.png", info: "6 Projects", bg: "bg-red-400" },
  { title: "Data Science", icon: "/D.png", info: "2 Models", bg: "bg-yellow-300" },
  { title: "Flutter", icon: "/Flutter.png", info: "3 Projects", bg: "bg-green-300" },
  { title: "API", icon: "/API.png", info: "6 Integrations", bg: "bg-blue-300" },
  { title: "Project Management", icon: "/PM.png", info: "5 Projects", bg: "bg-pink-300" },
  { title: "Design", icon: "/Figma.png", info: "8 Projects", bg: "bg-orange-300" },
  { title: "Python", icon: "Python.png", info: "6 Projects", bg: "bg-indigo-300" },
  { title: "Tailwind", icon: "Tailwind.png", info: "6 Projects", bg: "bg-lime-300" },
];

export default function SkillCards() {
  return (
    <section className="bg-white flex flex-col items-center justify-center px-4 py-10">
      {/* Heading with animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-black text-3xl md:text-4xl font-bold mb-8"
      >
        MY SKILLS
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`rounded-xl p-6 ${skill.bg} text-black relative overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300`}
          >
            <div className="text-xl font-bold">{skill.title}</div>
            <div className="text-sm mt-2">{skill.info}</div>
            <div className="absolute bottom-4 right-4 w-10 h-10">
              <img
                src={skill.icon}
                alt={skill.title}
                className="w-full h-full object-contain rounded-full bg-black p-1"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
