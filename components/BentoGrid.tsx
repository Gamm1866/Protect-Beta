
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const BentoGrid: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050505]">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Content Column */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-12 space-y-12"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                Great Job <br className="hidden lg:block" /> <span className="text-[#FF5722]">Opportunities</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                The fire security industry is evolving rapidly. We provide the technical foundation required to succeed in one of the most stable career paths in the US.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                {[
                  "Join a high-growth employment sector with stable demand.",
                  "Comprehensive support for job placement after graduation.",
                  "Suitable for anyone interested in learning a technical skill.",
                  "Trusted by Industry experts and major security firms."
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#FF5722]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#FF5722] text-[16px] font-bold">check</span>
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats within the same 12-column grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <StatCard 
                  value="94%" 
                  label="Placement Rate" 
                  iconName="verified_user"
                  delay={0}
                />
                <StatCard 
                  value="$65k+" 
                  label="Starting Potential" 
                  iconName="payments"
                  delay={0.1}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  iconName: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, iconName, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.08] transition-colors"
    >
      <div className="absolute top-0 right-0 p-4 text-white/5 group-hover:text-[#FF5722]/10 transition-colors">
        <span className="material-symbols-outlined text-[60px]">{iconName}</span>
      </div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="w-10 h-10 rounded-xl bg-[#FF5722]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[#FF5722] text-[20px]">{iconName}</span>
        </div>
        <div>
          <h3 className="text-2xl font-black text-white mb-1">{value}</h3>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};