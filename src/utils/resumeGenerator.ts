import confetti from 'canvas-confetti'
import { soundEngine } from './audio'

export function downloadResume() {
  soundEngine.playSuccess()

  // Trigger celebratory confetti with crimson and amber embers
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.8 },
    colors: ['#ff3344', '#ff7700', '#ffaa33', '#ffffff']
  })

  const printContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kushal D S - Full Stack & AI Developer Resume</title>
  <style>
    @page { margin: 15mm 20mm; size: A4; }
    body {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      color: #1a1a1a;
      line-height: 1.45;
      font-size: 10.5pt;
      margin: 0;
      padding: 20px;
    }
    h1 {
      margin: 0 0 4px 0;
      font-size: 22pt;
      letter-spacing: -0.5px;
      color: #0f172a;
      text-transform: uppercase;
    }
    .subtitle {
      font-size: 11pt;
      font-weight: 600;
      color: #dc2626;
      margin-bottom: 6px;
    }
    .contact-bar {
      font-size: 9pt;
      color: #475569;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 10px;
      margin-bottom: 14px;
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
    }
    .contact-bar span {
      display: inline-flex;
      align-items: center;
    }
    h2 {
      font-size: 12pt;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
      margin: 14px 0 8px 0;
    }
    .section {
      margin-bottom: 12px;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      color: #0f172a;
      margin-bottom: 2px;
    }
    .job-sub {
      display: flex;
      justify-content: space-between;
      color: #64748b;
      font-size: 9.5pt;
      font-style: italic;
      margin-bottom: 6px;
    }
    ul {
      margin: 4px 0 8px 18px;
      padding: 0;
    }
    li {
      margin-bottom: 3px;
      color: #334155;
    }
    .skill-group {
      margin-bottom: 4px;
      font-size: 9.5pt;
    }
    .skill-title {
      font-weight: bold;
      color: #1e293b;
    }
  </style>
