
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 bg-[#050505]">
      <div className="w-full">
        {/* Final CTA Card - "Turned up" by 60px */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] sm:rounded-[3rem] bg-[#FF5722] p-8 sm:p-12 text-center overflow-hidden mb-24 -mt-[60px] z-20"
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Ready to Enroll?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-10 font-medium max-w-xl mx-auto">
              Secure your spot in the next cohort. Limited seats available for South Florida sessions.
            </p>
            <motion.a
              href="https://forms.gle/fHjPEvmB1WBKevHdA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-full font-black text-base sm:text-lg shadow-2xl hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Start Application
              <span className="material-symbols-outlined text-[20px] sm:text-[24px] font-bold">arrow_forward</span>
            </motion.a>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Real Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 border-t border-white/5 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#FF5722] rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[14px] font-black">bolt</span>
              </div>
              <span className="font-bold tracking-tight text-white">PowerTech Academy</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-wrap lg:justify-end gap-x-6 gap-y-2 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-[#FF5722] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FF5722] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FF5722] transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 text-[10px] font-bold tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} PowerTech Academy.
        </div>
      </div>
    </footer>
  );
};
