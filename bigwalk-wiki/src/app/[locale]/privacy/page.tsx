import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Big Walk Wiki',
  description: 'Privacy policy for Big Walk Wiki, an independent fan-made guide site for House House\'s co-op adventure Big Walk.',
};

export default function PrivacyPage() {
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container-narrow">
        <div className="kicker kicker-dim">LEGAL</div>
        <h1>Privacy Policy</h1>
        <p className="lead" style={{ marginTop: '1em' }}>
          Big Walk Wiki is a static, fan-made guide site. This page explains, in plain terms, what that means for your privacy.
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>What We Collect</h2>
        <p style={{ color: 'var(--text-dim)' }}>
          This site has no accounts, no forms, and no newsletter. We do not collect, store, or process personal data.
          No analytics or tracking tools are currently embedded (if that ever changes, this policy will be updated first).
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>Third-Party Content</h2>
        <p style={{ color: 'var(--text-dim)' }}>
          Pages load a web font from Google Fonts, which may log standard technical requests. Outbound links
          (for example to IGN) lead to third-party sites with their own privacy policies, which we do not control.
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>Contact</h2>
        <p style={{ color: 'var(--text-dim)' }}>
          This is a hobby project with no contact channel set up yet. If a contact address is added in the future, it will be listed here.
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>Changes</h2>
        <p style={{ color: 'var(--text-dim)' }}>
          If this policy changes, the updated version will be published on this page.
        </p>
      </div>
    </section>
  );
}
