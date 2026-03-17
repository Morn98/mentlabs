import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../index.css';
import '../App.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Moritz Nentwig - Software Developer & Security Engineer | Lindau, Germany',
  description:
    'Moritz Nentwig — Software Developer & Security Engineer in Lindau, Germany. M.Sc. Computer Science (IT Security), CompTIA CySA+ certified.',
  keywords:
    'Moritz Nentwig, Software Engineer, Security Engineer, Cyber Security, Application Security, CompTIA CySA+, Lindau, Germany, Bodensee, DevSecOps, Java Developer, React Developer, Penetration Testing, IT Security Analyst',
  authors: [{ name: 'Moritz Nentwig' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mentlabs.de/',
    languages: {
      en: 'https://www.mentlabs.de/',
      'x-default': 'https://www.mentlabs.de/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.mentlabs.de/',
    title: 'Moritz Nentwig - Software Developer & Security Engineer',
    description:
      'Software engineer and security professional specializing in cyber security engineering, secure development, and incident response. Based in Lindau am Bodensee, Germany.',
    locale: 'en_US',
    siteName: 'Moritz Nentwig Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moritz Nentwig - Software Developer & Security Engineer',
    description:
      'Software engineer and security professional specializing in cyber security engineering. M.Sc. Computer Science (IT Security), CompTIA CySA+ certified.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'DE-BY',
    'geo.placename': 'Lindau am Bodensee',
    'geo.position': '47.5494;9.6850',
    ICBM: '47.5494, 9.6850',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#60a5fa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <noscript>
          <div
            style={{
              padding: '2rem',
              fontFamily: 'sans-serif',
              color: '#cbd5e1',
              background: '#0f172a',
              minHeight: '100vh',
            }}
          >
            <h1>Moritz Nentwig</h1>
            <p>Software Developer &amp; Security Engineer</p>
            <p>
              Based in Lindau, Germany. M.Sc. Computer Science (IT Security),
              CompTIA CySA+ certified.
            </p>
            <p>
              <a href="mailto:m.nentwig98@web.de" style={{ color: '#60a5fa' }}>
                Email
              </a>{' '}
              |{' '}
              <a href="https://github.com/Morn98" style={{ color: '#60a5fa' }}>
                GitHub
              </a>{' '}
              |{' '}
              <a
                href="https://linkedin.com/in/moritz-nentwig"
                style={{ color: '#60a5fa' }}
              >
                LinkedIn
              </a>
            </p>
          </div>
        </noscript>
        <Analytics />
      </body>
    </html>
  );
}
