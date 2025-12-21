import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'SecureAuth Platform',
      period: '2024',
      description:
        'Multi-factor authentication system with biometric integration and advanced threat detection. Designed for enterprise-scale deployment with high availability.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      highlights: ['99.9% uptime', 'Supports 100K+ concurrent users', 'SOC 2 compliant'],
    },
    {
      name: 'Vulnerability Scanner',
      period: '2023',
      description:
        'Automated security scanning tool that integrates with CI/CD pipelines to detect vulnerabilities in application dependencies and code patterns.',
      technologies: ['Python', 'Docker', 'Jenkins', 'GraphQL', 'PostgreSQL'],
      highlights: ['Scans 500+ repos daily', 'Reduces security debt by 40%', 'OWASP Top 10 coverage'],
    },
    {
      name: 'DevSecOps Dashboard',
      period: '2023',
      description:
        'Real-time monitoring dashboard for security metrics across development lifecycle. Provides insights into security posture and compliance status.',
      technologies: ['React', 'TypeScript', 'Elasticsearch', 'Kibana', 'AWS'],
      highlights: ['Real-time analytics', 'Custom alerting', 'Integration with 15+ tools'],
    },
    {
      name: 'Secure Code Review Assistant',
      period: '2022',
      description:
        'AI-powered tool that assists developers in identifying security issues during code review. Integrates with GitHub and GitLab.',
      technologies: ['Python', 'Machine Learning', 'GitHub API', 'FastAPI'],
      highlights: ['80% reduction in security issues', 'Trained on 10K+ code samples'],
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Side Projects</h2>
        <p className="section-subtitle">
          A selection of applications and security-focused tools built to solve real-world problems
        </p>

        <div className="projects-timeline">
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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
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
