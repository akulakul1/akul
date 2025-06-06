import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "Figma", icon: "/Figma.png", info: "12 Projects", bg: "bg-purple-400" },
  { title: "Tailwind", icon: "/icons/tailwind.png", info: "18 Projects", bg: "bg-red-400" },
  { title: "AI", icon: "/icons/ai.png", info: "10 Models", bg: "bg-yellow-300" },
  { title: "ML", icon: "/icons/ml.png", info: "14 Datasets", bg: "bg-green-300" },
  { title: "API", icon: "/icons/api.png", info: "20 APIs", bg: "bg-blue-300" },
  { title: "React", icon: "/icons/react.png", info: "15 Apps", bg: "bg-pink-300" },
  { title: "DevOps", icon: "/icons/devops.png", info: "8 Projects", bg: "bg-orange-300" },
  { title: "Python", icon: "/icons/python.png", info: "25 Scripts", bg: "bg-indigo-300" },
  { title: "Node.js", icon: "/icons/node.png", info: "12 Servers", bg: "bg-lime-300" },
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
