export interface Project {
  id: string
  number: string
  title: string
  category: 'AI & Machine Learning' | 'Full Stack Web'
  tagline: string
  description: string
  longDescription: string
  stack: string[]
  metrics: {
    label: string
    value: string
    subtext: string
  }[]
  features: string[]
  contribution: string
  architecture: {
    frontend: string
    backend: string
    database: string
    aiMl?: string
    infrastructure: string
  }
  codeSnippet: {
    language: string
    filename: string
    code: string
  }
  githubUrl: string
  liveDemoUrl?: string
  accentColor: string
}

export interface SkillCategory {
  category: string
  description: string
  skills: {
    name: string
    level: number // 1 - 100
    experience: string
    tags: string[]
    iconName?: string
  }[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string
  type: string
  description: string
  highlights: string[]
  skills: string[]
  deliverables: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  field: string
  period: string
  cgpa: string
  location: string
  keySubjects: string[]
  highlights: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  badge: string
  date: string
  skills: string[]
  description: string
  verified: boolean
}
