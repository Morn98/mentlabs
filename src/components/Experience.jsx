'use client';

import './Experience.css';
import { MdWork, MdSchool } from 'react-icons/md';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'LEAPTER GmbH',
    location: 'Germany',
    period: 'Jan 2026 - Present',
    startDate: '2026-01',
    type: 'professional',
    responsibilities: [
      'Full-stack development of an AI-native platform for code visualization and validation',
      'Building and integrating AI agent workflows for transparent, executable blueprints',
      'Developing features that transform AI-generated code into visual, verifiable models',
      'End-to-end feature development from concept to production in a fast-paced startup environment',
      'Collaborating with founders and design partners to shape product direction and architecture'
    ]
  },
  {
    title: 'Security Architecture Trainee',
    company: 'Liechtensteinische Landesbank AG',
    location: 'Vaduz, Liechtenstein',
    period: 'Sep 2025 - Dec 2025',
    startDate: '2025-09',
    endDate: '2025-12',
    type: 'professional',
    responsibilities: [
      'Developed security concepts, conducted portfolio assessments, and provided security consulting for projects',
      'Developed and maintained CAM, ICT reference architecture, IT security strategy, and IT demand processes',
      'Conducted analyses on SIEM, PAM, HSM, and encryption for internal policy creation',
      'Created a Container Security Governance framework',
      'Independently managed various IT demand requests',
      'Participated in the LLB Young Talent Program'
    ],
  },
  {
    title: 'Network & Security Trainee',
    company: 'Liechtensteinische Landesbank AG',
    location: 'Vaduz, Liechtenstein',
    period: 'Sep 2024 - Aug 2025',
    startDate: '2024-09',
    endDate: '2025-08',
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
    startDate: '2023-10',
    endDate: '2024-04',
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
    startDate: '2022-06',
    endDate: '2023-09',
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
    startDate: '2021-05',
    endDate: '2021-10',
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
    startDate: '2022',
    endDate: '2024',
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
    startDate: '2018',
    endDate: '2022',
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
        <h2 className="section-title reveal">Experience & Education</h2>

        <div className="timeline reveal">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.type}`}>
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {exp.type === 'professional' ? (
                    <MdWork size={14} aria-hidden="true" />
                  ) : (
                    <MdSchool size={14} aria-hidden="true" />
                  )}
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">
                    {exp.endDate ? (
                      <><time dateTime={exp.startDate}>{exp.period.split(' - ')[0]}</time> - <time dateTime={exp.endDate}>{exp.period.split(' - ')[1]}</time></>
                    ) : (
                      <>Starting <time dateTime={exp.startDate}>{exp.period.replace('Starting ', '')}</time></>
                    )}
                  </span>
                </div>
                <h4 className="timeline-company">
                  {exp.company}
                  {exp.location && <span className="timeline-location"> · {exp.location}</span>}
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
