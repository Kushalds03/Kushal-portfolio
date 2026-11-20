import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Cpu, Database, Wrench, Layers, BookOpen } from 'lucide-react'
import { TECH_STACK_DATA } from '../../data/portfolioData'
import { soundEngine } from '../../utils/audio'

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...TECH_STACK_DATA.map((c) => c.category)]

  const displayedCategories =
    selectedCategory === 'All'
      ? TECH_STACK_DATA
      : TECH_STACK_DATA.filter((c) => c.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return Code
      case 'Frontend Development':
        return Layers
      case 'Backend Development':
        return Cpu
      case 'Databases':
        return Database
      case 'Tools & Technologies':
        return Wrench
      case 'Core Subjects':
        return BookOpen
      default:
        return Code
    }
  }

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
            Curated technologies, frameworks, and core computer science proficiencies applied across software development and academic projects.
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

        {/* Clean Skill Groups Matrix without percentages or progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((group, gIdx) => {
              const CategoryIcon = getCategoryIcon(group.category)
              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: gIdx * 0.05 }}
                  className="rounded-3xl bg-[#0b0b14]/90 border border-white/[0.08] hover:border-[#ff442b]/40 transition-all p-6 sm:p-8 flex flex-col justify-between shadow-xl group"
                >
                  <div>
                    {/* Category Title Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#ff3344]/15 border border-[#ff3344]/30 text-[#ff442b]">
                          <CategoryIcon className="w-5 h-5" />
                        </div>
                        <h3 className="font-syne font-bold text-lg text-white group-hover:text-slate-100 transition-colors">
                          {group.category}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {group.skills.length} TECHS
                      </span>
                    </div>

                    <p className="font-sans text-xs text-slate-400 mb-6 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Clean Technology Cards */}
                    <div className="space-y-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          onMouseEnter={() => soundEngine.playHover()}
                          className="p-3.5 rounded-xl bg-[#111120] border border-white/[0.05] hover:border-white/20 transition-all group/tech"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-space font-semibold text-sm text-white group-hover/tech:text-[#ff442b] transition-colors">
                              {skill.name}
                            </span>
                          </div>

                          {/* Technical Tags / Concepts */}
                          <div className="flex flex-wrap gap-1.5">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded-md bg-[#18182b] border border-white/[0.04] text-[11px] font-mono text-slate-300"
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
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
