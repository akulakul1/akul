import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    id: '01',
    title: 'UI/UxxX Design',
    description: 'Crafting intuitive interfaces with user-centric design principles.',
    icon: '/design.png',
  },
  {
    id: '02',
    title: 'Fleet Management',
    description: 'Manage and optimize vehicle fleets with real-time insights.',
    icon: '/fleet.png',
  },
  {
    id: '03',
    title: 'Web Development',
    description: 'Building responsive and dynamic websites with modern tech.',
    icon: '/web.png',
  },
  {
    id: '04',
    title: 'Brand Strategy',
    description: 'Aligning visuals with brand goals for impact and consistency.',
    icon: '/brand.png',
  },
  {
    id: '05',
    title: 'App Prototyping',
    description: 'Rapid prototyping for MVPs and early user feedback.',
    icon: '/prototype.png',
  },
  {
    id: '06',
    title: 'SEO & Analytics',
    description: 'Improving reach with search optimization and smart metrics.',
    icon: '/seo.png',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full min-h-screen bg-[#f9f9f9] px-4 md:px-40 py-20 flex flex-col lg:flex-row justify-between gap-10">

      {/* Left + Center: About and Grid */}
      <motion.div
        className="flex flex-col lg:flex-row gap-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left Column: Titles */}
        <motion.div
          className="flex flex-col min-w-[150px]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-[1.2] mb-12">
            About<br />me
          </h1>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-[1.2]">
            What i<br />do
          </h1>
        </motion.div>

        {/* Center Column: Description + Grid */}
        <motion.div
          className="flex flex-col gap-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <p className="max-w-xl text-lg text-black leading-relaxed">
            I'm a <strong>UI/UX Designer</strong> and <strong>Web Developer</strong><br />
            who both designs and develops responsive,<br />
            user-friendly websites and web applications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {cardData.map(({ id, title, description, icon }, index) => (
              <motion.div
                key={id}
                className="relative group w-[120px] h-[120px] md:w-[160px] md:h-[160px] bg-[#C8E8FF] rounded-xl shadow-md p-3 md:p-4 overflow-hidden transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: false }}
              >
                <div className="text-xs text-gray-500">{id}</div>
                <div className="text-sm md:text-base font-semibold mt-1">{title}</div>
                <img
                  src={icon}
                  alt={title}
                  className="absolute bottom-3 right-3 w-6 h-6 md:w-8 md:h-8 object-contain"
                />
                <div className="absolute inset-0 bg-white bg-opacity-95 p-2 text-[10px] md:text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center text-center">
                  {description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column: Education Timeline */}
      <motion.div
        className="flex flex-col items-start"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-xl font-extrabold mb-4">EDUCATION</h2>
        <div className="border-l-2 border-black pl-4 space-y-8">
          {[1, 2].map((_, idx) => (
            <motion.div
              className="relative"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="w-3 h-3 bg-black rounded-full absolute -left-[22px] top-1"></div>
              <p className="text-sm leading-relaxed">
                I'm a UI/UX Designer and Web Developer<br />
                and develops responsive, user-friendly web<br />
                applications.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default AboutSection;
