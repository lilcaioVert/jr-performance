'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Activity, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 md:pt-0 flex items-center bg-black overflow-hidden"
    >
      {/* Background visual effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column Left: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6 self-start"
            >
              <Activity className="w-4 h-4 text-blue-500" />
              <span>Alta Performance &amp; Método GPS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white italic tracking-tight uppercase leading-snug pt-2 mb-6"
            >
              MÉTODO, ESTRATÉGIA E{' '}
              <span className="text-blue-500 block sm:inline">AMBIENTE CERTO</span>{' '}
              PARA VOCÊ IR{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                CADA VEZ MAIS LONGE.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-300 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl"
            >
              Eleve sua performance com o <strong className="text-white font-medium">Método GPS em 8 semanas</strong>. Assessoria esportiva de elite para corredores de rua, trail runners e atletas focados em evolução contínua.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="https://wa.me/message/47DJ7YXUY5PII1"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-hero-primary"
                className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4.5 px-8 rounded-2xl tracking-wider uppercase transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.03] active:scale-[0.98] duration-300 flex items-center justify-center gap-3 border-2 border-transparent"
              >
                Comece Sua Transformação
                <ChevronRight className="w-5 h-5 stroke-[3px]" />
              </a>
              <a
                href="#sobre"
                id="cta-hero-secondary"
                className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-base py-4 px-8 rounded-2xl tracking-wide transition-all border border-zinc-800 hover:border-zinc-700 duration-300 flex items-center justify-center"
              >
                Conhecer o Método
              </a>
            </motion.div>

            {/* Micro Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 border-t border-zinc-900 pt-8 text-center md:text-left"
            >
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl md:text-3xl font-display font-black text-blue-500 italic leading-none">+500</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Alunos Orientados</span>
              </div>
              <div className="flex flex-col items-center md:items-start border-y border-zinc-900/60 py-4 md:py-0 md:border-y-0 md:border-x md:border-zinc-900 md:px-6">
                <span className="text-2xl md:text-3xl font-display font-black text-blue-500 italic leading-none">100%</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Personalizado</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl md:text-3xl font-display font-black text-blue-500 italic leading-none">POSTO 12</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Leblon, RJ</span>
              </div>
            </motion.div>
          </div>

          {/* Column Right: Coach Image with elegant gradient blending */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px] w-full self-end lg:self-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <Image
                src="/foto2.png"
                alt="Jonathas Figueiredo JF Performance"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover object-center relative z-0 brightness-105"
                priority
              />
              
              {/* Vertical left side gradient mask */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
              
              {/* Bottom gradient mask */}
              <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-10" />
              
              {/* Subtle top shading */}
              <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

              {/* Glowing accent border */}
              <div className="absolute inset-0 border border-blue-500/10 rounded-2xl pointer-events-none z-0" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
