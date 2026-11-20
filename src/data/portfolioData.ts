import { Project, SkillCategory, ExperienceItem, EducationItem, Certification } from '../types/portfolio'

export const PERSONAL_INFO = {
  name: 'Kushal D S',
  role: 'Full Stack Developer | AI & Generative AI Enthusiast',
  tagline: 'BUILDING DIGITAL EXPERIENCES. ENGINEERING INTELLIGENT SOLUTIONS.',
  subTagline: 'Full Stack Developer | AI Enthusiast | Computer Science Undergraduate',
  location: 'Bengaluru, India',
  email: 'kushalkush132003@gmail.com',
  phone: '+91 7204820475',
  whatsappUrl: 'https://wa.me/917204820475',
  github: 'https://github.com/Kushalds03',
  linkedin: 'https://www.linkedin.com/in/kushal-ds-586779299/',
  summary:
    'Computer Science undergraduate with hands-on experience in software development and full-stack application development. Skilled in Python, Java, SQL and RESTful API development, with project experience in machine learning, AI integration and database management.'
}

export const EDUCATION_DATA: EducationItem = {
  institution: 'BNM Institute of Technology',
  degree: 'Bachelor of Engineering',
  field: 'Computer Science and Engineering',
  period: '2023 – Present',
  cgpa: '8.76 / 10',
  location: 'Bengaluru, India',
  keySubjects: [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (Java/Python)',
    'Computer Networks & Protocols',
    'Operating Systems',
    'Software Engineering & Design Patterns',
    'Machine Learning & Artificial Intelligence'
  ],
  highlights: [
    'Consistent academic performance with an aggregate CGPA of 8.76/10.',
    'Active participant in technical symposiums, hackathons, and software engineering initiatives.',
    'Practical engineering focus on scalable systems, REST microservices, and AI integrations.'
  ]
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'unified-mentors',
    role: 'Full Stack Developer Intern',
    company: 'Unified Mentors',
    period: 'July 2025 – October 2025',
    location: 'Remote / Hybrid (India)',
    type: 'Internship',
    description:
      'Engineered and deployed dynamic full-stack web applications from concept to production. Collaborated with cross-functional software teams, integrated RESTful APIs, and optimized backend query pipelines.',
    highlights: [
      'Developed full-stack applications utilizing React.js on the frontend, Node.js & Express.js on the backend, and relational SQL for persistent storage.',
      'Constructed highly responsive, accessible, and performant user interfaces with modern CSS and modular component architectures.',
      'Designed, implemented, and consumed secure RESTful APIs with comprehensive request validation and structured error handling.',
      'Improved backend computational logic and optimized database query execution plans, resulting in faster payload delivery.',
      'Maintained disciplined version control workflows using Git and GitHub, conducting code reviews and sprint deliverable tracking.',
      'Collaborated closely with engineering peers and mentors on end-to-end software development lifecycles.'
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'SQL', 'RESTful APIs', 'Git', 'GitHub', 'Responsive Design'],
    deliverables: [
      'Enterprise component library with cross-browser responsive layouts',
      'REST API endpoints with JWT authorization guards',
      'Database schema normalization and index optimization'
    ]
  }
]

