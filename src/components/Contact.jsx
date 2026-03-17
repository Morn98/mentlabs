'use client';

import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const contactMethods = [
  {
    name: 'Email',
    value: 'm.nentwig98@web.de',
    href: 'mailto:m.nentwig98@web.de',
    icon: <MdEmail size={20} aria-hidden="true" />,
  },
  {
    name: 'GitHub',
    value: 'github.com/Morn98',
    href: 'https://github.com/Morn98',
    icon: <FaGithub size={20} aria-hidden="true" />,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/moritz-nentwig',
    href: 'https://linkedin.com/in/moritz-nentwig',
    icon: <FaLinkedin size={20} aria-hidden="true" />,
  },
  {
    name: 'TryHackMe',
    value: 'tryhackme.com/p/Ment',
    href: 'https://tryhackme.com/p/Ment',
    icon: <SiTryhackme size={20} aria-hidden="true" />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-content reveal">
          <div className="contact-message">
            <h2 className="contact-heading">Connect</h2>
            <p className="contact-description">
              I'm always interested in challenging security problems and new collaborations. Whether it's consulting, freelance work, or just talking shop about Zero Trust architectures — drop me a line.
            </p>
          </div>
          <div className="contact-links-col">
            {contactMethods.map((method, index) => {
              const isMailto = method.href.startsWith('mailto:');
              return (
                <a
                  key={index}
                  href={method.href}
                  className="contact-link"
                  {...(!isMailto && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  <span className="contact-icon">{method.icon}</span>
                  <span className="contact-link-text">
                    <span className="contact-name">{method.name}</span>
                    <span className="contact-value">{method.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <footer className="contact-footer reveal">
          <div className="legal-links">
            <a href="/impressum">Impressum</a>
            <span className="legal-separator">·</span>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
