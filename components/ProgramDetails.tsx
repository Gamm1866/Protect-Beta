
import React from 'react';
import { motion } from 'framer-motion';

const details = [
  {
    title: "Duration",
    description: "2 - 3 Months intensive course designed for fast-track entry.",
    iconName: "schedule",
    tag: "Fast Track"
  },
  {
    title: "Prerequisites",
    description: "No prior experience needed. Suitable for ages 17 and above.",
    iconName: "group_add",
    tag: "Open Entry"
  },
  {
    title: "Certification",
    description: "Receive a Certificate of Attendance recognized by top employers.",
    iconName: "military_tech",
    tag: "Verified"
  },
  {
    title: "Locations",
    description: "Hollywood, FL (Broward). South Miami (Miami-Dade) coming soon.",
    iconName: "location_on",
    tag: "Florida"
  }
];

export const ProgramDetails: React.FC = () => {
  return (
    <section id="program" className="py-24 bg-[#0a0a0a]">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <div className="lg:col-span-12 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Program <span className="text-[#FF5722]">Details</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-gray-500 font-medium"
            >
              Everything you need to know about starting your journey with us.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-[#FF5722]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FF5722]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-[28px]">{item.iconName}</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#FF5722] font-bold mb-2 block">{item.tag}</span>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#FF5722]/20 via-[#050505] to-[#050505] border border-white/5 overflow-hidden relative"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-12">
              <h3 className="text-3xl font-black mb-6">Core Industry <span className="text-[#FF5722]">Skills</span></h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Panel Configuration", "Wiring Standards", "System Design", "OSHA Safety", "Testing", "Circuit"].map((skill, i) => (
                  <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-[#FF5722]/10 hover:border-[#FF5722]/30 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-[#FF5722] font-black text-xl mb-1">HANDS-ON</div>
                  <div className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Lab Exercises</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-white font-black text-xl mb-1">EXPERT</div>
                  <div className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Led Training</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF5722]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
};