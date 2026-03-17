'use client';

import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { FiCheck, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    name: 'TypeRush',
    period: '2025',
    description: 'A fast-paced typing contest web app with randomized texts, multiple time modes, and a local leaderboard.',
    technologies: ['React', 'Vite'],
    highlights: ['Local only', 'Leaderboard', 'English / German support', 'Random Word API'],
    git: 'https://github.com/Morn98/TypeRush'
  },
  {
    name: 'Youtube-2-AppleMusic',
    period: '2025',
    description: 'A Chrome extension for macOS that allows you to open YouTube videos directly in Apple Music with one click.',
    technologies: ['Javascript', 'Manifest v3'],
    highlights: ['Title cleanup', 'Apple Music', 'Youtube'],
    git: 'https://github.com/Morn98/YouTube-2-AppleMusic'
  },
  {
    name: 'Work-Tracker',
    period: '2025',
    description: 'Work Tracker is a modern web app for tracking time spent on projects. It features a timer, manual entry, statistics visualization, and project organization. Data storage uses a dual-layer approach: localStorage for offline-first UX + Supabase for persistent storage and multi-device sync.',
    technologies: ['React', 'Typescript', 'Tailwind', 'Supabase', 'Vercel'],
    highlights: ['Multi-Device Sync', 'Authentication', 'Offline Support'],
    git: 'https://github.com/Morn98/work-tracker',
    link: 'https://work-tracker-vc.vercel.app/'
  },
  {
    name: 'PoC Zero Trust in Container based Applications',
    period: '2023 - 2024',
    description: 'Proof of Concept of my master thesis about Zero Trust in container based Microservice Applications.',
    technologies: ['Java', 'Spring Boot', 'Docker'],
    highlights: ['PKI', 'IAM', 'Client Posture']
  },
  {
    name: 'Encryptio',
    period: '2023',
    description: 'Encrypt strings, decrypt files and determine encryption algorithm of encrypted files.',
    technologies: ['Python'],
    highlights: ['Determine encryption algorithm'],
    git: 'https://github.com/Morn98/encryptio'
  },
  {
    name: 'Aktiv App',
    period: '2021',
    description: 'The app connects local organizations with their community: associations, public institutions, non-profits, and cultural providers can present themselves and their activities while actively engaging residents in shaping local community life. Following an initial testing phase, the customer assumes ownership and ongoing development of the platform.',
    technologies: ['Docker', 'NodeJS', 'Flutter', 'Nginx'],
    highlights: ['Productive App'],
    git: 'https://github.com/Morn98/Aktiv-App'
  },
  {
    name: 'CarrierTracking',
    period: '2021',
    description: 'Digital load carrier tracking solution using 3D modeling (Unity 3D), QR code positioning, and real-time synchronization between physical warehouse layouts and digital twins. Eliminates discrepancies between 2D planning and actual production floor configurations.',
    technologies: ['C#', 'Unity'],
    highlights: ['Productive App'],
    git: 'https://github.com/Morn98/CarrierTracking'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title reveal">Side Projects</h2>
        <p className="section-subtitle reveal">
          A selection of applications and security-focused tools built to solve real-world problems
        </p>

        <div className="projects-timeline reveal">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {project.highlights && (
                <div className="project-highlights">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="highlight-item">
                      <FiCheck size={16} aria-hidden="true" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {(project.git || project.link) && (
                <div className="project-links">
                  {project.git && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View source code on GitHub"
                    >
                      <FaGithub size={20} aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                      aria-label="View live application"
                    >
                      <FiExternalLink size={20} aria-hidden="true" />
                      <span>Visit App</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
