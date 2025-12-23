const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.mentlabs.de/#person",
    "name": "Moritz Nentwig",
    "givenName": "Moritz",
    "familyName": "Nentwig",
    "url": "https://www.mentlabs.de",
    "image": "https://www.mentlabs.de/assets/ment-D0OBNUEU.jpeg",
    "jobTitle": ["Software Developer", "Security Engineer"],
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
      "Kubernetes",
      "Security Engineering",
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
      "https://linkedin.com/in/moritz-nentwig",
      "https://tryhackme.com/p/Ment"
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
        "dateCreated": "2025"
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
        "dateCreated": "2024"
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
        "dateCreated": "2022"
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
    </>
  );
};

export default StructuredData;
