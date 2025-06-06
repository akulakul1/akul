import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const descRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(96);

  useEffect(() => {
    function updateHeight() {
      if (descRef.current) {
        const height = descRef.current.offsetHeight;
        const adjustedLineHeight = height - 32;
        setLineHeight(adjustedLineHeight > 24 ? adjustedLineHeight : 96);
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <motion.div
      className="bg-[#f5f5f5] px-8 md:px-32 pt-20 pb-8 flex flex-col md:flex-row items-start justify-between"
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
          <span className="w-1 bg-black" style={{ height: `${lineHeight}px` }}></span>
          <span className="w-4 h-4 bg-black rounded-full z-10"></span>
        </motion.div>

        {/* Descriptions */}
        <div
          ref={descRef}
          className="flex flex-col gap-10 text-gray-800 text-lg max-w-3xl leading-relaxed"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="font-semibold text-xl mb-2">
              NYTT Pvt Ltd — Software Development Intern (3 Months)
            </h3>
            <p className="italic mb-2">Full Stack Developer & UI/UX Intern</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Developed frontend interfaces using React, Flutter, and Laravel for applications including{' '}<a 
    href="https://welittlefarmers.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-600 hover:underline"
  >
    welittlefarmers.com
  </a>{' '}
  and the NYTT Robotics website.
              </li>
              <li>
                Contributed to the design and development of a game-based application.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <h3 className="font-semibold text-xl mb-2">IEEE WIE — Robotics Design Lead</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Led the robotics design team responsible for developing innovative robotic solutions and competitions.
              </li>
              <li>
                Managed project timelines, coordinated with team members, and ensured delivery of design prototypes.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
