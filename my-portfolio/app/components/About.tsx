'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-12 bg-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <motion.div
          initial={{ opacity: 0, rotate: -90, scale: 0 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="w-48 h-48 rounded-full bg-gray-800 flex-shrink-0 relative"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-75 absolute inset-0 transform animate-pulse"></div>
          <Image
            src="/akshat-raj-profile.jpg"
            alt="Akshat Raj"
            width={192}
            height={192}
            className="rounded-full object-cover relative z-10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          <p className="mb-4">
            I'm a Computer Engineering student turned AI visionary. I solve real-world problems using AI models, automation, cloud systems and prompt engineering. My goal is to inspire and impact through technology and soul-aligned work.
          </p>
          <p>
            AI engineering is my dharma. I don't just code — I build bridges between soul and silicon. My goal is to empower individuals and automate systems with elegance, clarity, and compassion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;