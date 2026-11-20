import React, { useState, useEffect } from 'react'
import { ArrowUp, Mail, Phone, Terminal, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { PERSONAL_INFO } from '../../data/portfolioData'
import { soundEngine } from '../../utils/audio'

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Bengaluru is UTC+5:30
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setCurrentTime(istTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    soundEngine.playClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#040407] border-t border-white/[0.08] pt-16 pb-12 px-4 sm:px-8 text-slate-400 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          {/* Logo & Coordinates */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-syne font-extrabold text-2xl text-white tracking-wider">
                KUSHAL <span className="text-gradient-flame">D S</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#ff3344]/15 border border-[#ff3344]/30 font-mono text-[10px] text-[#ff442b]">
                SYSTEM V1.0
              </span>
            </div>
            <p className="font-mono text-xs text-slate-500">
              BUILDING DIGITAL EXPERIENCES. ENGINEERING INTELLIGENT SOLUTIONS.
            </p>
          </div>

          {/* Bengaluru Local Time Telemetry */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="px-4 py-2 rounded-xl bg-[#0c0c16] border border-white/10 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-400">BENGALURU, IN:</span>
              <span className="text-white font-semibold">{currentTime} IST</span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#0c0c16] border border-white/10 text-slate-400">
              <span>LAT: 12.9716° N | LONG: 77.5946° E</span>
            </div>
          </div>
        </div>

        {/* Middle Tier: Links & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-xs font-space font-medium text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">Intro</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-white transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundEngine.playHover()}
            data-cursor="TOP"
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111120] border border-white/10 hover:border-[#ff442b]/60 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-md"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform text-[#ff442b]">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Bottom Tier: Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.04] text-[11px] font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} Kushal D S. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Designed & Engineered for High Performance</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
