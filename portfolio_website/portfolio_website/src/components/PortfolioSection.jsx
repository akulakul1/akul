import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      className="bg-[#f5f5f5] px-8 md:px-38 pt-20 pb-8 flex flex-col md:flex-row items-start justify-between"
      style={{ backgroundImage: "url('/background.jpeg')" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Left: Heading */}
      <motion.div
        className="w-full md:w-1/4 mb-10 md:mb-0"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h1 className="text-5xl font-extrabold">EXPERIENCE</h1>
      </motion.div>

      {/* Right: Timeline + Descriptions */}
      <motion.div
        className="w-full md:w-3/4 flex gap-10"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        {/* Timeline */}
        <motion.div
          className="flex flex-col items-center mt-2"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <span className="w-4 h-4 bg-black rounded-full z-10"></span>
          <span className="w-1 h-24 bg-black"></span>
          <span className="w-4 h-4 bg-black rounded-full z-10"></span>
        </motion.div>

        {/* Descriptions */}
        <div className="flex flex-col gap-10 text-gray-800 text-lg max-w-3xl leading-relaxed">
          {[1, 2].map((_, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: false }}
            >
              I'm a UI/UX Designer and Web Developer who both designs and develops
              responsive, user-friendly websites and web applications.
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
