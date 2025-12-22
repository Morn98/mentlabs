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
      name: 'CompTIA Cybersecurity Analyset (CySA+)',
      issuer: 'CompTIA ',
      year: '2025',
      description: 'Covers security operations, vulnerability management, incident response, and reporting. Includes malicious activity detection, vulnerability assessment, incident frameworks, SIEM tools, CVSS scoring, and threat intelligence.' 
    },
    {
      name: 'Advanced Endpoint Investigations',
      issuer: 'TryHackMe',
      year: '2025',
      description: 'Investigate endpoint threats across Windows, Linux, macOS, and mobile platforms using memory, disk, and file system forensics. Analyze live memory and cold disk images through hands-on labs covering multiple file systems.'  
    }, 
    {
      name: 'SOC Level 2', 
      issuer: 'TryHackMe', 
      year: '2025', 
      description: 'The course covers security operations, introductory incident response, malware analysis, and threat hunting and threat emulation.'
    },
    {
      name: 'CompTIA Pentest+',
      issuer: 'TryHackMe',
      year: '2021',
      description: 'Includes hands-on exercises aligned to PenTest+ exam objectives and provides practical exam preparation to help with Performance Based Questions.'
    }, 
    {
      name: 'Offensive Pentesting', 
      issuer: 'TryHackMe', 
      year: '2021',
      description: 'Utilizes industry standard tools and provides training in offensive security through realistic attack scenarios. Includes supporting exercises and resources.'
    },
    {
      name: 'Jr Penetration Tester',
      issuer: 'TryHackMe',
      year: '2021',
      description: 'Covers pentesting methodologies and tactics including enumeration, exploitation, and reporting. Provides realistic hands-on hacking exercises and instruction on industry security tools.'
    }, 
    {
      name: 'Web Fundamentals',
      issuer: 'TryHackMe',
      year: '2021', 
      description: 'Covers web fundamentals, major vulnerabilities, and web application assessments. Includes instruction on industry-used tools and practical knowledge for conducting security evaluations.'
    },
    {
      name: 'Pre Security', 
      issuer: 'TryHackMe',
      year: '2021',
      description: 'Covers cybersecurity basics, networking fundamentals and weaknesses, and common web attacks. Includes instruction on using the Linux operating system.'
    }
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
