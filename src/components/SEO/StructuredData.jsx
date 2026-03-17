const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.mentlabs.de/#person",
  "name": "Moritz Nentwig",
  "givenName": "Moritz",
  "familyName": "Nentwig",
  "url": "https://www.mentlabs.de",
  "image": "https://www.mentlabs.de/ment.jpeg",
  "jobTitle": "Software Developer & Security Engineer",
  "description": "Software developer and security engineer specializing in secure development, security architecture, and incident response. M.Sc. Computer Science (IT Security), CompTIA CySA+ certified.",
  "email": "m.nentwig98@web.de",
  "worksFor": {
    "@type": "Organization",
    "name": "LEAPTER GmbH"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Hochschule Ravensburg-Weingarten",
      "url": "https://www.rwu.de",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Weingarten",
        "addressRegion": "Baden-Württemberg",
        "addressCountry": "DE"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "Technische Hochschule Ulm",
      "url": "https://www.thu.de",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ulm",
        "addressRegion": "Baden-Württemberg",
        "addressCountry": "DE"
      }
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lindau am Bodensee",
    "addressRegion": "Bavaria",
    "addressCountry": "DE"
  },
  "knowsAbout": [
    "Software Development",
    "IT Security",
    "Zero Trust Architecture",
    "Application Security",
    "Penetration Testing",
    "Incident Response",
    "Java",
    "Python",
    "TypeScript",
    "React",
    "Docker",
    "Microservices",
    "Security Engineering",
    "Security Analysis",
    "Cyber Security",
    "Enterprise Architecture"
  ],
  "knowsLanguage": [
    {
      "@type": "Language",
      "name": "German",
      "alternateName": "de"
    },
    {
      "@type": "Language",
      "name": "English",
      "alternateName": "en"
    }
  ],
  "sameAs": [
    "https://github.com/Morn98",
    "https://www.linkedin.com/in/moritz-nentwig",
    "https://tryhackme.com/p/Ment",
    "https://www.credly.com/users/moritz-nentwig"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "CompTIA CySA+ (Cybersecurity Analyst)",
      "credentialCategory": "certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "CompTIA"
      },
      "dateCreated": "2025-01-01"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Master of Science in Computer Science",
      "credentialCategory": "degree",
      "educationalLevel": "Master's Degree",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Hochschule Ravensburg-Weingarten"
      },
      "dateCreated": "2024-01-01"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Bachelor of Science in Computer Science",
      "credentialCategory": "degree",
      "educationalLevel": "Bachelor's Degree",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Technische Hochschule Ulm"
      },
      "dateCreated": "2022-01-01"
    }
  ]
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2025-12-21",
  "dateModified": new Date().toISOString().split('T')[0],
  "mainEntity": {
    "@id": "https://www.mentlabs.de/#person"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".home-title", ".home-description"]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Moritz Nentwig Portfolio",
  "url": "https://www.mentlabs.de",
  "description": "Professional portfolio of Moritz Nentwig - Software Developer and Security Engineer specializing in IT security and development",
  "author": {
    "@id": "https://www.mentlabs.de/#person"
  },
  "inLanguage": "en"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.mentlabs.de/#organization",
  "name": "mentlabs",
  "url": "https://www.mentlabs.de",
  "logo": "https://www.mentlabs.de/favicon-32x32.png",
  "description": "Freelance software development and security engineering consultancy based in Lindau, Germany.",
  "founder": {
    "@id": "https://www.mentlabs.de/#person"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lindau am Bodensee",
    "addressRegion": "Bavaria",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.5494,
    "longitude": 9.6850
  },
  "email": "m.nentwig98@web.de",
  "sameAs": [
    "https://github.com/Morn98",
    "https://www.linkedin.com/in/moritz-nentwig"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Germany"
  }
};

const StructuredData = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default StructuredData;
