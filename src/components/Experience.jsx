import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Security Architecture Trainee',
      company: 'Liechtensteinische Landesbank AG',
      period: 'Sep 2025 - Dec 2025',
      type: 'professional',
      responsibilities: [
        'Todo!'
      ],
    },
    {
      title: 'Network & Security Trainee',
      company: 'Liechtensteinische Landesbank AG',
      period: 'Sep 2024 - Aug 2025',
      type: 'professional',
      responsibilities: [
        'Analysis, handling and remediation of security incidents', 
        'Development of a container security policy', 
        'Implementation and automation of threat intelligence', 
        'Automation of various standard processes using Ansible and Python', 
        'Design and deployment of a new remote access client', 
        'Contribution to a company-wide Zero Trust Network Access initiative', 
        'Maintenance, standardization and further development of the firewall and proxy infrastructure', 
        'Participation in a "Young Talents" initiative to improve the online banking presence'
      ],
    },
    {
      title: 'Master Thesis Student',
      company: 'ACTICO GmbH',
      period: 'Oct 2023 - Apr 2024',
      type: 'professional', 
      responsibilities: [
        'Creating a concept for a zero trust architecture in container-based microservice application'
      ]
    },
    {
      title: 'Software Development Working Student',
      company: 'ACTICO GmbH',
      period: 'Jun 2022 - Sep 2023',
      type: 'professional',
      responsibilities: [
        'Independent implementation of features and bug fixes in Java and Angular', 
        'Designing databases structures and migrating existing data',
        'Supporting the testing process, including executing performance tests and implementing automated tests', 
        'Active participation in the agile Scrum process', 
        'Creating user and developer documentation'
      ],
    },
    {
      title: 'IT Security Analyst Internship',
      company: 'MOGWAI Labs GmbH',
      period: 'May 2021 - Oct 2021',
      type: 'professional',
      responsibilities: [
        'Vulnerability analysis of web applications',
        'Development of scripts and tools to exploit vulnerabilities (Java, Python, .NET)',
        'OCR recognition', 
        'Penetration testing', 
        'Cloud software development', 
        'Android app reversing'
      ],
    },
    {
      title: 'M.Sc. Computer Science',
      company: 'University of Applied Sciences Weingarten',
      period: '2022 - 2024',
      type: 'education',
      responsibilities: [
        'Specialization in IT Security',
        'Masters Thesis: An Approach for Zero Trust in Container-Based Microservice Applications',
        'GPA: 1.8'
      ],
    },
    {
      title: 'B.Sc. Computer Science',
      company: 'University of Applied Sciences Ulm',
      period: '2018 - 2022',
      type: 'education',
      responsibilities: [
        'Focus on IT Security and Business Administration',
        'Bachelor Thesis: Establishment of a certifiable emergency management system at THU',
        'GPA: 1.8 '
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
