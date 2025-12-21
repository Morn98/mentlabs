import './Contact.css';
import { SiTryhackme } from 'react-icons/si';

const Contact = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'm.nentwig98@web.de',
      href: 'mailto:m.nentwig98@web.de',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      value: 'github.com/Morn98',
      href: 'https://github.com/Morn98',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/moritz-nentwig',
      href: 'https://linkedin.com/in/moritz-nentwig',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'TryHackMe',
      value: 'tryhackme.com/p/Ment',
      href: 'https://tryhackme.com/p/Ment',
      icon: <SiTryhackme size={24} />,
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Interested in collaboration or have questions? Feel free to reach out through any of the
          channels below.
        </p>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">{method.icon}</div>
              <h3 className="contact-name">{method.name}</h3>
              <p className="contact-value">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="contact-footer">
          <p>Available for freelance opportunities and consulting</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
