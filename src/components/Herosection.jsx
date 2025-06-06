"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "../components/ui/floating-navbar";
import { FlipWords } from "../components/ui/flip-words";
import { Github, Linkedin, Instagram } from "lucide-react";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const animatedWords = ["designs", "develops", "builds", "creates"];

const MOBILE_BREAKPOINT = 768; // px

const HeroSection = () => {
  const [showIcons, setShowIcons] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Margin & padding reset to avoid scroll gaps
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";

    // Scroll listener for social icons visibility (your original logic)
    const handleScroll = () => {
      setShowIcons(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Resize listener to detect mobile screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.documentElement.style.margin = "";
      document.documentElement.style.padding = "";
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* 🔝 Fixed Top Nav */}
      <div
        className="fixed top-0 left-0 w-full"
        style={{
          zIndex: 2147483647,
          pointerEvents: "auto",
          willChange: "transform",
          backgroundColor: "transparent",
        }}
      >
        <FloatingNav navItems={navItems} />
      </div>

      {/* 🔗 Social Icons Top-Left (show only if at top) */}
      {showIcons && (
        <motion.div
          className="fixed top-8 left-10 z-[2147483646] flex gap-4"
          animate={{ y: [0, -8, 0] }} // smooth float up and down
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <a
            href="https://github.com/akulakul1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-lg transition-transform duration-300 transform hover:scale-125 hover:-translate-y-1"
          >
            <Github className="h-6 w-6 text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/akulpa1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-lg transition-transform duration-300 transform hover:scale-125 hover:-translate-y-1"
          >
            <Linkedin className="h-6 w-6 text-blue-700" />
          </a>
          <a
            href="https://www.instagram.com/_.akull_/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-lg transition-transform duration-300 transform hover:scale-125 hover:-translate-y-1"
          >
            <Instagram className="h-6 w-6 text-pink-600" />
          </a>
        </motion.div>
      )}

      {/* 🌄 Hero Section */}
      <motion.div
        id="home"
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
          className={
            isMobile
              ? "static flex flex-col items-center gap-6 px-4 pt-20 z-[1]"
              : "absolute bottom-0 left-[300px] flex items-center gap-5 px-20 z-[1]"
          }
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img
            src="/akul.png"
            alt="Akul"
            className={isMobile ? "h-[300px] w-auto object-contain" : "h-[900px] w-auto object-contain"}
          />
          <div className={isMobile ? "max-w-full text-center" : "max-w-[400px]"}>
            <h1
              className={
                isMobile
                  ? "text-black text-4xl font-extrabold leading-snug"
                  : "text-black text-[64px] font-extrabold leading-tight"
              }
            >
              Hi there,
              <br />
              I’m Akul
            </h1>
            <p
              className={
                isMobile
                  ? "mt-2 text-black text-base font-light leading-relaxed"
                  : "mt-4 text-black text-[20px] font-light leading-relaxed"
              }
            >
              I’m a UI/UX Designer,Web Developer,Data Science Engineer who{" "}
              <span className="inline-block relative align-middle">
                <FlipWords words={animatedWords} duration={2500} className="font-semibold text-blue-600" />
              </span>{" "}
              responsive, user-friendly websites and web applications and models.
            </p>

            <div
              className={
                isMobile
                  ? "mt-4 flex flex-wrap gap-4 justify-center"
                  : "mt-6 flex gap-4"
              }
            >
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

      {/* 📄 CV Button */}
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
