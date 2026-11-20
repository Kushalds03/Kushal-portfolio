import React, { useState } from 'react'
import { CustomCursor } from './components/ui/CustomCursor'
import { ToastContainer, ToastMessage } from './components/ui/Toast'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { TechStackSection } from './components/sections/TechStackSection'
import { CertificationsSection } from './components/sections/CertificationsSection'
import { ContactSection } from './components/sections/ContactSection'
import { Footer } from './components/layout/Footer'
import { ProjectModal } from './components/modals/ProjectModal'
import { ResumeModal } from './components/modals/ResumeModal'
import { Project } from './types/portfolio'

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString()
    setToasts((prev) => [...prev, { id, title, description, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="relative min-h-screen bg-[#050508] text-slate-200 overflow-x-hidden selection:bg-[#ff3344]/30 selection:text-white">
      {/* Custom Trailing Magnetic Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphic Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onToast={addToast}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Cinematic Intro / Hero */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 2: About Me (BEYOND THE CODE.) */}
        <AboutSection />

        {/* Section 3: Experience (Career Timeline) */}
        <ExperienceSection />

        {/* Section 4: Selected Projects Showcase */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Section 5: Tech Stack (MY DIGITAL TOOLKIT.) */}
        <TechStackSection />

        {/* Section 6: Certifications */}
        <CertificationsSection />

        {/* Section 7: Contact (LET'S BUILD SOMETHING GREAT.) */}
        <ContactSection
          onOpenResume={() => setIsResumeOpen(true)}
          onToast={addToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onToast={addToast}
      />

      {/* Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onToast={addToast}
      />

      {/* Global Toast Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  )
}

export default App
