
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#FF5722] rounded-full blur-[2px]"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{
                y: [null, "-200px"],
                opacity: [null, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5722]/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-12 text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold tracking-widest uppercase mb-6 border border-[#FF5722]/20">
              Now Enrolling for 2026
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
              Become a Fire Alarm <br />
              <span className="text-[#FF5722] relative inline-block">
                Technician
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-2 bg-[#FF5722]/20 -z-10"
                />
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-10 leading-relaxed font-medium">
              Master the skills of Design, Supply, Installation, and Maintenance. 
              Join a high-demand industry and start a career with limitless growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://forms.gle/fHjPEvmB1WBKevHdA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-[#FF5722] rounded-full font-bold text-white shadow-xl shadow-[#FF5722]/20 overflow-hidden flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Start Your Career</span>
                <span className="material-symbols-outlined text-[20px] relative group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};