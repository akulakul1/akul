"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);
  const isHoveredRef = useRef(false);

  const startHideTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current) setVisible(false);
    }, 1500);
  };

  useMotionValueEvent(scrollYProgress, "change", () => {
    setVisible(true);
    startHideTimer();
  });

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={() => {
            isHoveredRef.current = true;
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
            startHideTimer();
          }}
          className={cn(
            "relative flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white z-[5000] px-6 py-2 items-center justify-center space-x-6 transition-all duration-300 ease-in-out overflow-hidden",
            className
          )}
        >
          {/* Glossy overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-br from-white/10 to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 items-center flex text-neutral-600 transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-black dark:hover:text-white font-semibold"
            >
              <span className="text-sm">{navItem.name}</span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
