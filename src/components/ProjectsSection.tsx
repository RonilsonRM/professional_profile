'use client';

import { useState } from 'react';
import { ProjectData } from '@/types/project';

interface ProjectsSectionProps {
  initialProjects: ProjectData[];
}

export default function ProjectsSection({ initialProjects }: ProjectsSectionProps) {
  // Estado para controlar o filtro ativo: 'todos', 'consultor' ou 'coordenador'
  const [filter, setFilter] = useState<'todos' | 'consultor' | 'coordenador'>('todos');

  // Filtra os projetos com base na escolha do utilizador
  const filteredProjects = initialProjects.filter((project) => {
    if (filter === 'todos') return true;
    return project.role_type === filter;
  });

  return (
    <section id="projetos" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-slate-800">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfólio de Projetos & Cases</h2>
        <p className="text-slate-400">
          Conheça os desafios reais que liderei aplicando a metodologia STAR (Situação, Tarefa, Ação e Resultado).
        </p>
      </div>

      {/* BOTÕES DO FILTRO VISUAL */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setFilter('todos')}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
            filter === 'todos'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
          }`}
        >
          Todos os Projetos ({initialProjects.length})
        </button>
        <button
          onClick={() => setFilter('consultor')}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
            filter === 'consultor'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
          }`}
        >
          Atuação como Consultor
        </button>
        <button
          onClick={() => setFilter('coordenador')}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
            filter === 'coordenador'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
          }`}
        >
          Atuação como Coordenador
        </button>
      </div>

      {/* GRELHA DE CARDS DE PROJETOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-lg bg-slate-800 text-blue-400 border border-slate-700">
                  {project.client_industry}
                </span>
                <span className="text-xs font-medium text-slate-500">{project.period}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-3 leading-snug">
                {project.title}
              </h3>

              <div className="mb-6">
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                    project.role_type === 'coordenador'
                      ? 'bg-indigo-950 text-indigo-400 border border-indigo-800/60'
                      : 'bg-blue-950 text-blue-400 border border-blue-800/60'
                  }`}
                >
                  Papel: {project.role_type === 'coordenador' ? 'Coordenador de Projeto' : 'Consultor Especialista'}
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.summary}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex justify-between items-center">
              <span className="text-xs text-slate-500 italic">Metodologia STAR aplicada</span>
              <span className="text-sm font-semibold text-blue-400 flex items-center gap-1">
                Case Destaque ✓
              </span>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-500">
            Nenhum projeto encontrado para esta categoria de filtro.
          </div>
        )}
      </div>
    </section>
  );
}