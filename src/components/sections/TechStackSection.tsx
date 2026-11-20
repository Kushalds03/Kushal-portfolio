import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Code, Cpu, Database, Wrench, Layers, Play, CheckCircle } from 'lucide-react'
import { TECH_STACK_DATA } from '../../data/portfolioData'
import { soundEngine } from '../../utils/audio'

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeCliCommand, setActiveCliCommand] = useState<string>('gemini-infer')
  const [cliOutput, setCliOutput] = useState<string[]>(['$ kushal-dev ready. Select a diagnostic routine above to simulate runtime.'])

  const categories = ['All', ...TECH_STACK_DATA.map((c) => c.category)]

  const runSimulatedCli = (cmdType: string) => {
    soundEngine.playSuccess()
    setActiveCliCommand(cmdType)

    if (cmdType === 'gemini-infer') {
      setCliOutput([
        '$ gemini-cli analyze --model=gemini-1.5-pro --input=resume_sample.pdf',
        '⚡ Initializing Gemini API authentication...',
        '✓ PDF extracted: 4 pages, 2,840 tokens',
        '✓ Prompting structured evaluation schema...',
        '✓ ATS Compatibility Score: 94%',
        '✓ Skill Gap: Identified 2 high-priority competencies',
        '✔ Completed inference with +30% weighted precision in 640ms.'
      ])
    } else if (cmdType === 'ml-eval') {
      setCliOutput([
        '$ python -m models.evaluate --ensemble=rf_xgboost --dataset=clinical_v2',
        '⚡ Loading patient biomarker matrix (n=4,200)...',
        '✓ Running 5-fold cross validation...',
        '✓ Random Forest ROC-AUC: 0.912',
        '✓ XGBoost ROC-AUC: 0.928',
        '✓ Soft Voting Ensemble Accuracy: 92.4%',
        '✓ Computing SHAP TreeExplainer attributions...',
        '✔ Model validated across 8 conditions. Ready for clinical decision support.'
      ])
    } else if (cmdType === 'prisma-migrate') {
      setCliOutput([
        '$ npx prisma migrate deploy --schema=./teamflow/schema.prisma',
        '⚡ Connecting to PostgreSQL primary cluster...',
        '✓ Migration 20261120_init_rbac applied successfully.',
        '✓ Indexed columns: user_id, project_id, task_status',
        '✓ Generated Prisma Client (v6.2.0) with zero type drifts.',
        '✔ REST API endpoints synchronized. Response latency < 40ms.'
      ])
    }
  }

  const displayedCategories =
    selectedCategory === 'All'
      ? TECH_STACK_DATA
      : TECH_STACK_DATA.filter((c) => c.category === selectedCategory)

  return (
    <section
      id="skills"
      className="relative py-28 px-4 sm:px-8 bg-[#050508] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#ff3344]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff7700]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#ff442b] uppercase tracking-widest mb-3">
            <span className="w-6 h-[1.5px] bg-[#ff442b]" />
            <span>05 // ARSENAL & CAPABILITIES</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            MY DIGITAL <span className="text-gradient-flame">TOOLKIT.</span>
          </h2>
          <p className="font-space text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Curated technologies, frameworks, and AI toolchains applied across production software systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundEngine.playClick()
                setSelectedCategory(cat)
              }}
              onMouseEnter={() => soundEngine.playHover()}
              data-cursor="SELECT"
              className={`px-4 py-2 rounded-xl text-xs font-space font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#ff3344] to-[#ff7700] text-white shadow-[0_0_20px_rgba(255,51,68,0.35)]'
                  : 'bg-[#0f0f1c] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((group, gIdx) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: gIdx * 0.05 }}
                className="rounded-2xl bg-[#0b0b14]/90 border border-white/[0.08] hover:border-[#ff442b]/40 transition-colors p-6 sm:p-7 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-syne font-bold text-lg text-white">
                      {group.category}
                    </h3>
                    <span className="font-mono text-[10px] text-[#ff442b] px-2 py-0.5 rounded bg-[#ff3344]/15 border border-[#ff3344]/30">
                      {group.skills.length} MODULES
                    </span>
                  </div>

                  <p className="font-sans text-xs text-slate-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        onMouseEnter={() => soundEngine.playHover()}
                        className="p-3 rounded-xl bg-[#111120] border border-white/[0.05] hover:border-white/15 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-space font-semibold text-xs sm:text-sm text-white">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-[#ff7700]">
                            {skill.experience}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-[#1b1b30] rounded-full h-1.5 overflow-hidden mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gradient-to-r from-[#ff3344] via-[#ff5722] to-amber-400 h-1.5 rounded-full"
                          />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-1.5 py-0.5 rounded bg-[#18182b] text-[10px] font-mono text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Live Interactive Terminal Simulation */}
        <div className="rounded-3xl bg-[#090912] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff3344]" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs text-slate-300 font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#ff442b]" />
                <span>KUSHAL-CORE // INTERACTIVE TOOLKIT RUNTIME</span>
              </span>
            </div>

            {/* Quick Command Launcher buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => runSimulatedCli('gemini-infer')}
                onMouseEnter={() => soundEngine.playHover()}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeCliCommand === 'gemini-infer'
                    ? 'bg-[#ff3344] text-white'
                    : 'bg-[#151525] text-slate-300 hover:text-white'
                }`}
              >
                <Play className="w-3 h-3" />
                <span>SIMULATE GEMINI ATS INFERENCE</span>
              </button>

              <button
                onClick={() => runSimulatedCli('ml-eval')}
                onMouseEnter={() => soundEngine.playHover()}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeCliCommand === 'ml-eval'
                    ? 'bg-[#ff7700] text-white'
                    : 'bg-[#151525] text-slate-300 hover:text-white'
                }`}
              >
                <Play className="w-3 h-3" />
                <span>EVALUATE 92% ML ENSEMBLE</span>
              </button>

              <button
                onClick={() => runSimulatedCli('prisma-migrate')}
                onMouseEnter={() => soundEngine.playHover()}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeCliCommand === 'prisma-migrate'
                    ? 'bg-amber-500 text-slate-900 font-bold'
                    : 'bg-[#151525] text-slate-300 hover:text-white'
                }`}
              >
                <Play className="w-3 h-3" />
                <span>SYNC PRISMA & POSTGRES</span>
              </button>
            </div>
          </div>

          {/* Terminal Screen Output */}
          <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-2 bg-[#050508] p-5 rounded-2xl border border-white/[0.05] min-h-[140px] leading-relaxed">
            {cliOutput.map((line, idx) => (
              <p
                key={idx}
                className={
                  line.startsWith('$')
                    ? 'text-amber-400 font-bold'
                    : line.startsWith('✔')
                    ? 'text-emerald-400 font-semibold'
                    : line.startsWith('⚡')
                    ? 'text-[#ff442b]'
                    : 'text-slate-300'
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
