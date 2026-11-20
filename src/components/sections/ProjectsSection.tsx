import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Layers, Terminal, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { PROJECTS_DATA } from '../../data/portfolioData'
import { Project } from '../../types/portfolio'
import { soundEngine } from '../../utils/audio'

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-8 bg-[#07070d] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-radial from-[#ff3344]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-radial from-[#ff7700]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#ff442b] uppercase tracking-widest mb-3">
            <span className="w-6 h-[1.5px] bg-[#ff442b]" />
            <span>04 // FEATURED INNOVATIONS</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            SELECTED <span className="text-gradient-flame">PROJECTS.</span>
          </h2>
          <p className="font-space text-slate-400 text-base sm:text-lg max-w-2xl mt-3">
            Production full-stack platforms, clinical machine learning decision systems, and intelligent generative AI solutions.
          </p>
        </div>

        {/* Project Showcase List — All Three Displayed Directly */}
        <div className="space-y-16">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative rounded-3xl bg-[#0b0b14]/90 border border-white/[0.08] hover:border-[#ff442b]/40 transition-all duration-500 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12"
            >
              {/* Accent ambient corner glow */}
              <div
                className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Information, Features, Tech (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Badge bar */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="font-mono text-xs font-bold text-[#ff442b] px-3 py-1 rounded-full bg-[#ff3344]/15 border border-[#ff3344]/30">
                        SYS // {project.number}
                      </span>
                      <span className="font-mono text-xs text-slate-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-syne font-extrabold text-2xl sm:text-4xl text-white mb-3 group-hover:text-slate-100 transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-space text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-2.5 mb-8">
                      {project.features.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#ff7700] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips & Action Buttons */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-[#141424] border border-white/10 font-mono text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      {/* Deep Dive Action */}
                      <button
                        onClick={() => {
                          soundEngine.playClick()
                          onSelectProject(project)
                        }}
                        onMouseEnter={() => soundEngine.playHover()}
                        data-cursor="INSPECT"
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff3344] via-[#ff5722] to-[#ff8800] text-white font-space font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(255,51,68,0.35)] hover:shadow-[0_0_35px_rgba(255,51,68,0.5)] transition-all flex items-center gap-2"
                      >
                        <Layers className="w-4 h-4" />
                        <span>EXPLORE DEEP DIVE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {/* GitHub Repository Link (Only rendered when available) */}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => soundEngine.playHover()}
                          data-cursor="GITHUB"
                          className="px-5 py-3 rounded-full bg-[#121220] border border-white/15 text-slate-200 hover:text-white hover:border-[#ff442b]/60 font-space font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>REPOSITORY</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Right Column: Clean Architectural Mockup (5 cols) */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => {
                      soundEngine.playClick()
                      onSelectProject(project)
                    }}
                    onMouseEnter={() => soundEngine.playHover()}
                    data-cursor="VIEW"
                    className="cursor-pointer group/mockup relative rounded-2xl bg-[#0e0e1a] border border-white/10 hover:border-[#ff442b]/60 transition-all p-5 sm:p-6 shadow-2xl overflow-hidden"
                  >
                    {/* Browser Mockup Top Bar */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff3344]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffaa33]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="px-3 py-1 rounded bg-[#161628] font-mono text-[10px] text-slate-400">
                        {project.id}.architecture.spec
                      </div>
                      <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    </div>

                    {/* Architectural Flow Previews without percentage metrics */}
                    {project.id === 'resume-analyzer' && (
                      <div className="space-y-3 font-sans">
                        <div className="p-3.5 rounded-xl bg-[#141426] border border-white/[0.06] flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-mono">Evaluation Pipeline</span>
                          <span className="text-xs font-mono text-[#ff442b] font-bold">ACTIVE</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                          <div className="p-2.5 rounded-lg bg-[#131322] border border-white/5">
                            <span className="text-slate-400 block text-[10px]">ANALYSIS ENGINE</span>
                            <span className="text-white font-semibold">Gemini 1.5 Pro</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#131322] border border-white/5">
                            <span className="text-slate-400 block text-[10px]">PARSER STATUS</span>
                            <span className="text-amber-400 font-semibold">PDF Text Stream</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#16162a] border border-white/5 text-xs text-slate-300 space-y-1">
                          <span className="text-amber-400 font-mono block text-[11px]">⚡ Core Deliverable</span>
                          <p className="text-slate-300 text-xs">
                            Automated semantic matching, candidate-job alignment heuristics, and actionable ATS insight generation.
                          </p>
                        </div>
                      </div>
                    )}

                    {project.id === 'womens-health-ai' && (
                      <div className="space-y-3 font-sans">
                        <div className="p-3.5 rounded-xl bg-[#141426] border border-white/[0.06] flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-mono">Clinical Decision Support</span>
                          <span className="text-xs font-mono text-emerald-400 font-bold">READY</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                          <div className="p-2.5 rounded-lg bg-[#131322] border border-white/5">
                            <span className="text-slate-400 block text-[10px]">ENSEMBLE MODELS</span>
                            <span className="text-white font-semibold">Random Forest + XGB</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#131322] border border-white/5">
                            <span className="text-slate-400 block text-[10px]">EXPLAINABLE AI</span>
                            <span className="text-[#ff7700] font-semibold">SHAP TreeExplainer</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#16162a] border border-white/5 text-xs text-slate-300 space-y-1">
                          <span className="text-emerald-400 font-mono block text-[11px]">⚡ Medical Intelligence</span>
                          <p className="text-slate-300 text-xs">
                            Multi-condition risk profiling across 8 conditions coupled with EfficientNetB0 ultrasound feature extraction.
                          </p>
                        </div>
                      </div>
                    )}

                    {project.id === 'teamflow' && (
                      <div className="space-y-3 font-sans">
                        <div className="p-3.5 rounded-xl bg-[#141426] border border-white/[0.06] flex items-center justify-between">
                          <span className="text-xs text-slate-300 font-mono">Collaboration Core</span>
                          <span className="text-xs font-mono text-amber-400 font-bold">ENTERPRISE</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                          <div className="p-2 rounded bg-[#16162a] border border-white/5">
                            <span className="text-slate-400 block">SECURITY</span>
                            <span className="text-white font-semibold">JWT + RBAC</span>
                          </div>
                          <div className="p-2 rounded bg-[#16162a] border border-white/5">
                            <span className="text-slate-400 block">DATABASE</span>
                            <span className="text-[#ff7700] font-semibold">PostgreSQL</span>
                          </div>
                          <div className="p-2 rounded bg-[#16162a] border border-white/5">
                            <span className="text-slate-400 block">ORM</span>
                            <span className="text-emerald-400 font-semibold">Prisma Schema</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#16162a] border border-white/5 text-xs text-slate-300 space-y-1">
                          <span className="text-amber-400 font-mono block text-[11px]">⚡ Workflows Supported</span>
                          <p className="text-slate-300 text-xs">
                            Dynamic Kanban task lifecycle, sprint milestone monitoring, and role-protected RESTful API microservices.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Interactive Inspect Hover Banner */}
                    <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400 group-hover/mockup:text-[#ff442b] transition-colors">
                      <span>CLICK TO INSPECT ARCHITECTURE</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/mockup:translate-x-0.5 group-hover/mockup:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
