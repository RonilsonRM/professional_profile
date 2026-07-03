import Link from 'next/link';
import { getSortedProjectsData } from '@/lib/projects';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  // Lê os projetos da pasta /content/projects do lado do servidor
  const allProjects = getSortedProjectsData();

  // ⚠️ ATENÇÃO: SUBSTITUA ESSES DADOS PELOS SEUS LINKS PROFISSIONAIS REAIS
  const whatsappNumber = "5531999290954"; // Ex: 55 + DDD + Número (apenas números)
  const whatsappMessage = encodeURIComponent("Olá, Ronilson! Acessei seu portfólio profissional e gostaria de conversar sobre uma oportunidade de projeto/consultoria.");
  const calendlyUrl = "https://calendar.app.google/cSe38AbmsKReNeYA6"; // Ou link do Google Booking
  const emailProfissional = "ronilson.marques@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/ronilson/";

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      {/* CABEÇALHO / NAVEGAÇÃO RÁPIDA */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur fixed top-0 w-full z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-wider bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            RONILSON R MARQUES
          </span>
          <nav className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#impacto" className="hover:text-blue-400 transition-colors">Impacto</a>
            <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a>
            <a href="#contato" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">Contato</a>
          </nav>
        </div>
      </header>

      {/* SEÇÃO HERO: PROPOSTA DE VALOR & BOTÕES DE AÇÃO */}
      <section id="sobre" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center mt-8">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800/50 rounded-full">
          Consultoria & Gestão de Projetos
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Transformando desafios complexos em <span className="text-blue-500">resultados mensuráveis</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
          Especialista em liderança de equipes e estruturação de Projetos. Atuo tanto na consultoria diagnóstica quanto na coordenação de ponta a ponta para otimizar processos, reduzir custos e acelerar entregas.
        </p>

        {/* BOTÕES DE AÇÃO (CTA) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
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

          <a
            href="#contato"
            className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all"
          >
            Falar no WhatsApp
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

      {/* PORTFÓLIO DE PROJETOS COM FILTRO */}
      <ProjectsSection initialProjects={allProjects} />

      {/* SEÇÃO DE SERVIÇOS & FORMATOS DE CONTRATAÇÃO */}
      <section id="servicos" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase block mb-2">Formatos de Trabalho</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Contratar Meus Serviços</h2>
          <p className="text-slate-400 leading-relaxed">
            Flexibilidade de atuação adaptada ao momento de maturidade, complexidade do desafio ou necessidade de liderança estratégica da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Serviço 1: Consultoria */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl relative flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-lg group">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Consultoria Diagnóstica & Processos</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Ideal para empresas que enfrentam gargalos operacionais, atrasos recorrentes ou falta de visibilidade financeira em suas iniciativas de tecnologia e negócios.
              </p>
            </div>
            <ul className="text-xs text-slate-300 space-y-2.5 pt-6 border-t border-slate-800/80">
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Mapeamento de Gargalos (As-Is / To-Be)</li>
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Desenho e Otimização de Fluxos</li>
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Plano de Ação & ROADMAP Executivo</li>
            </ul>
          </div>

          {/* Serviço 2: Coordenação / PMO */}
          <div className="bg-gradient-to-b from-blue-950/40 to-slate-900/90 border-2 border-blue-600/60 p-8 rounded-3xl relative flex flex-col justify-between shadow-2xl shadow-blue-900/20 group">
            <div className="absolute -top-3.5 right-6 bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              Mais Solicitado
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Gestão de Ponta a Ponta (PMO / Squads)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Assumo a liderança direta de projetos críticos, gerenciando escopo, cronograma, riscos, orçamento e integrando equipes multidisciplinares até a entrega final.
              </p>
            </div>
            <ul className="text-xs text-slate-200 space-y-2.5 pt-6 border-t border-slate-800/80">
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Liderança Direta de Equipes (Agile/Híbrido)</li>
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Gestão de Riscos, Custos e Prazos</li>
              <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Comunicação Direta com C-Level & Diretoria</li>
            </ul>
          </div>

          {/* Serviço 3: Mentoria / Advisory */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl relative flex flex-col justify-between hover:border-indigo-500/50 transition-all shadow-lg group">
            <div>
              <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mentoria & Advisory para Lideranças</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Acompanhamento estratégico para Coordenadores, Scrum Masters, Product Owners e gerentes em ascensão que precisam amadurecer suas práticas e governança.
              </p>
            </div>
            <ul className="text-xs text-slate-300 space-y-2.5 pt-6 border-t border-slate-800/80">
              <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Capacitação em Métodos Ágeis e PMBOK</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Estruturação de Governança de PMO</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Reuniões Periódicas de Acompanhamento</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO DE CONTATO DE ALTA CONVERSÃO */}
      <section id="contato" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-8 md:p-14 text-center shadow-2xl relative overflow-hidden">
          {/* Efeito visual de brilho no fundo */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase block mb-3">Conexão Direta</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Pronto para impulsionar o seu próximo projeto estratégico?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Escolha o canal de sua preferência abaixo para iniciarmos uma conversa rápida sem compromisso, avaliar o cenário da sua empresa ou agendar uma reunião de alinhamento.
          </p>

          {/* BOTÕES DE CONTATO DIRETO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12">
            {/* Botão WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.996 0a11.996 11.996 0 0 0-11.996 11.996c0 2.115.55 4.175 1.595 5.996L.004 24l6.195-1.583a11.96 11.96 0 0 0 5.797 1.488h.005a11.996 11.996 0 0 0 11.996-11.996A11.996 11.996 0 0 0 11.996 0zm0 21.864a9.854 9.854 0 0 1-5.023-1.378l-.36-.214-3.733.954.996-3.639-.235-.374a9.855 9.855 0 0 1-1.509-5.217C2.132 6.568 6.568 2.132 11.996 2.132c2.636 0 5.114 1.027 6.978 2.891a9.856 9.856 0 0 1 2.891 6.973c-.001 5.428-4.437 9.868-9.869 9.868zm5.404-7.38c-.296-.148-1.751-.864-2.022-.963-.272-.099-.47-.148-.668.148-.198.296-.767.963-.94 1.161-.173.198-.346.223-.642.074-.296-.148-1.248-.46-2.378-1.467-.879-.784-1.473-1.753-1.646-2.05-.173-.296-.018-.456.13-.604.134-.133.296-.346.444-.519.148-.173.198-.296.296-.494.099-.198.05-.371-.025-.519-.074-.148-.668-1.61-.915-2.206-.241-.579-.487-.5-.668-.509-.173-.008-.371-.009-.569-.009-.198 0-.519.074-.791.371-.272.296-1.039 1.014-1.039 2.473 0 1.459 1.064 2.872 1.212 3.07.148.198 2.094 3.197 5.076 4.486.71.307 1.264.49 1.696.627.713.227 1.362.195 1.875.118.573-.086 1.751-.715 1.998-1.406.247-.691.247-1.284.173-1.406-.074-.123-.272-.198-.569-.346z"/>
              </svg>
              WhatsApp Business
            </a>

            {/* Botão Agendamento (Calendly / Google Booking) */}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar Reunião
            </a>
          </div>

          {/* Opções alternativas secundárias */}
          <div className="pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              ✉️ E-mail direto: <a href={`mailto:${emailProfissional}`} className="text-slate-200 hover:text-blue-400 font-medium transition-colors">{emailProfissional}</a>
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="flex items-center gap-2">
              🔗 Conecte-se: <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-blue-400 font-medium transition-colors">Perfil no LinkedIn</a>
            </span>
          </div>
        </div>
      </section>

      {/* RODAPÉ SIMPLES */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500 bg-slate-950">
        <p>© {new Date().getFullYear()} Ronilson R M. Todos os direitos reservados. · Consultoria & Gestão de Projetos.</p>
      </footer>
    </main>
  );
}