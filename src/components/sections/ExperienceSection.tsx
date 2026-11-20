import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle, Database, Server, Layout, GitBranch, ArrowUpRight } from 'lucide-react'
import { EXPERIENCE_DATA } from '../../data/portfolioData'
import { soundEngine } from '../../utils/audio'

export const ExperienceSection: React.FC = () => {
  const exp = EXPERIENCE_DATA[0]
  const [activeTab, setActiveTab] = useState<'highlights' | 'tech' | 'deliverables'>('highlights')

  const pillars = [
    {
      title: 'React Frontend Engineering',
      desc: 'Crafted dynamic, accessible, and responsive user interfaces using modern React component paradigms and responsive CSS.',
      icon: Layout,
      color: 'from-[#ff3344] to-[#ff5722]'
    },
    {
      title: 'Node.js Backend & REST APIs',
      desc: 'Constructed robust RESTful API endpoints with structured request validation, parameter sanitization, and error handling.',
      icon: Server,
      color: 'from-[#ff5722] to-[#ff7700]'
    },
    {
      title: 'SQL Database Operations',
      desc: 'Optimized relational queries, normalized data tables, and refined query execution plans to accelerate application response times.',
      icon: Database,
      color: 'from-[#ff7700] to-amber-400'
    },
    {
      title: 'Git & GitHub Collaboration',
      desc: 'Practiced disciplined version control workflows, participating in pull request code reviews, feature branching, and team milestones.',
      icon: GitBranch,
      color: 'from-amber-400 to-[#ff3344]'
    }
  ]

  return (
    <section
      id="experience"
      className="relative py-28 px-4 sm:px-8 bg-[#050508] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-radial from-[#ff3344]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#ff442b] uppercase tracking-widest mb-3">
            <span className="w-6 h-[1.5px] bg-[#ff442b]" />
            <span>03 // PROFESSIONAL TRAJECTORY</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            CAREER <span className="text-gradient-flame">TIMELINE.</span>
          </h2>
          <p className="font-space text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Hands-on industry engineering experience delivering full-stack web applications and scalable database pipelines.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-gradient border-white/15 ml-2 sm:ml-6">
          {/* Timeline Node Orb */}
          <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#090912] border-2 border-[#ff3344] flex items-center justify-center shadow-[0_0_15px_#ff3344]">
            <span className="w-2 h-2 rounded-full bg-[#ff7700] animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#0b0b14]/90 border border-white/[0.09] p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-[#ff442b]/40 transition-colors"
          >
            {/* Top Info Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#ff3344]/15 border border-[#ff3344]/40 font-mono text-xs font-semibold text-[#ff442b]">
                    {exp.type.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-slate-400">
                    VERIFIED CREDENTIAL
                  </span>
                </div>
                <h3 className="font-syne font-bold text-2xl sm:text-4xl text-white">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-4 text-sm font-space text-[#ff7700] font-semibold mt-1">
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#141420] border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-[#ff442b]" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#141420] border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Overview Description */}
            <p className="font-sans text-slate-300 text-base leading-relaxed my-6">
              {exp.description}
            </p>

            {/* Four Core Technical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {pillars.map((p) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    onMouseEnter={() => soundEngine.playHover()}
                    className="p-5 rounded-2xl bg-[#0f0f1b] border border-white/[0.06] hover:border-white/20 transition-all group/pillar"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} p-[1px] mb-3.5 shadow-md`}>
                      <div className="w-full h-full bg-[#0a0a12] rounded-[11px] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-space font-semibold text-sm text-white mb-1.5">
                      {p.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Detailed Accomplishment Bullets */}
            <div className="rounded-2xl bg-[#0f0f1c] border border-white/[0.06] p-6 sm:p-7">
              <h4 className="font-syne font-bold text-lg text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#ff3344]" />
                <span>Verified Internship Highlights & Responsibilities</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {exp.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#090912]/60 border border-white/[0.04]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff7700] shrink-0 mt-2" />
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                <span className="text-[#ff442b]">TOOLCHAIN //</span>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((sk) => (
                    <span
                      key={sk}
                      className="px-3 py-1 rounded-md bg-[#161626] border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>FORMAL INTERNSHIP COMPLETED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
