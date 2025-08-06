'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Next.js', icon: '🚀' },
  { name: 'Node.js', icon: '⚙️' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'HTML5', icon: 'Markup' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'SQL', icon: '💾' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Azure', icon: '🌐' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Generative AI', icon: '✨' },
  { name: 'NLP', icon: '🗣️' },
  { name: 'Computer Vision', icon: '👁️' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-12 bg-gray-950">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-600">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            whileHover={{
              y: -10,
              scale: 1.05,
              rotateX: 0,
              rotateY: 0,
              boxShadow: "0 20px 40px rgba(103, 232, 249, 0.2)",
              transition: { duration: 0.3 }
            }}
            className="p-6 rounded-2xl shadow-xl border border-gray-700/50 bg-gray-800/60 backdrop-blur-sm cursor-pointer transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="text-4xl mb-4"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.3 }}
            >
              {skill.icon}
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-100">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;