export const PROJECTS_DATA: Project[] = [
  {
    id: 'resume-analyzer',
    number: '01',
    title: 'AI-Powered Resume Analyzer & Job Match Assistant',
    category: 'AI & Machine Learning',
    tagline: 'Intelligent ATS scoring, semantic skill-gap extraction, and candidate matching powered by Gemini API.',
    description:
      'A full-stack AI-powered application that analyzes resumes, evaluates job compatibility, identifies skill gaps and provides ATS-related insights.',
    longDescription:
      'Engineered to eliminate manual resume screening friction. The system ingests resumes in PDF format, extracts structured textual data, and feeds it into Google Gemini API with custom prompt chains. It calculates a weighted compatibility score based on technical competencies, seniority levels, and domain experience, identifying exact skill deficits with clear improvement steps.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Gemini API', 'Prisma', 'SQLite'],
    features: [
      'AI Resume Analysis: Deep semantic parsing of technical summaries, experience, and project portfolios.',
      'Weighted Job Matching: Algorithmic scoring balancing primary requirements, secondary skills, and domain context.',
      'ATS Insights Engine: Real-time scan against applicant tracking system standards to maximize pass rates.',
      'Automated Skill-Gap Analysis: Direct identification of missing proficiencies with recommended learning paths.',
      'PDF Text Extraction: Resilient multi-column document parser handling diverse resume templates.',
      'Recruiter Dashboard: Centralized dashboard for sorting, filtering, and shortlisting applicants with score breakdowns.'
    ],
    contribution:
      'Architected end-to-end full-stack workflow: designed the React frontend with interactive radar charts, developed Express API microservices, integrated Gemini API for prompt-driven evaluation, and modeled the Prisma schema for persistent candidate telemetry.',
    architecture: {
      frontend: 'React.js SPA with real-time score visualization and drag-and-drop PDF dropzone',
      backend: 'Express.js microservice architecture with async queue processing',
      database: 'SQLite via Prisma ORM for rapid lightweight persistence and relations',
      aiMl: 'Google Gemini API structured JSON schema prompting with ATS heuristics',
      infrastructure: 'Node runtime with multi-part stream parsing and sanitized payload handling'
    },
    codeSnippet: {
      language: 'typescript',
      filename: 'aiMatcher.service.ts',
      code: `// Gemini API Weighted Job Match Pipeline
export async function evaluateResumeMatch(resumeText: string, jobSpec: string) {
  const prompt = \`
  Analyze the candidate resume against the target job specification.
  Calculate weighted compatibility score (0-100), identify missing critical skills,
  and evaluate ATS parseability. Return structured JSON.
  
  JOB SPEC: \${jobSpec}
  CANDIDATE RESUME: \${resumeText}
  \`;

  const response = await geminiClient.models.generateContent({
    model: 'gemini-1.5-pro',
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { responseMimeType: "application/json" }
  });

  const analysis = JSON.parse(response.text);
  return {
    compatibilityScore: analysis.score,
    skillGap: analysis.missingCompetencies,
    atsRating: analysis.atsCompatibility
  };
}`
    },
    githubUrl: 'https://github.com/Kushalds03/AI-Powered-Resume-Analyzer-Job-Match-Assistant',
    liveDemoUrl: 'https://github.com/Kushalds03/AI-Powered-Resume-Analyzer-Job-Match-Assistant',
    accentColor: '#ff3a2f'
  },
  {
    id: 'womens-health-ai',
    number: '02',
    title: "Women's Health AI – Clinical Risk Prediction & Decision Support System",
    category: 'AI & Machine Learning',
    tagline: 'Multi-condition diagnostic decision support combining ensemble ML, Explainable AI (SHAP), and Computer Vision.',
    description:
      'A machine learning-based application designed for clinical risk prediction across multiple women\'s health conditions, with explainable AI and ultrasound image analysis.',
    longDescription:
      'Designed to assist medical practitioners with rapid, interpretable diagnostic decision support. Incorporates Random Forest and XGBoost classifiers optimized through hyperparameter tuning, patient phenotypic clustering with K-Means, and deep neural network ultrasound classification with EfficientNetB0. Integrates SHAP values to explain every individual prediction for total clinical transparency.',
    stack: ['Python', 'Streamlit', 'Random Forest', 'XGBoost', 'SHAP', 'K-Means', 'EfficientNetB0'],
    features: [
      'Multi-Condition Diagnostic Engine: Real-time risk forecasting across 8 distinct clinical scenarios.',
      'Ensemble Machine Learning: Dual Random Forest and XGBoost classification with soft-voting consensus.',
      'Explainable AI (SHAP): Interactive waterfall and bee-swarm visual plots explaining risk factors per patient.',
      'Ultrasound Image Analysis: Pre-trained EfficientNetB0 transfer learning model for medical imaging feature detection.',
      'Patient Cohort Clustering: K-Means segmentation profiling patients into nuanced risk strata for proactive care.',
      'Interactive Streamlit Interface: Doctor-friendly clinical cockpit with instant parameter tuning and report export.'
    ],
    contribution:
      'Engineered data preprocessing pipelines, trained and validated ML models on clinical datasets, tuned hyperparameters, integrated SHAP explainability matrices, and developed the interactive Streamlit clinical dashboard.',
    architecture: {
      frontend: 'Streamlit interactive web dashboard with dynamic data visualizations and risk gauges',
      backend: 'Python scientific computing stack (NumPy, Pandas, Scikit-learn, PyTorch/TensorFlow)',
      database: 'In-memory clinical cache with anonymized patient evaluation logging',
      aiMl: 'XGBoost + Random Forest ensemble + EfficientNetB0 vision backbone + SHAP kernel',
      infrastructure: 'Modular Python architecture with automated test splits and ROC-AUC validation'
    },
    codeSnippet: {
      language: 'python',
      filename: 'clinical_engine.py',
      code: `# Ensemble Clinical Prediction & Explainable AI Pipeline
import shap
import xgboost as xgb
from sklearn.ensemble import RandomForestClassifier

class ClinicalRiskPredictor:
    def __init__(self, xgb_model, rf_model):
        self.xgb = xgb_model
        self.rf = rf_model
        self.explainer = shap.TreeExplainer(self.xgb)

    def predict_risk(self, patient_biomarkers):
        p_xgb = self.xgb.predict_proba(patient_biomarkers)[:, 1]
        p_rf = self.rf.predict_proba(patient_biomarkers)[:, 1]
        ensemble_score = (0.6 * p_xgb) + (0.4 * p_rf)
        
        shap_values = self.explainer.shap_values(patient_biomarkers)
        return {
            "risk_score": float(ensemble_score[0]),
            "shap_attributions": shap_values[0].tolist(),
            "status": "High Risk" if ensemble_score[0] > 0.65 else "Moderate"
        }`
    },
    githubUrl: undefined, // Pending link from user
    liveDemoUrl: undefined,
    accentColor: '#ff6200'
  },
  {
    id: 'teamflow',
    number: '03',
    title: 'TeamFlow – Project Management & Collaboration Platform',
    category: 'Full Stack Web',
    tagline: 'High-performance team workspace featuring granular RBAC, sprint workflows, and real-time project analytics.',
    description:
      'A full-stack project management and collaboration platform featuring secure authentication, role-based access control, project management, task tracking and dashboard analytics.',
    longDescription:
      'Engineered with modern full-stack web standards to solve team synchronization bottlenecks. Features JWT session handling with refresh token rotation, strict Role-Based Access Control (Admin, Team Lead, Developer, Viewer), interactive Kanban boards, and dynamic status telemetry backed by PostgreSQL and Prisma ORM.',
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'],
    features: [
      'Robust Authentication & RBAC: Multi-tier permission model restricting sensitive actions to authorized roles.',
      'Sprint & Task Management: Drag-and-drop boards, priority matrix, custom labels, and due-date tracking.',
      'Dashboard Analytics: Real-time velocity charts, workload distribution, and bottleneck indicators.',
      'Task Status Telemetry: Instant status transitions with audit logs recording every state change.',
      'REST API Ecosystem: Fully documented endpoints supporting pagination, filtering, and transaction safety.',
      'Clean Component Architecture: Reusable React component library with responsive mobile-first layouts.'
    ],
    contribution:
      'Designed PostgreSQL relational schemas with Prisma migrations, implemented secure JWT auth middlewares, wrote modular REST controllers with Prisma transactions, and crafted the responsive React frontend.',
    architecture: {
      frontend: 'React.js with custom hooks, responsive component hierarchy, and optimistic UI updates',
      backend: 'Express.js modular MVC architecture with centralized error handling',
      database: 'PostgreSQL with relational foreign keys, indexes, and Prisma type safety',
      aiMl: 'Telemetry-based workload forecasting and task duration estimation heuristics',
      infrastructure: 'Modular Node.js service architecture with automated database seeding and Prisma migration engine'
    },
    codeSnippet: {
      language: 'typescript',
      filename: 'taskController.ts',
      code: `// Role-Based Task Status Transition Controller
import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function updateTaskStatus(req: Request, res: Response) {
  const { taskId } = req.params;
  const { status, resolutionNotes } = req.body;
  const user = req.user; // Verified by JWT RBAC middleware

  const updatedTask = await prisma.$transaction(async (tx) => {
    const task = await tx.task.update({
      where: { id: taskId },
      data: { status, updatedAt: new Date() },
      include: { project: true, assignee: true }
    });

    await tx.auditLog.create({
      data: {
        taskId,
        actorId: user.id,
        action: \`STATUS_CHANGED_TO_\${status}\`,
        notes: resolutionNotes
      }
    });

    return task;
  });

  return res.status(200).json({ success: true, task: updatedTask });
}`
    },
    githubUrl: 'https://github.com/Kushalds03/Teamflow-project-management',
    liveDemoUrl: 'https://github.com/Kushalds03/Teamflow-project-management',
    accentColor: '#ff9000'
  }
]

