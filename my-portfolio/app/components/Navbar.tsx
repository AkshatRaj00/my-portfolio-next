'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#vision', label: 'Vision' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-gray-700"
    >
      <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Akshat Raj
      </div>
      <ul className="flex space-x-6 text-gray-400">
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Link href={link.href} className="hover:text-white transition-colors duration-300">
              {link.label}
            </Link>
          </motion.li>
        ))}
        <motion.li
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="/akshat-raj-resume.pdf"
            download="Akshat_Raj_Resume.pdf"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            Resume
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;