import React from 'react'
import { motion } from 'framer-motion'
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Calendar } from 'lucide-react'
import { CERTIFICATIONS_DATA } from '../../data/portfolioData'
import { soundEngine } from '../../utils/audio'

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative py-28 px-4 sm:px-8 bg-[#07070c] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#ff3344]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#ff442b] uppercase tracking-widest mb-3">
            <span className="w-6 h-[1.5px] bg-[#ff442b]" />
            <span>06 // VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            INDUSTRY <span className="text-gradient-flame">CERTIFICATIONS.</span>
          </h2>
          <p className="font-space text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Formal technical credentials validating proficiency across full-stack systems, core Java paradigms, and industry software development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => soundEngine.playHover()}
              className="rounded-3xl bg-[#0c0c16]/90 border border-white/[0.08] hover:border-[#ff442b]/40 transition-all p-7 sm:p-8 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              {/* Corner Watermark */}
              <div className="absolute -top-6 -right-6 text-white/[0.02] group-hover:text-[#ff3344]/5 transition-colors pointer-events-none">
                <Award className="w-40 h-40" />
              </div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-[#ff3344]/15 to-[#ff7700]/10 border border-[#ff3344]/30 text-[#ff442b]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest mb-1.5">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="font-syne font-bold text-xl sm:text-2xl text-white mb-3 leading-snug group-hover:text-slate-100 transition-colors">
                  {cert.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Skills Footer */}
              <div className="pt-5 border-t border-white/[0.08]">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-2">
                  Competencies Assessed:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-1 rounded-md bg-[#131322] border border-white/[0.06] text-[11px] font-mono text-slate-200"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
