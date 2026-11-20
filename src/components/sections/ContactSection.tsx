import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Copy, Check, FileText, ArrowUpRight, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { PERSONAL_INFO } from '../../data/portfolioData'
import { soundEngine } from '../../utils/audio'
import { downloadResume } from '../../utils/resumeGenerator'

interface ContactSectionProps {
  onOpenResume: () => void
  onToast: (title: string, description?: string) => void
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume, onToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleCopyEmail = () => {
    soundEngine.playSuccess()
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopiedEmail(true)
    onToast('Email Copied', `${PERSONAL_INFO.email} copied to clipboard`)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleCopyPhone = () => {
    soundEngine.playSuccess()
    navigator.clipboard.writeText(PERSONAL_INFO.phone)
    setCopiedPhone(true)
    onToast('Phone Number Copied', `${PERSONAL_INFO.phone} copied to clipboard`)
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      onToast('Incomplete Form', 'Please fill in your name, email, and message')
      return
    }

    soundEngine.playSuccess()
    setIsSubmitting(true)

    // Build pre-filled mailto URI
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name} via Portfolio`)
    const body = encodeURIComponent(
      `Hi Kushal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSent(true)
      onToast('Message Prepared', 'Opening your email client to send message')
      window.open(mailtoUrl, '_blank')
    }, 800)
  }

  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-8 bg-[#050508] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#ff3344]/8 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#ff442b] uppercase tracking-widest mb-3">
            <span className="w-6 h-[1.5px] bg-[#ff442b]" />
            <span>07 // TRANSMISSION GATEWAY</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            LET'S BUILD SOMETHING <span className="text-gradient-flame">GREAT.</span>
          </h2>
          <p className="font-space text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Available for full-stack engineering roles, AI product development, and innovative software initiatives. Reach out directly or dispatch a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Telemetry & Resume Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Channel Cards */}
            <div className="rounded-3xl bg-[#0c0c16]/90 border border-white/[0.08] p-6 sm:p-8 space-y-5 shadow-2xl">
              <h3 className="font-syne font-bold text-xl text-white mb-2">
                Direct Communication Channels
              </h3>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#11111f] border border-white/[0.06] flex items-center justify-between group hover:border-[#ff3344]/40 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#ff3344]/15 border border-[#ff3344]/30 flex items-center justify-center text-[#ff3344] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-space font-medium text-xs sm:text-sm text-white hover:text-[#ff442b] truncate block transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => soundEngine.playHover()}
                  data-cursor="COPY"
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-[#11111f] border border-white/[0.06] flex items-center justify-between group hover:border-[#ff7700]/40 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#ff7700]/15 border border-[#ff7700]/30 flex items-center justify-center text-[#ff7700] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      PHONE CONTACT
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-space font-medium text-xs sm:text-sm text-white hover:text-[#ff7700] truncate block transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  onMouseEnter={() => soundEngine.playHover()}
                  data-cursor="COPY"
                  title="Copy phone to clipboard"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Coordinates */}
              <div className="p-4 rounded-2xl bg-[#11111f] border border-white/[0.06] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                    LOCATION & TIMEZONE
                  </span>
                  <p className="font-space font-medium text-xs sm:text-sm text-white">
                    {PERSONAL_INFO.location} • IST (UTC+5:30)
                  </p>
                  <p className="font-mono text-[10px] text-slate-400">
                    LAT/LONG: {PERSONAL_INFO.coordinates}
                  </p>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundEngine.playHover()}
                  data-cursor="GITHUB"
                  className="p-3 rounded-xl bg-[#131322] border border-white/10 hover:border-[#ff442b]/60 flex items-center justify-between text-xs font-space font-medium text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundEngine.playHover()}
                  data-cursor="LINKEDIN"
                  className="p-3 rounded-xl bg-[#131322] border border-white/10 hover:border-[#ff442b]/60 flex items-center justify-between text-xs font-space font-medium text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Offline Resume Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#121220] to-[#0c0c16] border border-[#ff3344]/30 p-6 sm:p-7 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#ff3344]/20 text-[#ff442b]">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-syne font-bold text-lg text-white">
                  Official Technical Resume
                </h4>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                Download Kushal's formatted, ATS-compliant CV featuring verified project metrics, education (8.76 CGPA), internship, and skills.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    downloadResume()
                    onToast('Resume Download Triggered', 'Print or save Kushal D S Resume as PDF')
                  }}
                  onMouseEnter={() => soundEngine.playHover()}
                  data-cursor="DOWNLOAD"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff3344] to-[#ff7700] text-white font-space font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(255,51,68,0.35)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DOWNLOAD (PDF)</span>
                </button>

                <button
                  onClick={() => {
                    soundEngine.playClick()
                    onOpenResume()
                  }}
                  onMouseEnter={() => soundEngine.playHover()}
                  data-cursor="PREVIEW"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-space font-semibold text-xs transition-colors text-center"
                >
                  PREVIEW ON SCREEN
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Dispatcher Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-[#0c0c16]/90 border border-white/[0.08] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              <h3 className="font-syne font-bold text-2xl text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-400 mb-8">
                Have an inquiry or project proposal? Fill out the parameters below to initiate contact.
              </p>

              {isSent ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-syne font-bold text-2xl text-white mb-2">
                    Transmission Dispatched
                  </h4>
                  <p className="font-sans text-sm text-slate-300 max-w-md mb-6">
                    Thank you, {formData.name}. Your message has been prepared and opened in your email client for sending directly to Kushal D S.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-space text-xs font-semibold text-white transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="font-mono text-xs text-slate-300 uppercase tracking-wider block mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#111120] border border-white/10 focus:border-[#ff442b] focus:outline-none text-sm text-white placeholder-slate-500 font-sans transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-mono text-xs text-slate-300 uppercase tracking-wider block mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#111120] border border-white/10 focus:border-[#ff442b] focus:outline-none text-sm text-white placeholder-slate-500 font-sans transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="font-mono text-xs text-slate-300 uppercase tracking-wider block mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Developer Opportunity / AI Project"
                      className="w-full px-4 py-3 rounded-xl bg-[#111120] border border-white/10 focus:border-[#ff442b] focus:outline-none text-sm text-white placeholder-slate-500 font-sans transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono text-xs text-slate-300 uppercase tracking-wider block mb-2">
                      MESSAGE CONTENT *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your role requirements, team details, or project scope..."
                      className="w-full px-4 py-3 rounded-xl bg-[#111120] border border-white/10 focus:border-[#ff442b] focus:outline-none text-sm text-white placeholder-slate-500 font-sans transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => soundEngine.playHover()}
                    data-cursor="SEND"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff3344] via-[#ff5722] to-[#ff8800] text-white font-space font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,51,68,0.4)] hover:shadow-[0_0_40px_rgba(255,51,68,0.6)] transition-all flex items-center justify-center gap-2.5 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'DISPATCHING TRANSMISSION...' : 'DISPATCH MESSAGE'}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
