'use client';

import { ChevronRight, Check, MapPin, Globe } from 'lucide-react';

const Servicos = () => {
  const items = [
    {
      title: 'Treinamento Presencial',
      badge: 'Leblon / Rio de Janeiro',
      description: 'A experiência de ter um acompanhamento direto ao seu lado em tempo real, corrigindo sua mecânica em uma das paisagens mais icônicas da cidade.',
      details: [
        'Análise biomecânica ativa e correção em tempo real',
        'Foco total em fortalecimento funcional de alta performance',
        'Treinos na Av. Delfim Moreira, Posto 12 - Leblon',
        'Atendimento exclusivo com hora estritamente marcada'
      ],
      icon: MapPin,
      highlight: true,
      ctaText: 'Agendar Horário Presencial',
      colorClass: 'border-blue-500/30 bg-blue-950/10 shadow-blue-500/5',
      iconBg: 'bg-blue-500/20 text-blue-400',
    },
    {
      title: 'Assessoria Online',
      badge: 'Disponível para todo o Brasil',
      description: 'Tenha o Método GPS de treinamento onde quer que você esteja. Planilhas de corrida completas estruturadas via aplicativo.',
      details: [
        'Treinos personalizados entregues direto no app de corrida',
        'Controle exato de planilha alinhada com seus batimentos',
        'Feedbacks detalhados semanais do Head Coach',
        'Suporte de dúvidas via WhatsApp para ajustar sua planilha'
      ],
      icon: Globe,
      highlight: false,
      ctaText: 'Contratar Assessoria Online',
      colorClass: 'border-zinc-800 bg-zinc-900/30',
      iconBg: 'bg-cyan-500/10 text-cyan-400',
    }
  ];

  return (
    <section 
      id="servicos" 
      className="py-16 md:py-24 bg-black relative"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">MODELOS DE SUPORTE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white italic tracking-tight uppercase leading-none mb-4">
            NOSSOS MODELOS DE TREINO
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Escolha o formato que melhor se adapta à sua rotina e ao seu nível atual de rendimento físico.
          </p>
        </div>

        {/* Services Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((servico, idx) => {
            const Icon = servico.icon;
            return (
              <div 
                key={idx}
                className={`border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl relative ${servico.colorClass} ${
                  servico.highlight ? 'ring-1 ring-blue-500/20' : ''
                }`}
              >
                {servico.highlight && (
                  <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-600 text-white text-[10px] uppercase font-black px-3 py-1 rounded-full tracking-widest shadow-md">
                    MAIS PROCURADO
                  </span>
                )}

                <div>
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${servico.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-blue-400 text-xs font-bold tracking-widest uppercase block mb-0.5">
                        {servico.badge}
                      </span>
                      <h3 className="font-display font-extrabold text-2xl text-white uppercase italic tracking-wide">
                        {servico.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-zinc-300 mb-8 text-sm md:text-base leading-relaxed">
                    {servico.description}
                  </p>

                  {/* Highlight Checklist */}
                  <div className="border-t border-zinc-900 pt-6 mb-8">
                    <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">
                      O que está incluso:
                    </h4>
                    <ul className="space-y-3.5">
                      {servico.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-zinc-300 text-sm">
                          <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/message/47DJ7YXUY5PII1"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`cta-servico-${idx}`}
                  className="w-full text-center font-bold py-4 px-6 rounded-2xl tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40"
                >
                  {servico.ctaText}
                  <ChevronRight className="w-5 h-5" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Servicos;
