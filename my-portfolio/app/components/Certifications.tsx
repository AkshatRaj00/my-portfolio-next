'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const certifications = [
  { name: 'AWS Machine Learning & AI Fundamentals', issuer: 'Amazon', date: 'June 2025', category: 'AI/ML', color: 'from-orange-500 to-yellow-500' },
  { name: 'Microsoft Azure Language Services, QnA, LUIS, Cognitive Search', issuer: 'Microsoft Azure', date: 'June 2025', category: 'Cloud', color: 'from-blue-500 to-cyan-500' },
  { name: 'Generative AI Planning', issuer: 'Amazon', date: 'June 2025', category: 'AI/ML', color: 'from-purple-500 to-pink-500' },
  { name: 'Amazon Q Introduction', issuer: 'Amazon', date: 'June 2025', category: 'AI/ML', color: 'from-green-500 to-emerald-500' },
  { name: 'Cloud Job Roles', issuer: 'AWS Educate', date: 'May 2025', category: 'Cloud', color: 'from-indigo-500 to-purple-500' },
  { name: 'Google Digital Marketing', issuer: 'Google', date: 'July 2023', category: 'Marketing', color: 'from-red-500 to-orange-500' },
  { name: 'Prompt Engineering', issuer: 'DeepLearning.ai', date: '', category: 'AI/ML', color: 'from-teal-500 to-cyan-500' },
  { name: 'Building AI Products', issuer: 'DeepLearning.ai', date: '', category: 'AI/ML', color: 'from-violet-500 to-purple-500' },
  { name: 'LLMs', issuer: 'DeepLearning.ai', date: '', category: 'AI/ML', color: 'from-pink-500 to-rose-500' },
  { name: 'Python Bootcamp', issuer: 'LetsUpgrade', date: '', category: 'Programming', color: 'from-blue-600 to-indigo-600' },
  { name: 'React Bootcamp', issuer: 'LetsUpgrade', date: '', category: 'Programming', color: 'from-cyan-500 to-blue-500' },
  { name: 'Emotional Intelligence Bootcamp', issuer: 'LetsUpgrade', date: '', category: 'Soft Skills', color: 'from-amber-500 to-orange-500' },
];

// Floating particles component for background
const FloatingParticles = () => {
  // Generate deterministic positions to avoid hydration issues
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: (i * 47 + 13) % 100, // Deterministic positioning
    top: (i * 31 + 27) % 100,
    delay: i * 0.2,
    duration: 3 + (i % 4),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const CertificationCard = ({ cert, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), {
    stiffness: 150,
    damping: 20
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 blur-xl`}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Main card */}
      <motion.div
        className="relative p-8 rounded-2xl border border-gray-700/50 bg-gray-800/80 backdrop-blur-sm overflow-hidden"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)"
        }}
        animate={{
          boxShadow: isHovered 
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            : "0 10px 25px -3px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"
            animate={{
              background: isHovered 
                ? `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)`
                : `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)`
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Category badge */}
        <motion.div
          className={`inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-gradient-to-r ${cert.color} text-white`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
          style={{ transform: "translateZ(10px)" }}
        >
          {cert.category}
        </motion.div>

        {/* Issuer */}
        <motion.p 
          className="text-sm text-gray-400 mb-2 font-medium"
          style={{ transform: "translateZ(5px)" }}
        >
          {cert.issuer}
        </motion.p>

        {/* Certificate name */}
        <motion.h3 
          className="text-xl font-bold mb-4 text-gray-100 leading-tight"
          style={{ transform: "translateZ(8px)" }}
        >
          {cert.name}
        </motion.h3>

        {/* Date */}
        {cert.date && (
          <motion.p 
            className={`text-sm font-medium bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}
            style={{ transform: "translateZ(5px)" }}
          >
            Issued: {cert.date}
          </motion.p>
        )}

        {/* Decorative corner elements */}
        <motion.div
          className="absolute top-4 right-4 w-6 h-6 border-2 border-gray-600 rounded-full"
          animate={{
            rotate: isHovered ? 180 : 0,
            scale: isHovered ? 1.2 : 1,
            borderColor: isHovered ? "#8b5cf6" : "#4b5563"
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute top-1 left-1 w-2 h-2 bg-purple-500 rounded-full"
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: isHovered ? [0.5, 1, 0.5] : 0.3
            }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
          animate={{
            scale: isHovered ? [1, 1.3, 1] : 1,
            opacity: isHovered ? [0.2, 0.6, 0.2] : 0.2
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <FloatingParticles />
      
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative z-10 text-center mb-16"
      >
        <motion.div
          className="inline-block mb-4"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white/40"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundSize: "200% 200%"
          }}
        >
          Verified Certifications
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Professional certifications that validate expertise across AI, Cloud, and Development
        </motion.p>
      </motion.div>

      {/* Certifications grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} index={index} />
        ))}
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
    </section>
  );
};

export default Certifications;