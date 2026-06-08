import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SobreNos from '@/components/SobreNos';
import Servicos from '@/components/Servicos';
import ProgramasExclusivos from '@/components/ProgramasExclusivos';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans selection:bg-orange-500 select-none overflow-x-hidden">
      {/* Sticky header bar */}
      <Header />

      <main className="relative z-10">
        {/* Giant header details & Coach section */}
        <Hero />

        {/* Brand details section */}
        <SobreNos />

        {/* Service Comparison */}
        <Servicos />

        {/* Purchases cards */}
        <ProgramasExclusivos />
      </main>

      {/* Footer contacts & Map view details */}
      <Footer />
    </div>
  );
}
