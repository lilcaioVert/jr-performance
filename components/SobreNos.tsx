'use client';

import { Activity, ShieldCheck, Award, Sparkles, MapPin, Globe } from 'lucide-react';

const SobreNos = () => {
  const caracteristicas = [
    {
      title: 'Método GPS Integrado',
      description: 'Uma metodologia focada em Gesto Biomecânico, Periodização Eficiente e Sobrevivência/Longevidade esportiva.',
      icon: Award,
    },
    {
      title: 'Ciência aplicada ao Esporte',
      description: 'Prescrições baseadas em cargas de treinamento reais, frequência cardíaca, VO2 Max e limiares fisiológicos.',
      icon: Activity,
    },
    {
      title: 'Prevenção de Lesões',
      description: 'Foco massivo em fortalecimento funcional dinâmico e técnicas de corrida para maximizar a durabilidade do corredor.',
      icon: ShieldCheck,
    },
    {
      title: 'Acompanhamento Diário',
      description: 'Contato direto via WhatsApp para ajustes imediatos na rotina de treino conforme suas necessidades.',
      icon: Sparkles,
    }
  ];

  return (
    <section 
      id="sobre" 
      className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Column Left: Story & Quote */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">A MENTE POR TRÁS DO MÉTODO</span>
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white italic tracking-tight uppercase leading-none mb-6">
              JONATHAS FIGUEIREDO
            </h2>
            
            <p className="text-zinc-300 text-base md:text-lg mb-6 leading-relaxed">
              Com anos de treino prático e estudo acadêmico, o especialista <strong className="text-white font-medium">Jonathas Figueiredo</strong> fundamentou a JF Performance como um núcleo de alta performance no Leblon, Rio de Janeiro. Sua missão é guiar atletas profissionais e amadores a correr longe, escalar montanhas e cruzar linhas de chegada com segurança, potência e técnica impecável.
            </p>

            <blockquote className="border-l-4 border-blue-500 bg-zinc-900/45 p-5 rounded-r-xl italic text-zinc-300 mb-8 font-medium">
              &ldquo;Para ir mais longe, a determinação precisa do método perfeito. Criamos não apenas treinos, mas uma verdadeira blindagem anatômica para que você corra rápido e sem dores.&rdquo;
              <span className="block text-blue-500 font-display font-extrabold not-italic uppercase tracking-widest text-xs mt-3">— Jonathas Figueiredo, Head Coach</span>
            </blockquote>

            <div className="grid grid-cols-2 gap-6 bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Atendimento Presencial</p>
                <div className="text-white font-semibold text-sm mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Posto 12, Leblon</span>
                </div>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Assessoria Digital</p>
                <div className="text-white font-semibold text-sm mt-1 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Para todo o Brasil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Character Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {caracteristicas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl hover:border-blue-500/20 hover:bg-zinc-900/70 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white uppercase italic tracking-wide group-hover:text-blue-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreNos;
