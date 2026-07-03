import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      {/* CABEÇALHO / NAVEGAÇÃO RÁPIDA */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur fixed top-0 w-full z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-wider bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            RONILSON.PRO
          </span>
          <nav className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#impacto" className="hover:text-blue-400 transition-colors">Impacto</a>
            <a href="#atuacao" className="hover:text-blue-400 transition-colors">Serviços</a>
          </nav>
        </div>
      </header>

      {/* SEÇÃO HERO: PROPOSTA DE VALOR & BOTÕES DE AÇÃO */}
      <section id="sobre" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center mt-8">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800/50 rounded-full">
          Consultoria & Gestão de Projetos (PMO)
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Transformando desafios complexos em <span className="text-blue-500">resultados mensuráveis</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
          Especialista em liderança de equipes e estruturação de PMO. Atuo tanto na consultoria diagnóstica quanto na coordenação de ponta a ponta para otimizar processos, reduzir custos e acelerar entregas.
        </p>

        {/* BOTÕES DE AÇÃO (CTA) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          {/* Botão de Download do Currículo */}
          <a
            href="/professional_profile/assets/cv-profissional.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Baixar Currículo (PDF)
          </a>

          {/* Botão para Área de Contato */}
          <a
            href="#atuacao"
            className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all"
          >
            Contratar Serviços
          </a>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUES RÁPIDOS / NÚMEROS DE IMPACTO */}
      <section id="impacto" className="bg-slate-950/60 border-y border-slate-800/80 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <span className="block text-4xl md:text-5xl font-black text-blue-400 mb-2">+10 Anos</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">de Experiência em Projetos</span>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <span className="block text-4xl md:text-5xl font-black text-indigo-400 mb-2">+40 Equipes</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Lideradas & Treinadas</span>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <span className="block text-4xl md:text-5xl font-black text-emerald-400 mb-2">R$ 500k+</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">em Economia Gerada para Clientes</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE RESUMO DE ATUAÇÃO / SERVIÇOS */}
      <section id="atuacao" className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Como Posso Ajudar Sua Empresa</h2>
          <p className="text-slate-400">Flexibilidade de atuação adaptada ao momento e à necessidade do seu negócio ou projeto estratégico.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Consultoria */}
          <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/90 border border-slate-800 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Atuação como Consultor</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Diagnóstico preciso de gargalos operacionais, reestruturação de processos, implementação de metodologias ágeis e direcionamento estratégico para executivos e lideranças técnicas.
              </p>
            </div>
            <ul className="text-sm text-slate-300 space-y-2.5 mb-8 border-t border-slate-800/80 pt-6">
              <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Diagnóstico & Mapeamento de Fluxos</li>
              <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Implementação de Metodologias (Agile / PMBOK)</li>
              <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Mentoria e Treinamento de Equipes</li>
            </ul>
          </div>

          {/* Card Coordenação */}
          <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/90 border border-slate-800 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Atuação como Coordenador</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Gestão de ponta a ponta do projeto (PMO). Assumo a liderança direta das equipes, controle de cronograma, gestão de riscos, orçamento e comunicação direta com stakeholders para garantir a entrega.
              </p>
            </div>
            <ul className="text-sm text-slate-300 space-y-2.5 mb-8 border-t border-slate-800/80 pt-6">
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Liderança Direta de Squads & PMO</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Gestão de Cronogramas, Riscos e Orçamento</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Alinhamento Executivo & Status Report</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RODAPÉ SIMPLES */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Ronilson. Todos os direitos reservados. · Construído com Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}