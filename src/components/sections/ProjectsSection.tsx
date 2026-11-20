import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Cpu, CheckCircle2, Terminal } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { PROJECTS_DATA } from '../../data/portfolioData'
import { Project } from '../../types/portfolio'
import { soundEngine } from '../../utils/audio'

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'AI & Machine Learning' | 'Full Stack Web'>('all')

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true
    return p.category === filter
  })

  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-8 bg-[#07070d] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-radial from-[#ff3344]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-radial from-[#ff7700]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-xs text-[#ff442b] uppercase tracking-widest mb-3">
              <span className="w-6 h-[1.5px] bg-[#ff442b]" />
              <span>04 // FEATURED INNOVATIONS</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
              SELECTED <span className="text-gradient-flame">PROJECTS.</span>
            </h2>
            <p className="font-space text-slate-400 text-base sm:text-lg max-w-xl mt-3">
              Production full-stack platforms, clinical machine learning decision systems, and intelligent generative AI solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#0d0d18] p-1.5 rounded-2xl border border-white/10">
            {(['all', 'AI & Machine Learning', 'Full Stack Web'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundEngine.playClick()
                  setFilter(cat)
                }}
                onMouseEnter={() => soundEngine.playHover()}
                data-cursor="FILTER"
                className={`px-4 py-2 rounded-xl font-space text-xs font-semibold tracking-wide transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#ff3344] to-[#ff7700] text-white shadow-[0_0_20px_rgba(255,51,68,0.35)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Systems' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
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
                  {/* Left Column: Information, Metrics, Features (7 cols) */}
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

                      {/* Verified Resume Metrics Banner */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3.5 rounded-xl bg-[#11111e] border border-white/[0.06] flex flex-col justify-between"
                          >
                            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                              {m.label}
                            </span>
                            <span className="font-syne font-extrabold text-2xl text-gradient-flame my-1">
                              {m.value}
                            </span>
                            <span className="font-sans text-[11px] text-slate-400 line-clamp-1">
                              {m.subtext}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Key Features preview */}
                      <div className="space-y-2 mb-8">
                        {project.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs font-sans text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7700] shrink-0 mt-1.5" />
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
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Custom Simulated Visual Mockup (5 cols) */}
                  <div className="lg:col-span-5">
                    <div
                      onClick={() => {
                        soundEngine.playClick()
                        onSelectProject(project)
                      }}
                      onMouseEnter={() => soundEngine.playHover()}
                      data-cursor="VIEW"
                      className="cursor-pointer group/mockup relative rounded-2xl bg-[#0e0e1a] border border-white/10 hover:border-[#ff442b]/60 transition-all p-5 shadow-2xl overflow-hidden"
                    >
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff3344]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffaa33]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="px-3 py-1 rounded bg-[#161628] font-mono text-[10px] text-slate-400">
                          {project.id}.telemetry.app
                        </div>
                        <Terminal className="w-3.5 h-3.5 text-slate-500" />
                      </div>

                      {/* Specific Mockup Previews based on project */}
                      {project.id === 'resume-analyzer' && (
                        <div className="space-y-3 font-sans">
                          <div className="p-3 rounded-xl bg-[#141426] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-300 font-mono">Job Compatibility Index</span>
                            <span className="text-sm font-bold font-mono text-[#ff442b]">+30% Accuracy</span>
                          </div>
                          <div className="w-full bg-[#1b1b30] rounded-full h-2 overflow-hidden">
                            <div className="bg-gradient-to-r from-[#ff3344] to-amber-400 h-2 rounded-full w-[88%]" />
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                            <div className="p-2 rounded bg-[#131322] border border-white/5">
                              <span className="text-slate-400 block">ATS Parse Score</span>
                              <span className="text-white font-bold">94 / 100</span>
                            </div>
                            <div className="p-2 rounded bg-[#131322] border border-white/5">
                              <span className="text-slate-400 block">Screening Overhead</span>
                              <span className="text-emerald-400 font-bold">-45% Reduced</span>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#16162a] border border-white/5 text-[11px] text-slate-300">
                            <span className="text-amber-400 font-mono block mb-1">⚡ Gemini Analysis Output</span>
                            Candidate matches Senior Full Stack profile with 99% PDF extraction precision.
                          </div>
                        </div>
                      )}

                      {project.id === 'womens-health-ai' && (
                        <div className="space-y-3 font-sans">
                          <div className="p-3 rounded-xl bg-[#141426] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-300 font-mono">Ensemble Prediction Engine</span>
                            <span className="text-sm font-bold font-mono text-emerald-400">92% Accuracy</span>
                          </div>
                          <div className="p-3 rounded-xl bg-[#121222] border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-slate-300">Conditions Analyzed</span>
                            <span className="font-mono text-amber-400 font-bold">8 Major Conditions</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#16162a] border border-white/5 text-[11px] text-slate-300 space-y-1">
                            <div className="flex justify-between font-mono text-[10px] text-slate-400">
                              <span>SHAP Feature Attribution</span>
                              <span className="text-[#ff442b]">100% Explainable</span>
                            </div>
                            <div className="w-full bg-[#1b1b30] rounded-full h-1.5 overflow-hidden">
                              <div className="bg-gradient-to-r from-emerald-400 to-[#ff7700] h-1.5 rounded-full w-[92%]" />
                            </div>
                          </div>
                          <div className="p-2 rounded bg-[#131322] border border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
                            <span>Vision Backbone:</span>
                            <span className="text-white">EfficientNetB0 (Ultrasound)</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'teamflow' && (
                        <div className="space-y-2.5 font-sans">
                          <div className="p-3 rounded-xl bg-[#141426] border border-white/[0.06] flex items-center justify-between">
                            <span className="text-xs text-slate-300 font-mono">Active Sprint Telemetry</span>
                            <span className="text-sm font-bold font-mono text-amber-400">+25% Efficiency</span>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                            <div className="p-2 rounded bg-[#16162a] border border-white/5">
                              <span className="text-slate-400 block">TODO</span>
                              <span className="text-white font-bold">12 Tasks</span>
                            </div>
                            <div className="p-2 rounded bg-[#16162a] border border-white/5">
                              <span className="text-slate-400 block">IN PROGRESS</span>
                              <span className="text-[#ff7700] font-bold">5 Tasks</span>
                            </div>
                            <div className="p-2 rounded bg-[#16162a] border border-white/5">
                              <span className="text-slate-400 block">COMPLETED</span>
                              <span className="text-emerald-400 font-bold">28 Tasks</span>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#131322] border border-white/5 text-[11px] text-slate-300 flex items-center justify-between">
                            <span className="font-mono text-xs text-slate-400">Planning Friction:</span>
                            <span className="font-mono text-xs font-bold text-emerald-400">-20% Overhead</span>
                          </div>
                        </div>
                      )}

                      {/* Interactive Inspect Hover Banner */}
                      <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400 group-hover/mockup:text-[#ff442b] transition-colors">
                        <span>CLICK TO INSPECT ARCHITECTURE</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/mockup:translate-x-0.5 group-hover/mockup:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
