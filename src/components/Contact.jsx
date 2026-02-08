import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const contactMethods = [
  {
    name: 'Email',
    value: 'm.nentwig98@web.de',
    href: 'mailto:m.nentwig98@web.de',
    icon: <MdEmail size={24} aria-hidden="true" />,
  },
  {
    name: 'GitHub',
    value: 'github.com/Morn98',
    href: 'https://github.com/Morn98',
    icon: <FaGithub size={24} aria-hidden="true" />,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/moritz-nentwig',
    href: 'https://linkedin.com/in/moritz-nentwig',
    icon: <FaLinkedin size={24} aria-hidden="true" />,
  },
  {
    name: 'TryHackMe',
    value: 'tryhackme.com/p/Ment',
    href: 'https://tryhackme.com/p/Ment',
    icon: <SiTryhackme size={24} aria-hidden="true" />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Interested in collaboration or have questions? Feel free to reach out through any of the
          channels below.
        </p>

        <div className="contact-grid">
          {contactMethods.map((method, index) => {
            const isMailto = method.href.startsWith('mailto:');
            return (
              <a
                key={index}
                href={method.href}
                className="contact-card"
                {...(!isMailto && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                <div className="contact-icon">{method.icon}</div>
                <h3 className="contact-name">{method.name}</h3>
                <p className="contact-value">{method.value}</p>
              </a>
            );
          })}
        </div>

        <footer className="contact-footer">
          <p>Available for freelance opportunities and consulting</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
