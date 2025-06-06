"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "../components/ui/floating-navbar";
import { FlipWords } from "../components/ui/flip-words";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const animatedWords = ["designs", "develops", "builds", "creates"];

const HeroSection = () => {
  return (
    <>
      {/* Nav fixed at top with max z-index to stay above everything */}
      <div
        className="fixed top-0 left-0 w-full"
        style={{
          zIndex: 2147483647, // max 32-bit int to ensure topmost
          pointerEvents: "auto",
          willChange: "transform",
          backgroundColor: "transparent",
        }}
      >
        <FloatingNav navItems={navItems} />
      </div>

      <motion.div
        className="relative w-screen h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpeg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {/* Decorative Left */}
        <motion.img
          src="/left.png"
          alt="Left"
          className="absolute bottom-[10px] left-0 w-[200px]"
          initial={{ x: -20 }}
          animate={{ x: [-20, 0, -20] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* Decorative Right */}
        <motion.img
          src="/right.png"
          alt="Right"
          className="absolute top-0 right-[-50px] w-[900px]"
          initial={{ x: 60, y: -30 }}
          animate={{ x: [60, 80, 60], y: [-30, -10, -30] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />

        {/* Main Hero Content */}
        <motion.div
          className="absolute bottom-0 left-[300px] flex items-center gap-5 px-20 z-[1]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img
            src="/akul.png"
            alt="Akul"
            className="h-[900px] w-auto object-contain"
          />
          <div className="max-w-[400px]">
            <h1 className="text-black text-[64px] font-extrabold leading-tight">
              Hi there,
              <br />
              I’m Akul
            </h1>
            <p className="mt-4 text-black text-[20px] font-light leading-relaxed">
              I’m a UI/UX Designer and Web Developer who{" "}
              <span className="inline-block relative align-middle">
                <FlipWords
                  words={animatedWords}
                  duration={2500}
                  className="font-semibold text-blue-600"
                />
              </span>{" "}
              responsive, user-friendly websites and web applications.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-600 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 🔥 Persistent Download Button (outside animated section) */}
      <motion.a
        href="/cv.pdf"
        download
        className="fixed bottom-15 right-10 z-[9999] px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow-lg hover:bg-blue-700 transition"
        initial={{ y: 10 }}
        animate={{ y: [10, 0, 10] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Download CV
      </motion.a>
    </>
  );
};

export default HeroSection;
