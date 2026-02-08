import './Experience.css';
import { MdWork, MdSchool } from 'react-icons/md';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'LEAPTER GmbH',
    location: 'Germany',
    period: 'Starting January 2026',
    type: 'professional',
    responsibilities: [
      'Position begins January 2026 - details to be updated'
    ]
  },
  {
    title: 'Security Architecture Trainee',
    company: 'Liechtensteinische Landesbank AG',
    location: 'Vaduz, Liechtenstein',
    period: 'Sep 2025 - Dec 2025',
    type: 'professional',
    responsibilities: [
      'Security architecture design and documentation',
      'Risk assessment',
      'Security policy development and review',
      'Architectural review of security controls'
    ],
  },
  {
    title: 'Network & Security Trainee',
    company: 'Liechtensteinische Landesbank AG',
    location: 'Vaduz, Liechtenstein',
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
    location: 'Immenstaad am Bodensee, Germany',
    period: 'Oct 2023 - Apr 2024',
    type: 'professional',
    responsibilities: [
      'Creating a concept for a zero trust architecture in container-based microservice application'
    ]
  },
  {
    title: 'Software Development Working Student',
    company: 'ACTICO GmbH',
    location: 'Immenstaad am Bodensee, Germany',
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
    location: 'Ulm, Germany',
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
    location: 'Weingarten, Germany',
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
    location: 'Ulm, Germany',
    period: '2018 - 2022',
    type: 'education',
    responsibilities: [
      'Focus on IT Security and Business Administration',
      'Bachelor Thesis: Establishment of a certifiable emergency management system at THU',
      'GPA: 1.8'
    ],
  },
];

const Experience = () => {
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
                    <MdWork size={20} />
                  ) : (
                    <MdSchool size={20} />
                  )}
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">
                  {exp.company}
                  {exp.location && <span className="timeline-location"> • {exp.location}</span>}
                </h4>
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
