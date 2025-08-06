'use client';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="w-full relative py-20 px-4 md:px-12 overflow-hidden bg-gray-950">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-950 opacity-50 animate-pulse"></div>
      </div>
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          My Vision
        </h2>
        <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
          AI engineering is my dharma. I don't just code — I build bridges between soul and silicon. My goal is to empower individuals and automate systems with elegance, clarity, and compassion.
        </p>
      </motion.div>
    </section>
  );
};

export default Vision;