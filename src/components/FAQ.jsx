'use client';

import './FAQ.css';

const faqs = [
  {
    question: 'What is Zero Trust architecture in microservices?',
    answer: 'Zero Trust architecture in microservices eliminates implicit trust between services by enforcing authentication and authorization on every request. Instead of relying on network perimeters, each microservice validates identity through mutual TLS, short-lived tokens, and client posture checks before granting access.',
    details: 'In my master thesis at Hochschule Ravensburg-Weingarten, I designed and implemented a Zero Trust proof-of-concept for container-based microservices using Spring Boot and Docker. The architecture included a PKI for mutual TLS between services, an IAM system for token-based authorization, and client posture verification to assess the security state of requesting services before granting access.'
  },
  {
    question: 'How does container security governance work in banking?',
    answer: 'Container security governance in banking combines policy enforcement, image scanning, runtime monitoring, and compliance mapping to ensure containerized workloads meet regulatory requirements like DORA and banking-specific IT security standards.',
    details: 'At Liechtensteinische Landesbank AG, I created a Container Security Governance framework covering the full container lifecycle — from secure base image policies and registry scanning through runtime threat detection and incident response procedures. This included defining security policies for Kubernetes deployments and mapping controls to regulatory requirements.'
  },
  {
    question: 'What does a security engineer do in fintech?',
    answer: 'A security engineer in fintech designs and implements security controls that protect financial applications and data while enabling rapid development. This includes secure architecture design, vulnerability management, incident response, threat intelligence, and ensuring compliance with financial regulations like DORA.',
    details: 'My work at Liechtensteinische Landesbank spanned both security architecture and operations — from developing ICT reference architectures and conducting SIEM and PAM analyses to hands-on incident response, threat intelligence automation with Ansible and Python, and contributing to Zero Trust Network Access initiatives.'
  },
  {
    question: 'What is CompTIA CySA+ certification?',
    answer: 'CompTIA CySA+ (Cybersecurity Analyst) is an industry-recognized certification that validates skills in security operations, vulnerability management, incident response, and threat detection. It covers SIEM tools, CVSS scoring, malware analysis, and security monitoring methodologies.',
    details: 'I earned the CompTIA CySA+ certification in 2025, complementing my practical experience in security operations at a banking institution. The certification covers security operations center workflows, vulnerability assessment techniques, incident response frameworks, and threat intelligence — all areas I apply in my daily work.'
  },
  {
    question: 'How do you secure containerized applications?',
    answer: 'Securing containerized applications requires a defense-in-depth approach: hardened base images, vulnerability scanning in CI/CD pipelines, runtime security monitoring, network policies for pod-to-pod communication, secrets management, and role-based access control for orchestration platforms like Kubernetes.',
    details: 'Through my security architecture work and master thesis research, I have implemented container security across multiple layers — from build-time image scanning and policy enforcement to runtime threat detection and Zero Trust service-to-service communication using mutual TLS and identity-aware proxies.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2 className="section-title reveal">Frequently Asked Questions</h2>
        <p className="section-subtitle reveal">
          Common questions about security engineering, my expertise, and the technologies I work with.
        </p>

        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
              {faq.details && (
                <p className="faq-details">{faq.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
