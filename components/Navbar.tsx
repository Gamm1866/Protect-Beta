
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 2xl:px-[500px] transition-all duration-500 gap-2 sm:gap-4">
        <div className="flex items-center gap-2 group cursor-pointer shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FF5722] rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-[#FF5722]/20 shrink-0">
            <span className="material-symbols-outlined text-white text-[18px] sm:text-[22px]">bolt</span>
          </div>
          <span className="text-base sm:text-xl font-black tracking-tighter uppercase whitespace-nowrap">
            PowerTech <span className="text-[#FF5722]">Academy</span>
          </span>
        </div>

        <motion.a
          href="https://forms.gle/fHjPEvmB1WBKevHdA"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-4 sm:px-7 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-lg shadow-white/5 transition-all hover:shadow-white/20 active:scale-95 whitespace-nowrap shrink-0"
        >
          Apply Now
        </motion.a>
      </div>
    </motion.nav>
  );
};
