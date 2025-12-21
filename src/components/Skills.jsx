import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'Angular', 'JavaScript/TypeScript', 'HTML/CSS', 'Responsive Design'],
    },
    {
      title: 'Backend & Languages',
      skills: ['Java', 'Node.js', 'RESTful APIs', 'Microservices'],
    },
    {
      title: 'DevOps & Infrastructure',
      skills: ['CI/CD Pipelines', 'Docker', 'Kubernetes', 'Cloud Platforms', 'Infrastructure as Code'],
    },
    {
      title: 'Security Engineering',
      skills: [
        'Secure Software Development',
        'SecOps',
        'Vulnerability Management',
        'Secure Architecture',
        'Security Monitoring & Incident Detection',
        'Secure Application and System Design',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Certified Information Systems Security Professional (CISSP)',
      issuer: 'ISC²',
      year: '2023',
      description: 'Advanced security certification covering security and risk management',
    },
    {
      name: 'AWS Certified Security - Specialty',
      issuer: 'Amazon Web Services',
      year: '2023',
      description: 'Cloud security best practices and AWS security services',
    },
    {
      name: 'Certified Secure Software Lifecycle Professional (CSSLP)',
      issuer: 'ISC²',
      year: '2022',
      description: 'Secure software development lifecycle practices',
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-bullet">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h4 className="cert-name">{cert.name}</h4>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
