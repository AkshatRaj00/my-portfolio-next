'use client';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

// Components
import Navbar from './components/Navbar';
import About from './components/About';
import RequestWork from './components/RequestWork';
import SocialLinks from './components/SocialLinks';
import Certifications from './components/Certifications';

// Lazy load non-critical components for better performance
const Skills = dynamic(() => import('./components/Skills'), { ssr: false });
const Projects = dynamic(() => import('./components/Projects'), { ssr: false });
const Vision = dynamic(() => import('./components/Vision'), { ssr: false });
const Contact = dynamic(() => import('./components/Contact'), { ssr: false });

// AI Neural Network Background Component
const AIBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);

  // Neural network nodes - deterministic positioning
  const nodes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: (i * 137 + 50) % 100,
    y: (i * 97 + 30) % 100,
    size: 2 + (i % 4),
    delay: i * 0.1,
    connectionStrength: (i % 5) / 5
  }));

  // Neural connections
  const connections = nodes.slice(0, 15).map((node, i) => ({
    from: node,
    to: nodes[(i + 3) % nodes.length],
    strength: Math.sin(i) * 0.5 + 0.5
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ y: backgroundY }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-950/95 to-black/98" />
      
      {/* Floating AI particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${(i * 47 + 20) % 100}%`,
              top: `${(i * 73 + 15) % 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + (i % 3),
              delay: i * 0.05,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Neural Network Visualization */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Neural connections */}
        {connections.map((connection, i) => (
          <motion.line
            key={i}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke="url(#gradient)"
            strokeWidth="1"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Neural nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + node.delay,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Interactive cursor glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
    </motion.div>
  );
};

// Enhanced Hero Section
const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "AI Engineer | Prompt Creator | Cloud ML Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      aria-label="Hero introduction"
      className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center py-20 md:py-36 px-4 md:px-8 z-10"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotateY: -45 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-8 relative"
      >
        {/* Profile glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <Image
          src="/akshat-raj-profile.jpg"
          alt="Akshat Raj - AI Engineer and Developer"
          width={160}
          height={160}
          priority
          className="relative rounded-full border-4 border-purple-500 shadow-2xl hover:scale-110 transition-all duration-500 hover:border-pink-500"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2G7bhAugJGgR6y+c2+Bq9aWXczgJuK6jD"
        />
      </motion.div>

      {/* Animated title with 3D effect */}
      <motion.h1
        className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
        initial={{ y: -50, opacity: 0, rotateX: -30 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        Hi, I'm{' '}
        <motion.span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Akshat Raj
        </motion.span>{' '}
        <motion.span
          animate={{
            rotate: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          
        </motion.span>
      </motion.h1>

      {/* Typewriter effect for subtitle */}
      <motion.p
        className="text-lg md:text-2xl text-gray-300 mb-8 font-mono min-h-[2rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-purple-400"
        >
          |
        </motion.span>
      </motion.p>

      {/* Main tagline with floating animation */}
      <motion.p
        className="text-xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 max-w-4xl leading-relaxed mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
      >
        I build futuristic digital tools using AI, Cloud, and Code.
      </motion.p>

      {/* Enhanced CTA buttons */}
      <motion.div
        className="flex gap-6 flex-wrap justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.button 
          className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="relative z-10">View My Work</span>
        </motion.button>
        
        <motion.button 
          className="relative px-8 py-4 border-2 border-purple-500 rounded-full font-semibold text-white backdrop-blur-sm overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="relative z-10">Get In Touch</span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      <Head>
        <title>Akshat Raj - AI Engineer & Cloud ML Developer</title>
        <meta name="description" content="AI Engineer specializing in prompt creation, cloud ML development, and building futuristic digital tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Akshat Raj - AI Engineer & Cloud ML Developer" />
        <meta property="og:description" content="Building futuristic digital tools using AI, Cloud, and Code" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://akshatraj.dev" />
      </Head>
      
      <div className="relative">
        {/* AI Neural Network Background */}
        <AIBackground />
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        
        <main className="relative flex flex-col min-h-screen text-white overflow-hidden">
          <Navbar />
          
          {/* Hero Section with enhanced animations */}
          <HeroSection />

          {/* Page Sections with enhanced transitions */}
          <motion.section
            className="relative w-full px-4 md:px-12 py-16 md:py-24 z-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <About />
          </motion.section>

          <motion.section
            className="relative w-full px-4 md:px-12 py-16 md:py-24 bg-gray-900/30 backdrop-blur-sm z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Skills />
          </motion.section>

          <motion.section
            className="relative w-full px-4 md:px-12 py-16 md:py-24 z-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Projects />
          </motion.section>

          {/* New Certifications Section */}
          <motion.section
            className="relative w-full z-10"
            initial={{ opacity: 0, rotateX: -15 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <Certifications />
          </motion.section>

          <motion.section
            className="relative w-full px-4 md:px-12 py-16 md:py-24 bg-gray-900/30 backdrop-blur-sm z-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <RequestWork />
          </motion.section>

          <motion.section
            className="relative w-full px-4 md:px-12 py-16 md:py-24 bg-gray-950/50 backdrop-blur-sm z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <Vision />
          </motion.section>

          <motion.section
            className="relative w-full px-4 md:px-12 py-16 md:py-24 z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Contact />
          </motion.section>

          <motion.section
            className="relative w-full px-4 md:px-12 py-16 md:py-24 bg-gray-900/30 backdrop-blur-sm z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <SocialLinks />
          </motion.section>

          {/* Enhanced Footer */}
          <footer className="relative w-full text-center py-8 text-sm text-gray-400 border-t border-gray-800/50 mt-12 bg-gray-950/50 backdrop-blur-sm z-10">
            <div className="max-w-4xl mx-auto px-4">
              <motion.p 
                className="mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                © 2025 All Rights Reserved | 
                <span className="text-purple-400 font-semibold ml-1">akshatraj.dev</span>
              </motion.p>
              <motion.p 
                className="text-xs text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Built with Next.js, Tailwind CSS, and Framer Motion
              </motion.p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}