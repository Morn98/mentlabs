'use client';

import './Skills.css';
import { FiExternalLink } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Development',
    skills: ['Java', 'Python', 'Typescript', 'SQL', 'React', 'Next.js', 'Angular', 'Docker/Kubernetes & Microservices', 'CI/CD', 'Git', 'AI Development', 'Vibe Coding'],
  },
  {
    title: 'Enterprise Architecture',
    skills: ['System Design & Integration',  'Security Architecture', 'Zero Trust Architecture', 'Defense in Depth', 'Data Protection Strategies', 'DORA Compliance', 'Enterprise Architecture Management']
  },
  {
    title: 'Security Engineering',
    skills: ['Secure Software Development', 'OWASP Top 10', 'Cryptography and Encryption', 'Application Security, API Security', 'Identity & Access Management (IAM)', 'Vulnerability Assessment & Penetration Testing']
  },
  {
    title: 'Security Operations',
    skills: ['Incident Response', 'Endpoint Detection & Response', 'Threat Intelligence', 'Firewall & Network Security', 'Vulnerability Scanning', 'Intrusion Detection']
  }
];

const certifications = [
  {
    name: 'CompTIA Cybersecurity Analyst (CySA+)',
    issuer: 'CompTIA',
    year: '2025',
    description: 'Covers security operations, vulnerability management, incident response, and reporting. Includes malicious activity detection, vulnerability assessment, incident frameworks, SIEM tools, CVSS scoring, and threat intelligence.',
    link: 'https://www.credly.com/badges/e30eb144-0612-41a2-a770-58f23940fb9f/public_url'
  },
  {
    name: 'Advanced Endpoint Investigations',
    issuer: 'TryHackMe',
    year: '2025',
    description: 'Investigate endpoint threats across Windows, Linux, macOS, and mobile platforms using memory, disk, and file system forensics. Analyze live memory and cold disk images through hands-on labs covering multiple file systems.',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-AKTXRE1PVK.pdf'
  },
  {
    name: 'SOC Level 2',
    issuer: 'TryHackMe',
    year: '2025',
    description: 'The course covers security operations, introductory incident response, malware analysis, and threat hunting and threat emulation.',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-EIE8WETEKR.pdf'
  },
  {
    name: 'CompTIA Pentest+',
    issuer: 'TryHackMe',
    year: '2021',
    description: 'Includes hands-on exercises aligned to PenTest+ exam objectives and provides practical exam preparation to help with Performance Based Questions.',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-5RSBEP9MGJ.pdf'
  },
  {
    name: 'Offensive Pentesting',
    issuer: 'TryHackMe',
    year: '2021',
    description: 'Utilizes industry standard tools and provides training in offensive security through realistic attack scenarios. Includes supporting exercises and resources.',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-07KXFR53OH.pdf'
  },
  {
    name: 'Jr Penetration Tester',
    issuer: 'TryHackMe',
    year: '2021',
    description: 'Covers pentesting methodologies and tactics including enumeration, exploitation, and reporting. Provides realistic hands-on hacking exercises and instruction on industry security tools.',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-P485TZSJPU.pdf'
  },
  {
    name: 'Web Fundamentals',
    issuer: 'TryHackMe',
    year: '2021',
    description: 'Covers web fundamentals, major vulnerabilities, and web application assessments. Includes instruction on industry-used tools and practical knowledge for conducting security evaluations.',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-LVH7TD1K2G.pdf'
  },
  {
    name: 'Pre Security',
    issuer: 'TryHackMe',
    year: '2021',
    description: 'Covers cybersecurity basics, networking fundamentals and weaknesses, and common web attacks. Includes instruction on using the Linux operating system.',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-I9DJ3EOSVM.pdf'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title reveal">Skills & Expertise</h2>

        <div className="skills-categories reveal">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section reveal">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-row"
              >
                <div className="cert-info">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-meta">
                    {cert.issuer} · {cert.year}
                  </span>
                </div>
                <FiExternalLink size={14} className="cert-link-icon" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
