import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cpu, CheckCircle2, Copy, Check, Terminal, Layers } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { Project } from '../../types/portfolio'
import { soundEngine } from '../../utils/audio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
  onToast: (title: string, description?: string) => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onToast }) => {
  const [copiedCode, setCopiedCode] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview')

  if (!project) return null

  const handleCopyCode = () => {
    soundEngine.playSuccess()
    navigator.clipboard.writeText(project.codeSnippet.code)
    setCopiedCode(true)
    onToast('Code Copied', 'Architecture snippet copied to clipboard')
    setTimeout(() => setCopiedCode(false), 2500)
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundEngine.playClick()
            onClose()
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0a0a14] border border-white/15 rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-8 text-slate-200"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/[0.08] bg-[#0c0c18]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#ff3344]/20 border border-[#ff3344]/40 text-[#ff442b] font-bold">
                SYSTEM #{project.number}
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest hidden sm:inline">
                {project.category}
              </span>
            </div>

            <button
              onClick={() => {
                soundEngine.playClick()
                onClose()
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
            {/* Project Title & Tagline */}
            <div>
              <h2 className="font-syne font-extrabold text-2xl sm:text-4xl text-white mb-2 leading-tight">
                {project.title}
              </h2>
              <p className="font-space text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              {(['overview', 'architecture', 'code'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    soundEngine.playClick()
                    setActiveTab(tab)
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-space font-semibold tracking-wider uppercase transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#ff3344] to-[#ff7700] text-white shadow-[0_0_15px_rgba(255,51,68,0.4)]'
                      : 'bg-[#121222] text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'overview' && 'System Overview'}
                  {tab === 'architecture' && 'Technical Architecture'}
                  {tab === 'code' && 'Core Implementation'}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-syne font-bold text-base text-white mb-2">Deep Description</h4>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-syne font-bold text-base text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff442b]" />
                    <span>Key Features & Capabilities</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#0f0f1e] border border-white/[0.05] flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff7700] shrink-0 mt-2" />
                        <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#141424] border border-[#ff3344]/30">
                  <h4 className="font-space font-semibold text-xs uppercase tracking-widest text-amber-400 mb-1.5 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span>My Engineering Contribution</span>
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Architecture */}
            {activeTab === 'architecture' && (
              <div className="space-y-4">
                <h4 className="font-syne font-bold text-base text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ff442b]" />
                  <span>Subsystem Architecture Breakdown</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-[#0f0f1e] border border-white/[0.06]">
                    <span className="font-mono text-xs text-amber-400 block mb-1">// CLIENT INTERFACE</span>
                    <p className="font-sans text-xs sm:text-sm text-slate-200">{project.architecture.frontend}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f1e] border border-white/[0.06]">
                    <span className="font-mono text-xs text-[#ff442b] block mb-1">// BACKEND SERVICE LAYER</span>
                    <p className="font-sans text-xs sm:text-sm text-slate-200">{project.architecture.backend}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f0f1e] border border-white/[0.06]">
                    <span className="font-mono text-xs text-[#ff7700] block mb-1">// DATA PERSISTENCE</span>
                    <p className="font-sans text-xs sm:text-sm text-slate-200">{project.architecture.database}</p>
                  </div>

                  {project.architecture.aiMl && (
                    <div className="p-4 rounded-xl bg-[#0f0f1e] border border-white/[0.06]">
                      <span className="font-mono text-xs text-emerald-400 block mb-1">// AI / ML PIPELINE</span>
                      <p className="font-sans text-xs sm:text-sm text-slate-200">{project.architecture.aiMl}</p>
                    </div>
                  )}

                  <div className="p-4 rounded-xl bg-[#0f0f1e] border border-white/[0.06] sm:col-span-2">
                    <span className="font-mono text-xs text-indigo-400 block mb-1">// RUNTIME & INTEGRITY</span>
                    <p className="font-sans text-xs sm:text-sm text-slate-200">{project.architecture.infrastructure}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Code Snippet */}
            {activeTab === 'code' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between px-4 py-2.5 rounded-t-xl bg-[#141426] border border-white/[0.08] font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#ff442b]" />
                    <span>{project.codeSnippet.filename}</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <pre className="p-5 rounded-b-xl bg-[#080811] border-x border-b border-white/[0.08] font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed max-h-80">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {/* Technology Chips */}
            <div>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2.5">
                Technology Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#141424] border border-white/10 font-mono text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-t border-white/[0.08] bg-[#0c0c18]">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundEngine.playHover()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-space font-semibold text-xs text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>INSPECT SOURCE CODE</span>
              </a>
            ) : (
              <span className="font-mono text-xs text-slate-500">
                // Repository link available upon request
              </span>
            )}

            <button
              onClick={() => {
                soundEngine.playClick()
                onClose()
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ff3344] to-[#ff7700] text-white font-space font-semibold text-xs shadow-md"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
