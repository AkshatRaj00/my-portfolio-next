'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const socialLinks = [
  {
    platform: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    url: 'https://github.com/AkshatRaj00',
    color: 'from-gray-600 to-gray-800',
    hoverColor: 'from-purple-600 to-pink-600',
    description: 'Code Repositories'
  },
  {
    platform: 'LinkedIn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    url: 'https://www.linkedin.com/in/akshatraj00/',
    color: 'from-blue-600 to-blue-800',
    hoverColor: 'from-blue-500 to-cyan-500',
    description: 'Professional Network'
  },
  {
    platform: 'Twitter / X',
    icon: 'https://img.icons8.com/ios-filled/50/ffffff/twitterx.png',
    url: 'https://x.com/AkshatRaj__',
    color: 'from-gray-700 to-black',
    hoverColor: 'from-purple-600 to-pink-600',
    description: 'Latest Updates'
  },
  {
    platform: 'Reddit',
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111589.png',
    url: 'https://www.reddit.com/user/icy_doughnut_7630/m/akshat_raj/',
    color: 'from-orange-600 to-red-600',
    hoverColor: 'from-orange-500 to-red-500',
    description: 'Community Discussions'
  },
  {
    platform: 'Fiverr',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968732.png',
    url: 'https://www.fiverr.com/akshatraj274',
    color: 'from-green-600 to-green-800',
    hoverColor: 'from-green-500 to-emerald-500',
    description: 'Freelance Services'
  },
  {
    platform: 'Portfolio',
    icon: 'https://img.icons8.com/ios/50/ffffff/domain.png',
    url: 'https://onepersonai-website.vercel.app/',
    color: 'from-purple-600 to-pink-600',
    hoverColor: 'from-cyan-500 to-blue-500',
    description: 'Featured Projects'
  }
];

const SocialLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [particlePositions, setParticlePositions] = useState([]);

  useState(() => {
    setParticlePositions(
      [...Array(6)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-20 px-4 md:px-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find me across different platforms and let's build something amazing together
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
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
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <div className="relative h-full">
                  {/* Main Card */}
                  <div className="flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800/80 via-gray-850/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-transparent transition-all duration-500 transform-gpu overflow-hidden">
                    
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.hoverColor} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-2xl`}></div>
                    
                    {/* Icon Container */}
                    <motion.div
                      className="relative z-10 mb-4"
                      whileHover={{ 
                        rotateY: 360,
                        scale: 1.2
                      }}
                      transition={{ 
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200 
                      }}
                    >
                      <div className="relative">
                        <img
                          src={link.icon}
                          alt={link.platform}
                          width={50}
                          height={50}
                          className="drop-shadow-lg filter group-hover:drop-shadow-2xl transition-all duration-300"
                        />
                        
                        {/* Icon Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${link.hoverColor} rounded-full opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 -z-10`}></div>
                      </div>
                    </motion.div>

                    {/* Platform Name */}
                    <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-300 mb-2 relative z-10">
                      {link.platform}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                      {link.description}
                    </p>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {particlePositions.map((pos, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-60"
                          style={pos}
                          animate={hoveredIndex === index ? {
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            y: [0, -20]
                          } : {}}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                      ))}
                    </div>

                    {/* Border Animation */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          style={{
                              background: `linear-gradient(45deg, transparent, ${link.hoverColor.includes('purple') ? '#8b5cf6' : link.hoverColor.includes('blue') ? '#3b82f6' : '#ec4899'}, transparent)`,
                              maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                              maskComposite: 'xor',
                              padding: '2px'
                          }}>
                    </div>

                    {/* 3D Shadow/Depth */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 -z-10 transform translate-y-2 group-hover:translate-y-4`}></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-lg text-gray-400 mb-6">
            Ready to collaborate? Choose your preferred platform and let's get started!
          </p>
          
          {/* Animated Pulse Indicator */}
          <motion.div
            className="flex items-center justify-center gap-2"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-purple-400 font-medium">Available for projects</span>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;