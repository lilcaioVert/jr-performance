'use client';

import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      id="onde-estamos" 
      className="bg-black text-zinc-400 border-t border-zinc-900"
    >
      
      {/* Location Map Section & Info wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Col 1: Brand details and e-mail & Instagram (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-auto lg:h-[350px]">
            <div>
              <a href="#home" className="flex flex-col mb-6">
                <span className="font-display font-black text-3xl tracking-tighter italic text-white flex items-center">
                  JF<span className="text-blue-500 ml-1">PERFORMANCE</span>
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium -mt-1">
                  Personal &amp; Assessoria Esportiva
                </span>
              </a>

              <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-sm leading-relaxed">
                Assessoria e consultoria de corrida, treinamento e alta performance lideradas pelo Coach Jonathas Figueiredo no Posto 12, Leblon. Blinde seu corpo e leve seu potencial de treino até o limite.
              </p>
            </div>

            {/* Direct Links Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest border-b border-zinc-900 pb-2">
                Canais de Contato
              </h4>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="mailto:jonathasfigueiredo@hotmail.com" 
                  className="flex items-center gap-3 text-zinc-300 hover:text-blue-400 transition-colors text-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>jonathasfigueiredo@hotmail.com</span>
                </a>

                <a 
                  href="https://www.instagram.com/jfperformanceleblon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 hover:text-blue-400 transition-colors text-sm"
                  id="instagram-link"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="font-semibold underline decoration-blue-500/30">@jfperformanceleblon</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Map placeholder & Address Leblon (7 columns) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col h-auto lg:h-[350px] justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-[50px] pointer-events-none" />
              
              <div className="mb-4">
                <span className="text-blue-500 font-bold uppercase tracking-widest text-xs block mb-1">LOCALIZAÇÃO PRESENCIAL</span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase italic tracking-wide">
                  POSTO 12 — ORLA DO LEBLON
                </h3>
                <div className="text-zinc-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Avenida Delfim Moreira, Posto 12 - Leblon, Rio de Janeiro - RJ</span>
                </div>
              </div>

              {/* Styled Interactive/Visual Google Maps Embed Wrapper */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 w-full h-[180px] sm:h-[190px] group transition-all duration-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5413009581177!2d-43.22857412380327!3d-22.985514640578505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd30560b09f4b%3A0xc49d0bc655c68ee8!2sPosto%2012%20-%20Leblon!5e0!3m2!1spt-BR!2sbr!4v1716382103440!5m2!1spt-BR!2sbr" 
                  className="w-full h-full border-0 grayscale opacity-75 contrast-125 brightness-90 hover:grayscale-0 hover:opacity-100 duration-500 transition-all"
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer"
                  title="Placeholder Mapa do Leblon Posto 12"
                />
                
                {/* Glow Overlay indicating click map */}
                <div className="absolute bottom-2 right-2 bg-black/90 border border-zinc-800 rounded-lg px-2.5 py-1 text-[10px] uppercase font-bold text-blue-400 tracking-wider pointer-events-none z-10 shadow-lg">
                  Clique para Navegar
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic signature & credits lines */}
        <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-500">
            &copy; {new Date().getFullYear()} JF Performance. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 flex items-center gap-1.5 font-medium">
            Desenvolvido com foco total em Alta Performance Esportiva.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
