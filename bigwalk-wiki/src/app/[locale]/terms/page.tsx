import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Big Walk Wiki',
  description: 'Terms of service for Big Walk Wiki, an independent fan-made guide site for House House\'s co-op adventure Big Walk.',
};

export default function TermsPage() {
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container-narrow">
        <div className="kicker kicker-dim">LEGAL</div>
        <h1>Terms of Service</h1>
        <p className="lead" style={{ marginTop: '1em' }}>
          Big Walk Wiki is an independent, fan-made reference site. By using it you agree to the terms below.
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>Fan Site, Not Official</h2>
        <p style={{ color: 'var(--text-dim)' }}>
          This site is not affiliated with, endorsed by, or connected to House House, Panic, Sony, Valve, or Nintendo.
          Big Walk and all related names and trademarks belong to their respective owners. All official announcements
          come from the developer and publisher, not from this site.
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>Accuracy of Content</h2>
        <p style={{ color: 'var(--text-dim)' }}>
          Guides are written from public information such as reviews, store listings, and official materials.
          Where a detail is unconfirmed, it is explicitly marked as to be confirmed. Content may be out of date
          or contain errors — verify anything important against official sources before acting on it.
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>No Codes, No Accounts, No Liability</h2>
        <p style={{ color: 'var(--text-dim)' }}>
          We never publish redemption codes that we cannot verify, and we sell nothing. The site is provided
          as-is, without warranty. We are not liable for any loss arising from use of this site or reliance on its content.
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>External Links</h2>
        <p style={{ color: 'var(--text-dim)' }}>
          Links to third-party sites are provided for convenience. We are not responsible for their content,
          availability, or policies.
        </p>
      </div>
    </section>
  );
}
