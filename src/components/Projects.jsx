"use client";

import React, { useRef } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "PAWS & AI Companion",
    description:
      "A smart assistant leveraging AWS cloud services and AI to boost productivity.",
    image: "/showcase.png",
  },
  {
    title: "Office Olympics Game App",
    description:
      "A fun and competitive app designed for NYTT Analytics' office team-building events.",
    image: "/showcase1.png",
  },
  {
    title: "Character Generator",
    description:
      "Generates characters with power levels and unique backstories for creative projects.",
    image: "/char-gen.jpg",
  },
  {
    title: "AI Team Collaboration",
    description:
      "Tools to enhance team collaboration using AI-powered analytics and communication.",
    image: "/ai-team.jpg",
  },
  {
    title: "User Engagement Dashboard",
    description:
      "Visualize key metrics and insights to improve user engagement across platforms.",
    image: "/dashboard.jpg",
  },
];

export default function Projects() {
  return (
    <main
      id="projects"
      className="bg relative p-4 min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-0">
        {/* Left: Title */}
        <motion.h1
          className="text-6xl font-extrabold text-black relative z-10 md:w-1/3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          My <br/>Projects
        </motion.h1>

        {/* Right: Project Cards */}
        <BentoGrid className="w-full md:w-2/3 relative z-10">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              once: false,
              margin: "0px 0px -100px 0px",
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className={`relative transition-transform duration-300 hover:scale-105 ${
                  index === 1 ? "md:col-span-2" : ""
                }`}
              >
                <BentoGridItem
                  className="
                    relative
                    rounded-md
                    bg-black bg-opacity-30
                    bg-clip-padding
                    backdrop-filter backdrop-blur-xl
                    border border-gray-700/50
                    shadow-lg shadow-black/40
                    h-full
                    w-full
                    z-10
                  "
                  title={
                    <div className="relative w-full rounded-md">
                      <div className="relative z-10 overflow-hidden rounded-t-md h-40 mb-2">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-t-md"
                        />
                      </div>
                      <div className="relative z-10 text-sm text-black space-y-1 px-4 pb-4">
                        <h2 className="text-lg font-semibold">{project.title}</h2>
                        <p className="text-xs text-black/80">{project.description}</p>
                      </div>
                    </div>
                  }
                  description={null}
                  header={null}
                  icon={null}
                />
              </motion.div>
            );
          })}
        </BentoGrid>
      </div>
    </main>
  );
}
