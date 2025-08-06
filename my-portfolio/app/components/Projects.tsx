'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    title: '🧠 OnePersonAI - Multimodal AI Assistant',
    link: 'https://onepersonai-website.vercel.app/',
    tech: 'React, Tailwind, OpenAI, Framer Motion, Speech Recognition',
    desc: 'A futuristic AI assistant with support for text, voice, image, and command input – all in one interface.',
    category: 'AI/ML',
    status: 'Live'
  },
  {
    title: '📦 Ultimate Prompt Pack (Fiverr Product)',
    link: 'https://www.fiverr.com/akshatraj274',
    tech: 'ChatGPT, Midjourney, Prompt Templates',
    desc: 'A 100+ prompt pack that helps businesses, students, and freelancers generate creative, smart content fast.',
    category: 'Product',
    status: 'Active'
  },
  {
    title: '🧬 AI Question Answering System',
    link: 'https://github.com/AkshatRaj00/AI-Question-Answering',
    tech: 'Python, NLP, OpenAI API, Flask',
    desc: 'Takes in a document or context and answers user questions with deep semantic understanding.',
    category: 'AI/ML',
    status: 'GitHub'
  },
  {
    title: '☁️ Cloud-Based ML Pipeline',
    link: 'https://github.com/AkshatRaj00/Cloud-ML-Pipeline',
    tech: 'AWS Lambda, S3, Step Functions, SageMaker',
    desc: 'End-to-end automated machine learning pipeline hosted entirely on AWS cloud services.',
    category: 'Cloud',
    status: 'GitHub'
  },
  {
    title: '🎧 Spotify Clone',
    link: 'https://github.com/AkshatRaj00/Spotify-Clone-React',
    tech: 'ReactJS, CSS, API Integration',
    desc: 'A fully responsive Spotify front-end clone with music listing and beautiful UI.',
    category: 'Web Dev',
    status: 'GitHub'
  },
  {
    title: '🌐 Gemini AI Clone',
    link: 'https://github.com/AkshatRaj00/Gemini-AI-Clone',
    tech: 'HTML, CSS, JavaScript',
    desc: 'Gemini Chatbot UI made from scratch using front-end only. Great for portfolio demonstration.',
    category: 'AI/ML',
    status: 'GitHub'
  },
  {
    title: '📷 Emotion Detector with OpenCV',
    link: 'https://github.com/AkshatRaj00/Emotion-Detector',
    tech: 'Python, OpenCV, Deep Learning',
    desc: 'Real-time facial emotion detection using camera input. Trained with CNN.',
    category: 'AI/ML',
    status: 'GitHub'
  },
  {
    title: '🤖 Instagram Automation Bot',
    link: 'https://github.com/AkshatRaj00/Insta-AutoBot',
    tech: 'Python, Selenium',
    desc: 'Automates tasks like liking, following, and commenting using login session.',
    category: 'Automation',
    status: 'GitHub'
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Live': return 'bg-green-500';
      case 'Active': return 'bg-blue-500';
      case 'GitHub': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'AI/ML': return '🤖';
      case 'Product': return '💼';
      case 'Cloud': return '☁️';
      case 'Web Dev': return '🌐';
      case 'Automation': return '⚡';
      default: return '📁';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore my latest work in AI, Cloud Computing, and Web Development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full p-8 rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/80 via-gray-850/80 to-gray-900/80 backdrop-blur-xl overflow-hidden transform-gpu transition-all duration-500 hover:border-purple-500/50">
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${getStatusColor(project.status)} animate-pulse`}></span>
                    <span className="text-xs font-medium text-gray-300 bg-gray-900/50 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-sm font-semibold text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30">
                      {getCategoryIcon(project.category)} {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-12 relative z-20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium text-cyan-300 bg-cyan-900/20 px-3 py-1 rounded-full border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Interactive CTA */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        className="flex items-center gap-2 text-purple-400 group-hover:text-pink-400 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="font-semibold">
                          {project.status === 'GitHub' ? 'View Code' : 'Visit Project'}
                        </span>
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Animated Background Effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                  />
                  
                  {/* Particle Effects */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={hoveredIndex === index ? {
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          y: [0, -20, -40]
                        } : {}}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    ))}
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            href="https://github.com/AkshatRaj00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px -12px rgba(147, 51, 234, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                View More on GitHub
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;