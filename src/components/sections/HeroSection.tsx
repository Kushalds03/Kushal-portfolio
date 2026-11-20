import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileText, Sparkles, Terminal, ChevronRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { PERSONAL_INFO } from '../../data/portfolioData'
import { HeroScene } from '../3d/HeroScene'
import { soundEngine } from '../../utils/audio'

interface HeroSectionProps {
  onOpenResume: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const handleScrollToProjects = () => {
    soundEngine.playClick()
    const target = document.querySelector('#projects')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-4 sm:px-8 overflow-hidden bg-[#050508]"
    >
      {/* 3D WebGL Canvas Layer */}
      <HeroScene />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#ff3344]/15 via-[#ff7700]/5 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute top-3/4 right-10 w-[450px] h-[450px] bg-radial from-[#ff5500]/10 via-transparent to-transparent blur-3xl pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 flex flex-col items-start">
        {/* Top Telemetry Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0e0e18]/80 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3344] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3344]" />
          </span>
          <span className="font-mono text-xs text-slate-300 tracking-wider uppercase">
            {PERSONAL_INFO.location}
          </span>
          <span className="text-white/20">|</span>
          <span className="font-mono text-[11px] text-[#ff7700]">
            {PERSONAL_INFO.coordinates}
          </span>
        </motion.div>

        {/* Dramatic Name Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-4"
        >
          <div className="font-mono text-xs tracking-widest text-[#ff442b] uppercase mb-1 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>PORTFOLIO SYSTEM // INITIALIZED</span>
          </div>
          <h1 className="font-syne font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] text-white">
            KUSHAL <span className="text-gradient-flame">D S</span>
          </h1>
        </motion.div>

        {/* Oversized Editorial Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mb-6"
        >
          <h2 className="font-space font-bold text-2xl sm:text-4xl md:text-5xl text-slate-100 tracking-tight leading-tight">
            “BUILDING DIGITAL EXPERIENCES.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff442b] via-[#ff7700] to-amber-300">
              ENGINEERING INTELLIGENT SOLUTIONS.
            </span>”
          </h2>
        </motion.div>

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-sans text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl mb-10 flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
          <span>{PERSONAL_INFO.subTagline}</span>
        </motion.p>

        {/* Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center gap-4 sm:gap-5"
        >
          {/* View My Work Button */}
          <button
            onClick={handleScrollToProjects}
            onMouseEnter={() => soundEngine.playHover()}
            data-cursor="EXPLORE"
            className="group relative px-7 py-3.5 rounded-full font-space font-bold text-sm text-white overflow-hidden bg-gradient-to-r from-[#ff3344] via-[#ff5722] to-[#ff8800] shadow-[0_0_30px_rgba(255,51,68,0.35)] hover:shadow-[0_0_45px_rgba(255,51,68,0.6)] transition-all flex items-center gap-2.5 active:scale-95"
          >
            <span>VIEW SELECTED WORK</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Download Resume Button */}
          <button
            onClick={() => {
              soundEngine.playClick()
              onOpenResume()
            }}
            onMouseEnter={() => soundEngine.playHover()}
            data-cursor="RESUME"
            className="group px-6 py-3.5 rounded-full font-space font-semibold text-sm text-slate-200 bg-[#10101b] border border-white/15 hover:border-[#ff442b]/80 hover:text-white transition-all flex items-center gap-2.5 shadow-lg active:scale-95"
          >
            <FileText className="w-4 h-4 text-amber-400 group-hover:text-[#ff442b] transition-colors" />
            <span>DOWNLOAD RESUME</span>
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-2.5 sm:ml-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundEngine.playHover()}
              data-cursor="GITHUB"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-full bg-[#10101b] border border-white/10 hover:border-[#ff442b]/60 text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundEngine.playHover()}
              data-cursor="LINKEDIN"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-full bg-[#10101b] border border-white/10 hover:border-[#ff442b]/60 text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Telemetry Ticker & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Real Metrics Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto">
          {PERSONAL_INFO.stats.map((st) => (
            <div key={st.label} className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
                  {st.value}
                </span>
                <span className="font-mono text-sm text-[#ff442b] font-bold">
                  {st.suffix}
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollToProjects}
          onMouseEnter={() => soundEngine.playHover()}
          data-cursor="SCROLL"
          className="hidden md:flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500 group-hover:text-[#ff442b] transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#ff442b]/50 flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#ff442b]" />
          </div>
        </button>
      </motion.div>
    </section>
  )
}
