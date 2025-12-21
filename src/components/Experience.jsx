import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Security Engineer',
      company: 'Tech Corp Inc.',
      period: '2022 - Present',
      type: 'professional',
      responsibilities: [
        'Lead security architecture design for enterprise applications',
        'Implement DevSecOps pipelines and automated security testing',
        'Conduct security audits and vulnerability assessments',
        'Mentor junior developers on secure coding practices',
      ],
    },
    {
      title: 'Software Developer & Security Analyst',
      company: 'SecureTech Solutions',
      period: '2020 - 2022',
      type: 'professional',
      responsibilities: [
        'Developed secure web applications using React and Java',
        'Implemented security monitoring and incident detection systems',
        'Performed penetration testing and security assessments',
        'Collaborated with cross-functional teams on security initiatives',
      ],
    },
    {
      title: 'Junior Software Developer',
      company: 'StartUp Innovations',
      period: '2018 - 2020',
      type: 'professional',
      responsibilities: [
        'Built responsive frontend applications with modern frameworks',
        'Integrated security best practices into SDLC',
        'Participated in code reviews and security training',
        'Contributed to API development and documentation',
      ],
    },
    {
      title: 'M.Sc. Computer Science',
      company: 'Technical University',
      period: '2016 - 2018',
      type: 'education',
      responsibilities: [
        'Specialized in IT Security and Cryptography',
        'Thesis: "Secure Software Development Practices in Agile Environments"',
        'GPA: 1.5 (German grading system)',
      ],
    },
    {
      title: 'B.Sc. Computer Science',
      company: 'Technical University',
      period: '2013 - 2016',
      type: 'education',
      responsibilities: [
        'Focus on Software Engineering and Systems Security',
        'Relevant coursework: Network Security, Software Architecture, Database Systems',
        'Dean\'s List for Academic Excellence',
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.type}`}>
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {exp.type === 'professional' ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
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
                  )}
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
