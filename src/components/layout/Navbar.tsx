import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, FileText, Menu, X, ArrowUpRight } from 'lucide-react'
import { soundEngine } from '../../utils/audio'

interface NavbarProps {
  onOpenResume: () => void
  onToast: (title: string, description?: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onToast }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact']
      const current = sections.find((sec) => {
        const el = document.getElementById(sec)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Intro', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Credentials', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ]

  const handleAudioToggle = () => {
    const muted = soundEngine.toggleMute()
    setIsMuted(muted)
    if (!muted) {
      soundEngine.startAmbient()
      soundEngine.playSuccess()
      onToast('Audio Synthesizer Active', 'Synthesized ambient atmosphere & haptic UI audio enabled')
    } else {
      soundEngine.stopAmbient()
      onToast('Audio Synthesizer Muted', 'Audio atmosphere disabled')
    }
  }

  const handleNavClick = (href: string) => {
    soundEngine.playClick()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3 ${
          isScrolled
            ? 'bg-[#06060c]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            onMouseEnter={() => soundEngine.playHover()}
            data-cursor="HOME"
            className="group flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#ff3344] to-[#ff7700] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(255,51,68,0.4)]">
              <div className="w-full h-full bg-[#090910] rounded-[7px] flex items-center justify-center font-syne font-bold text-sm text-white">
                KD
              </div>
            </div>
            <span className="font-syne font-extrabold text-base tracking-wider text-white group-hover:text-[#ff442b] transition-colors">
              KUSHAL D S
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0c0c14]/70 border border-white/[0.08] rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((item, index) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={() => soundEngine.playHover()}
                  data-cursor="GOTO"
                  className={`relative px-3.5 py-1.5 text-xs font-space font-medium tracking-wide transition-all rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#ff3344]/30 to-[#ff7700]/20 border border-[#ff442b]/50 rounded-full"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="text-[9px] font-mono opacity-50">
                      0{index + 1}
                    </span>
                    {item.name}
                  </span>
                </button>
              )
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleAudioToggle}
              onMouseEnter={() => soundEngine.playHover()}
              data-cursor={isMuted ? 'UNMUTE' : 'MUTE'}
              title={isMuted ? 'Enable Sound Design' : 'Mute Sound Design'}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#10101a] border border-white/10 hover:border-[#ff442b]/60 text-slate-300 hover:text-white transition-all flex items-center gap-2"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-400" />
              ) : (
                <div className="flex items-center gap-1.5 text-[#ff442b]">
                  <Volume2 className="w-4 h-4" />
                  <span className="hidden sm:inline-flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-[#ff3344] animate-pulse" />
                    <span className="w-0.5 h-3.5 bg-[#ff7700] animate-pulse delay-75" />
                    <span className="w-0.5 h-2.5 bg-amber-400 animate-pulse delay-150" />
                  </span>
                </div>
              )}
              <span className="text-[11px] font-mono hidden md:inline">
                {isMuted ? 'AUDIO OFF' : 'AUDIO ON'}
              </span>
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundEngine.playClick()
                onOpenResume()
              }}
              onMouseEnter={() => soundEngine.playHover()}
              data-cursor="RESUME"
              className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-space font-semibold tracking-wide text-white overflow-hidden bg-gradient-to-r from-[#ff3344] via-[#ff5722] to-[#ff8800] p-[1px] hover:shadow-[0_0_20px_rgba(255,51,68,0.4)] transition-all"
            >
              <span className="px-3 py-1 rounded-full bg-[#07070d] flex items-center gap-1.5 group-hover:bg-transparent transition-colors">
                <FileText className="w-3.5 h-3.5 text-amber-400 group-hover:text-white transition-colors" />
                <span>RESUME</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                soundEngine.playClick()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              data-cursor="MENU"
              className="lg:hidden p-2 rounded-lg bg-[#10101a] border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#06060c]/98 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-10 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="font-mono text-xs uppercase tracking-widest text-[#ff442b] mb-2">
                // System Navigation
              </div>
              {navLinks.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center justify-between py-3.5 border-b border-white/[0.06] text-left group"
                >
                  <span className="font-syne font-bold text-xl text-slate-200 group-hover:text-[#ff442b] transition-colors">
                    {item.name}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    [0{idx + 1}]
                  </span>
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>LOCATION: BENGALURU, IN</span>
                <span className="text-[#ff442b]">CGPA: 8.76 / 10</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenResume()
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff3344] to-[#ff7700] text-white font-space font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,51,68,0.3)]"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD OFFICIAL CV</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
