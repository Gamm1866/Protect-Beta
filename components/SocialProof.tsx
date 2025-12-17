
import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  "Securitas", "ADT Commercial", "Johnson Controls", "Siemens", "Honeywell"
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase">Companies that trust our graduates</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {companies.map((company, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-black tracking-tighter text-white"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