export const TECH_STACK_DATA: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages utilized for software logic, object-oriented systems, and relational queries.',
    skills: [
      { name: 'Java', tags: ['Object-Oriented Programming', 'Multithreading', 'Data Structures'] },
      { name: 'JavaScript', tags: ['ES6+', 'Async / Await', 'DOM APIs'] },
      { name: 'SQL', tags: ['Relational Queries', 'Joins', 'Schema Design'] },
      { name: 'Python (Basics)', tags: ['Scripting & Automation', 'Core Syntax', 'Foundational Logic'] }
    ]
  },
  {
    category: 'Frontend Development',
    description: 'Building responsive, accessible, and structured client-side user interfaces.',
    skills: [
      { name: 'React.js', tags: ['Component Architecture', 'Hooks & State', 'Context API'] },
      { name: 'HTML', tags: ['Semantic Web', 'Document Structure', 'Accessibility'] },
      { name: 'CSS', tags: ['Responsive Styling', 'Flexbox & CSS Grid', 'Custom Layouts'] }
    ]
  },
  {
    category: 'Backend Development',
    description: 'Scalable server-side architectures, RESTful APIs, and controller business logic.',
    skills: [
      { name: 'Node.js', tags: ['Event Loop', 'Server Runtime', 'NPM Modules'] },
      { name: 'Express.js', tags: ['Middleware Pipelines', 'Routing', 'REST Services'] },
      { name: 'RESTful APIs', tags: ['HTTP Standards', 'JSON Serialization', 'Endpoints'] }
    ]
  },
  {
    category: 'Databases',
    description: 'Relational and document persistence, table normalization, and query performance.',
    skills: [
      { name: 'MySQL', tags: ['Relational Schemas', 'ACID Transactions', 'Indexing'] },
      { name: 'MongoDB', tags: ['Document Store', 'Collections', 'Aggregation'] },
      { name: 'PostgreSQL', tags: ['Relational Integrity', 'Indexes', 'Constraints'] },
      { name: 'SQLite', tags: ['Embedded Storage', 'Lightweight Relational Engine'] }
    ]
  },
  {
    category: 'Tools & Technologies',
    description: 'Disciplined version control, automated workflow design, and type-safe ORM data modeling.',
    skills: [
      { name: 'Git', tags: ['Version Control', 'Branching Models', 'Commit History'] },
      { name: 'GitHub', tags: ['Remote Repositories', 'Code Reviews', 'Collaboration'] },
      { name: 'Prisma', tags: ['Type-safe ORM', 'Schema Migrations', 'Relational Client'] },
      { name: 'UiPath', tags: ['RPA Automation', 'Workflow Orchestration'] }
    ]
  },
  {
    category: 'Core Subjects',
    description: 'Foundational computer science principles, database modeling, and software architectures.',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', tags: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'] },
      { name: 'DBMS', tags: ['Relational Architecture', 'Normalization', 'ER Modeling', 'Transaction Management'] }
    ]
  }
]

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'sigma-prime',
    title: 'Sigma Prime Certification – Full Stack Development',
    issuer: 'Apna College (2026)',
    badge: 'Apna College Verified',
    date: '2026',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL'],
    description:
      'Rigorous industry-aligned full-stack engineering certification covering frontend component lifecycles, backend RESTful design, relational & document databases, and scalable web architectures.',
    verified: true
  },
  {
    id: 'unified-mentors-cert',
    title: 'Full Stack Development Internship Certificate',
    issuer: 'Unified Mentors',
    badge: 'Industry Experience',
    date: 'October 2025',
    skills: ['React.js', 'Node.js', 'REST APIs', 'SQL Database Operations', 'Git/GitHub Collaboration'],
    description:
      'Formal credential awarded upon successful completion of the Full Stack Developer Internship, recognizing hands-on application development, UI responsiveness, and backend logic improvements.',
    verified: true
  },
  {
    id: 'java-knowledgegate',
    title: 'Java Programming Course Certification',
    issuer: 'KnowledgeGate',
    badge: 'Core Engineering',
    date: '2024',
    skills: ['Java Core', 'Object-Oriented Programming (OOP)', 'Data Structures', 'Multithreading'],
    description:
      'In-depth software engineering certification validating mastery in core Java programming, object-oriented principles, exception handling, data collections, and algorithmic problem-solving.',
    verified: true
  }
]
