import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Moritz Nentwig',
  description: 'Privacy policy (Datenschutzerklärung) for mentlabs.de',
  robots: 'noindex',
};

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back">← Back to portfolio</Link>
        <h1>Privacy Policy / Datenschutzerklärung</h1>

        <h2>1. Data Controller</h2>
        <p>
          Moritz Nentwig<br />
          E-Mail: m.nentwig98@web.de
        </p>

        <h2>2. Hosting</h2>
        <p>
          This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          When you visit this website, your IP address and other metadata (e.g. browser type, operating
          system, time of access) are processed by Vercel to deliver the website content. This
          processing is based on Art. 6(1)(f) GDPR (legitimate interest in providing a functional website).
        </p>
        <p>
          For more information, see the{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Vercel Privacy Policy
          </a>.
        </p>

        <h2>3. Analytics</h2>
        <p>
          This website uses Vercel Web Analytics, a privacy-friendly analytics service provided by
          Vercel Inc. Vercel Analytics does not use cookies and does not collect personal data. It
          collects anonymized usage data such as page views, referrers, and device type. This
          processing is based on Art. 6(1)(f) GDPR (legitimate interest in understanding website usage).
        </p>
        <p>
          For more information, see{' '}
          <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">
            Vercel Analytics Privacy Policy
          </a>.
        </p>

        <h2>4. Fonts</h2>
        <p>
          This website uses the Google Font &quot;Inter&quot;, which is self-hosted and served directly
          from this domain. No requests are made to Google servers, and no data is shared with Google
          when loading fonts.
        </p>

        <h2>5. Cookies</h2>
        <p>
          This website does not use cookies.
        </p>

        <h2>6. External Links</h2>
        <p>
          This website contains links to external services (GitHub, LinkedIn, TryHackMe, Credly).
          When you follow these links, the respective third-party provider may collect data according
          to their own privacy policies.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Under the GDPR, you have the right to access, rectification, erasure, restriction of
          processing, data portability, and objection regarding your personal data. To exercise these
          rights, contact: m.nentwig98@web.de
        </p>

        <h2>8. Changes</h2>
        <p>
          This privacy policy may be updated from time to time. The current version is always
          available at this URL.
        </p>
      </div>
    </div>
  );
}
