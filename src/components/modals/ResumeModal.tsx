import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Printer, CheckCircle2, MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS_DATA, TECH_STACK_DATA, CERTIFICATIONS_DATA } from '../../data/portfolioData'
import { soundEngine } from '../../utils/audio'
import { downloadResume } from '../../utils/resumeGenerator'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  onToast: (title: string, description?: string) => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onToast }) => {
  if (!isOpen) return null

  const handleDownload = () => {
    downloadResume()
    onToast('Resume Triggered', 'Opening print / PDF download dialog')
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0d0d18] border border-white/20 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 my-6 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#111122] border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#ff3344]/20 border border-[#ff3344]/40 text-[#ff442b] font-bold">
                DOCUMENT // ATS-OPTIMIZED
              </span>
              <span className="font-syne font-bold text-sm text-white hidden sm:inline">
                Kushal D S — Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                onMouseEnter={() => soundEngine.playHover()}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff3344] to-[#ff7700] text-white font-space font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>SAVE AS PDF</span>
              </button>

              <button
                onClick={() => {
                  soundEngine.playClick()
                  onClose()
                }}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Styled Document View */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-7 bg-[#ffffff] text-[#0f172a] font-sans rounded-b-3xl">
            {/* Header */}
            <div className="border-b pb-4">
              <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0f172a] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-space font-bold text-sm sm:text-base text-[#dc2626] mt-0.5">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
                <span>📍 {PERSONAL_INFO.location}</span>
                <span>✉️ {PERSONAL_INFO.email}</span>
                <span>📞 {PERSONAL_INFO.phone}</span>
                <span>💻 github.com/Kushalds03</span>
                <span>🔗 linkedin.com/in/kushal-ds</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="font-syne font-bold text-sm uppercase tracking-wider text-[#0f172a] border-b pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-syne font-bold text-sm uppercase tracking-wider text-[#0f172a] border-b pb-1 mb-2">
                Education
              </h2>
              <div className="flex justify-between font-bold text-xs sm:text-sm text-slate-900">
                <span>{EDUCATION_DATA.institution}</span>
                <span>{EDUCATION_DATA.period}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600 italic mb-1.5">
                <span>{EDUCATION_DATA.degree} in {EDUCATION_DATA.field}</span>
                <span className="font-semibold text-slate-800">CGPA: {EDUCATION_DATA.cgpa}</span>
              </div>
              <p className="text-xs text-slate-600">
                <strong>Key Coursework:</strong> Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning & AI.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-syne font-bold text-sm uppercase tracking-wider text-[#0f172a] border-b pb-1 mb-2">
                Professional Experience
              </h2>
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between font-bold text-xs sm:text-sm text-slate-900">
                    <span>{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 italic mb-2">
                    <span>{exp.role}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <h2 className="font-syne font-bold text-sm uppercase tracking-wider text-[#0f172a] border-b pb-1 mb-2">
                Selected Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex justify-between font-bold text-xs sm:text-sm text-slate-900">
                      <span>{proj.title}</span>
                      <span className="text-[11px] font-mono font-normal text-slate-500">{proj.stack.slice(0, 4).join(', ')}</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1 space-y-0.5 text-xs text-slate-700">
                      <li>{proj.tagline}</li>
                      <li><strong>Key Metrics:</strong> {proj.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}</li>
                      <li><strong>Contribution:</strong> {proj.contribution}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-syne font-bold text-sm uppercase tracking-wider text-[#0f172a] border-b pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs text-slate-700">
                {TECH_STACK_DATA.map((cat) => (
                  <div key={cat.category}>
                    <strong className="text-slate-900">{cat.category}: </strong>
                    <span>{cat.skills.map((s) => s.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="font-syne font-bold text-sm uppercase tracking-wider text-[#0f172a] border-b pb-1 mb-2">
                Certifications
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
                {CERTIFICATIONS_DATA.map((c) => (
                  <li key={c.id}>
                    <strong>{c.title}</strong> – {c.issuer} ({c.date})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
