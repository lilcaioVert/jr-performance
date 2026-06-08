'use client';

import { Flame, Check, Zap, Compass } from 'lucide-react';

const ProgramasExclusivos = () => {
  const produtos = [
    {
      title: 'Desafio 8 Semanas: Corrida Imparável',
      tagline: 'Foco: Velocidade e Consistência',
      description: 'Periodização cirúrgica para destravar seu ritmo e conquistar consistência contínua. Elimine as chances de dores ou cansaço excessivo e destrave sua corrida inteligente.',
      link: 'https://go.hotmart.com/Q97603608O',
      beneficios: [
        'Planilha dinâmica de 8 semanas',
        'Vídeos educativos sobre ergonomia',
        'Guia de respiração e passadas'
      ],
      icon: Flame,
      id: 'hotmart-desafio'
    },
    {
      title: 'Transformação Funcional',
      tagline: 'Foco: Força e Mobilidade',
      description: 'O protocolo estruturado de fortalecimento específico para corredores e esportistas. Exercícios que blindam seus tendões e melhoram sua economia de corrida.',
      link: 'https://pay.kiwify.com.br/0Q6IaRU',
      beneficios: [
        'Vídeo-aulas dinâmicas passo a passo',
        'Treinos realizáveis em casa ou academia',
        'Guia de prevenção contra lesões de joelho'
      ],
      icon: Zap,
      id: 'kiwify-funcional'
    },
    {
      title: 'Preparação Trail',
      tagline: 'Foco: Resistência e Montanha',
      description: 'O cronograma definitivo de preparação específico para trail running. Técnicas de ascensão e técnicas de descidas acentuadas pensadas para o terreno técnico.',
      link: 'https://pay.kiwify.com.br/xR4KEiZ',
      beneficios: [
        'Estratégias avançadas de montanha',
        'Fisiologia aplicada a altimetrias',
        'Periodização voltada a durabilidade'
      ],
      icon: Compass,
      id: 'kiwify-trail'
    }
  ];

  return (
    <section 
      id="programas" 
      className="py-16 md:py-24 bg-zinc-950 relative"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-950/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">INFOPRODUTOS &amp; PLANOS DIGITAIS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white italic tracking-tight uppercase leading-none mb-4">
            PROGRAMAS EXCLUSIVOS DE VENDAS
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Tenha acesso instantâneo a cronogramas completos e treinamentos focados em objetivos imediatos.
          </p>
        </div>

        {/* 3 Grid sales cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto, idx) => {
            const Icon = produto.icon;
            return (
              <div 
                key={idx}
                className="bg-zinc-900 border border-blue-500/20 hover:border-blue-500/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl shadow-black/50 group"
              >
                <div>
                  
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                      {produto.tagline}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 duration-300 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase italic tracking-wide mb-4 leading-tight">
                    {produto.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {produto.description}
                  </p>

                  {/* Fast bullet features */}
                  <div className="space-y-2.5 my-6 pt-4 border-t border-zinc-800">
                    {produto.beneficios.map((ben, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 text-zinc-300 text-xs">
                        <Check className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Orange CTA Button strictly for highest conversion */}
                <a
                  href={produto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`cta-programa-${produto.id}`}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3.5 px-4 rounded-2xl tracking-wider uppercase text-center text-sm transition-all shadow-md shadow-orange-500/15 hover:shadow-orange-500/35 hover:scale-[1.01] active:scale-[0.99] duration-200 mt-4 block"
                >
                  Saiba Mais
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProgramasExclusivos;