</head>
<body>
  <h1>KUSHAL D S</h1>
  <div class="subtitle">Full Stack Developer | AI & Generative AI Enthusiast</div>
  <div class="contact-bar">
    <span>📍 Bengaluru, India</span>
    <span>✉️ kushalkush132003@gmail.com</span>
    <span>📞 +91 7204820475</span>
    <span>💬 WhatsApp: +91 7204820475</span>
    <span>💻 github.com/Kushalds03</span>
    <span>🔗 linkedin.com/in/kushal-ds</span>
  </div>

  <div class="section">
    <h2>Professional Summary</h2>
    <p style="margin: 0; color: #334155;">
      Computer Science undergraduate with hands-on experience in software development and full-stack application development. Skilled in Python, Java, SQL and RESTful API development, with project experience in machine learning, AI integration and database management. Proven record of delivering resilient web applications, intelligent automation, and clinical predictive modeling systems.
    </p>
  </div>

  <div class="section">
    <h2>Education</h2>
    <div class="job-header">
      <span>BNM Institute of Technology</span>
      <span>2023 – Present</span>
    </div>
    <div class="job-sub">
      <span>Bachelor of Engineering in Computer Science and Engineering</span>
      <span>CGPA: 8.76 / 10 | Bengaluru, India</span>
    </div>
    <p style="margin: 0; font-size: 9.5pt; color: #475569;">
      <strong>Relevant Coursework:</strong> Data Structures & Algorithms, DBMS, Object-Oriented Programming (Java/Python), Computer Networks, Operating Systems, Machine Learning & AI.
    </p>
  </div>

  <div class="section">
    <h2>Professional Experience</h2>
    <div class="job-header">
      <span>Unified Mentors</span>
      <span>July 2025 – October 2025</span>
    </div>
    <div class="job-sub">
      <span>Full Stack Developer Intern</span>
      <span>Remote / Hybrid</span>
    </div>
    <ul>
      <li>Developed responsive, full-stack applications using React.js, Node.js, and SQL databases.</li>
      <li>Architected and integrated robust RESTful APIs with comprehensive request validation and error serialization.</li>
      <li>Improved backend computational logic and optimized SQL database queries, enhancing data retrieval speed.</li>
      <li>Engineered accessible, pixel-perfect user interfaces with responsive component hierarchies.</li>
      <li>Maintained continuous version control workflows utilizing Git and GitHub for collaborative branch reviews.</li>
    </ul>
  </div>

  <div class="section">
    <h2>Selected Projects</h2>
    
    <div class="job-header">
      <span>AI-Powered Resume Analyzer & Job Match Assistant</span>
      <span>React.js, Node.js, Express.js, Gemini API, Prisma, SQLite</span>
    </div>
    <ul>
      <li>Engineered an AI-driven recruitment engine that parses PDF resumes and evaluates alignment against job specifications.</li>
      <li>Integrated Google Gemini API with structured schema prompts for deep semantic skill-gap extraction and ATS scoring insights.</li>
      <li>Streamlined candidate-job matching evaluation and automated resume screening feedback workflows.</li>
    </ul>

    <div class="job-header">
      <span>Women's Health AI – Clinical Risk Prediction & Decision Support System</span>
      <span>Python, Streamlit, Random Forest, XGBoost, SHAP, EfficientNetB0</span>
    </div>
    <ul>
      <li>Built a multi-condition clinical risk prediction engine spanning 8 distinct women's health conditions.</li>
      <li>Trained ensemble classifiers (Random Forest & XGBoost) for diagnostic decision support across clinical biomarker datasets.</li>
      <li>Integrated Explainable AI using SHAP for patient-level feature attribution to ensure complete clinician trust and transparency.</li>
      <li>Incorporated EfficientNetB0 transfer learning for ultrasound imaging analysis and K-Means for patient risk clustering.</li>
    </ul>

    <div class="job-header">
      <span>TeamFlow – Project Management & Collaboration Platform</span>
      <span>React.js, Node.js, Express.js, PostgreSQL, Prisma</span>
    </div>
    <ul>
      <li>Constructed a collaborative project workspace featuring JWT authentication and granular Role-Based Access Control (RBAC).</li>
      <li>Engineered REST APIs and dashboard analytics for sprint tracking, Kanban boards, and task status monitoring.</li>
      <li>Optimized relational database queries via Prisma ORM for seamless team project synchronization.</li>
    </ul>
  </div>

  <div class="section">
    <h2>Technical Skills</h2>
    <div class="skill-group"><span class="skill-title">Programming Languages:</span> Python, Java, JavaScript (ES6+), SQL</div>
    <div class="skill-group"><span class="skill-title">Frontend Development:</span> React.js, HTML5, CSS3, Tailwind CSS, Responsive Design</div>
    <div class="skill-group"><span class="skill-title">Backend Engineering:</span> Node.js, Express.js, RESTful API Development, Middleware</div>
    <div class="skill-group"><span class="skill-title">Databases & Persistence:</span> MySQL, PostgreSQL, SQLite, MongoDB</div>
    <div class="skill-group"><span class="skill-title">Tools & DevOps:</span> Git, GitHub, Docker, Prisma ORM, UiPath</div>
    <div class="skill-group"><span class="skill-title">AI & Machine Learning:</span> Google Gemini API, Machine Learning, Random Forest, XGBoost, SHAP</div>
  </div>

  <div class="section">
    <h2>Certifications</h2>
    <ul>
      <li><strong>Sigma Prime Certification – Full Stack Development:</strong> Apna College (React.js, Node.js, Express, SQL)</li>
      <li><strong>Full Stack Development Internship Certificate:</strong> Unified Mentors (Industry verified)</li>
      <li><strong>Java Programming Course:</strong> KnowledgeGate (Object-Oriented Programming & Data Structures)</li>
    </ul>
  </div>
</body>
</html>
  `

  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write(printContent)
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => {
      printWindow.print()
    }, 500)
  } else {
    // Fallback: create blob download
    const blob = new Blob([printContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Kushal_D_S_Resume.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}
