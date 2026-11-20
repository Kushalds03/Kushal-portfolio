import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Cpu, Layers, Sparkles, CheckCircle2, Award } from 'lucide-react'
import { EDUCATION_DATA, EXPERIENCE_DATA, PERSONAL_INFO } from '../../data/portfolioData'
import { soundEngine } from '../../utils/audio'

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-8 bg-[#07070c] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff3344]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ff7700]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#ff442b] uppercase tracking-widest mb-3">
            <span className="w-6 h-[1.5px] bg-[#ff442b]" />
            <span>02 // SYSTEM DOSSIER</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            BEYOND THE <span className="text-gradient-flame">CODE.</span>
          </h2>
          <p className="font-space text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Computer Science undergraduate at BNMIT crafting full-stack software architectures and intelligent AI-powered solutions.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Core Bio & Mission (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 rounded-2xl bg-[#0c0c16]/90 border border-white/[0.08] p-7 sm:p-9 relative overflow-hidden group hover:border-[#ff442b]/40 transition-colors shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#ff3344]/10 to-transparent blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2.5 text-xs font-mono text-amber-400 uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Identity & Engineering Philosophy</span>
            </div>

            <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-4 leading-snug">
              Transforming complex algorithmic principles into tangible, scalable software systems.
            </h3>

            <p className="font-sans text-slate-300 text-base leading-relaxed mb-6">
              {PERSONAL_INFO.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff442b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-space font-semibold text-sm text-white">Full-Stack Synthesis</h4>
                  <p className="font-sans text-xs text-slate-400 mt-0.5">
                    Seamless bridge from responsive React client apps to robust Node/Express backends and SQL databases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff7700] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-space font-semibold text-sm text-white">Practical AI Integration</h4>
                  <p className="font-sans text-xs text-slate-400 mt-0.5">
                    Deploying LLMs (Gemini API) and ML ensembles (Random Forest, XGBoost) with Explainable AI transparency.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Academic Excellence (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-4 rounded-2xl bg-[#0c0c16]/90 border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between hover:border-[#ff7700]/40 transition-colors shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#ff7700]/10 border border-[#ff7700]/30 text-[#ff7700]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                  CGPA {EDUCATION_DATA.cgpa}
                </div>
              </div>

              <h3 className="font-syne font-bold text-xl text-white mb-1">
                {EDUCATION_DATA.institution}
              </h3>
              <p className="font-space text-sm text-slate-300 font-medium mb-1">
                {EDUCATION_DATA.degree} – {EDUCATION_DATA.field}
              </p>
              <p className="font-mono text-xs text-slate-500 mb-5">
                {EDUCATION_DATA.period} • {EDUCATION_DATA.location}
              </p>

              <div className="space-y-2">
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                  Core Technical Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION_DATA.keySubjects.slice(0, 5).map((subj) => (
                    <span
                      key={subj}
                      className="px-2.5 py-1 rounded-md bg-[#141422] border border-white/[0.06] text-[11px] font-sans text-slate-300"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>STATUS: UNDERGRADUATE</span>
              <span className="text-[#ff442b] font-semibold">BATCH 2023–PRESENT</span>
            </div>
          </motion.div>

          {/* Card 3: Industry Apprenticeship (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-4 rounded-2xl bg-[#0c0c16]/90 border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between hover:border-[#ff3344]/40 transition-colors shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#ff3344]/10 border border-[#ff3344]/30 text-[#ff3344]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ff3344]/15 border border-[#ff3344]/40 text-[#ff3344] font-mono text-xs font-semibold">
                  INTERNSHIP
                </span>
              </div>

              <h3 className="font-syne font-bold text-xl text-white mb-1">
                {EXPERIENCE_DATA[0].company}
              </h3>
              <p className="font-space text-sm text-[#ff7700] font-semibold mb-1">
                {EXPERIENCE_DATA[0].role}
              </p>
              <p className="font-mono text-xs text-slate-500 mb-4">
                {EXPERIENCE_DATA[0].period}
              </p>

              <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                Engineered full-stack applications with React.js, Node.js, and SQL. Built responsive interfaces and integrated RESTful APIs.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
              {EXPERIENCE_DATA[0].skills.slice(0, 4).map((sk) => (
                <span
                  key={sk}
                  className="px-2 py-0.5 rounded bg-[#171726] border border-white/10 text-[10px] font-mono text-amber-300"
                >
                  {sk}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Development Interests & Problem Solving (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="md:col-span-8 rounded-2xl bg-[#0c0c16]/90 border border-white/[0.08] p-7 sm:p-9 hover:border-amber-500/40 transition-colors shadow-xl"
          >
            <div className="flex items-center gap-2.5 text-xs font-mono text-amber-400 uppercase tracking-widest mb-4">
              <Cpu className="w-4 h-4" />
              <span>Core Specializations & Problem Solving</span>
            </div>

            <h3 className="font-syne font-bold text-2xl text-white mb-5">
              Disciplined engineering for resilient, high-speed execution.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-4 rounded-xl bg-[#121220] border border-white/[0.06] hover:border-[#ff3344]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#ff3344]/15 flex items-center justify-center text-[#ff3344] mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-space font-semibold text-sm text-white mb-1.5">
                  Scalable Web Architecture
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Modular Express REST microservices, transactional relational schemas, and responsive UI components.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121220] border border-white/[0.06] hover:border-[#ff7700]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#ff7700]/15 flex items-center justify-center text-[#ff7700] mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-space font-semibold text-sm text-white mb-1.5">
                  Generative AI Systems
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Google Gemini API integration with structured output schemas for real-time semantic analysis and ATS parsing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121220] border border-white/[0.06] hover:border-amber-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-space font-semibold text-sm text-white mb-1.5">
                  Machine Learning & XAI
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Supervised ensemble learning (Random Forest, XGBoost) paired with SHAP explainability matrices for clinical trust.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
