import Link from 'next/link';

export const metadata = {
  title: 'Impressum — Moritz Nentwig',
  description: 'Legal notice (Impressum) for mentlabs.de',
  robots: 'noindex',
};

export default function Impressum() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back">← Back to portfolio</Link>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Moritz Nentwig<br />
          E-Mail: m.nentwig98@web.de
        </p>

        <h2>Verantwortlich für den Inhalt</h2>
        <p>Moritz Nentwig</p>

        <h2>Haftungsausschluss</h2>
        <h3>Haftung für Inhalte</h3>
        <p>
          Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
        </p>

        <h3>Haftung für Links</h3>
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss
          besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
          Betreiber der Seiten verantwortlich.
        </p>
      </div>
    </div>
  );
}
