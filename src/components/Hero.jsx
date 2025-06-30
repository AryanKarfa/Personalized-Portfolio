import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['Frontend Developer', 'Creative Coder', 'Tech Explorer'];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState('');

  useEffect(() => {
    const fullText = roles[index];
    if (subText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setSubText(fullText.slice(0, subText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setSubText('');
        setIndex((index + 1) % roles.length);
      }, 1500);
    }
  }, [subText, index]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-950 to-black text-white px-4"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-6xl font-extrabold mb-4"
      >
        Hi, I’m <span className="text-cyan-400">Aryan Karfa</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl text-gray-300 mb-6 h-8"
      >
        {subText}<span className="animate-pulse">|</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex gap-4 mt-4"
      >
        <a
          href="#projects"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl transition-all"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-xl transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;