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
    icon: <MdEmail size={22} aria-hidden="true" />,
  },
  {
    name: 'GitHub',
    value: 'github.com/Morn98',
    href: 'https://github.com/Morn98',
    icon: <FaGithub size={22} aria-hidden="true" />,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/moritz-nentwig',
    href: 'https://linkedin.com/in/moritz-nentwig',
    icon: <FaLinkedin size={22} aria-hidden="true" />,
  },
  {
    name: 'TryHackMe',
    value: 'tryhackme.com/p/Ment',
    href: 'https://tryhackme.com/p/Ment',
    icon: <SiTryhackme size={22} aria-hidden="true" />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title reveal">Get in Touch</h2>
        <p className="section-subtitle reveal">
          Interested in collaboration or have questions? Feel free to reach out through any of the
          channels below.
        </p>

        <div className="contact-row reveal">
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
                <span className="contact-label">{method.name}</span>
              </a>
            );
          })}
        </div>

        <footer className="contact-footer reveal">
          <p>Available for freelance opportunities and consulting</p>
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
