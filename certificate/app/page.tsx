import Certificate from './Certificate';
import { certificate } from './certificate-data';

function PortfolioHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/#home" aria-label="Pranav Jain, home">
        <span className="monogram" aria-hidden="true">pj<span>↗</span></span>
        <span>pranav jain<span className="wordmark-dot">.</span></span>
      </a>
      <nav className="navigation" id="navigation" aria-label="Main navigation">
        <a href="/#about">About</a>
        <a href="/#projects">Projects</a>
        <a href="/#artifacts" aria-current="page">Artifacts</a>
        <a className="nav-contact" href="/#contact">Let’s connect <span aria-hidden="true">↗</span></a>
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" aria-label="Switch to light theme" title="Switch to light theme">☼</button>
        <button className="menu-toggle" type="button" aria-controls="navigation" aria-expanded="false">Menu <span aria-hidden="true">+</span></button>
      </div>
    </header>
  );
}

function LearningJourney() {
  return (
    <section id="description">
      <h2>Artifact Description</h2>
      <p>I completed all four stages of the exercise. Here’s what I took from each part of it.</p>
      <ol className="literacy-stages grid gap-3 sm:grid-cols-2">
        {certificate.stages.map((stage, index) => (
          <li key={stage.title}>
            <span className="eyebrow">STAGE {index + 1} · COMPLETED</span>
            <h3>{stage.title}</h3>
            <p>{stage.takeaway}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <PortfolioHeader />
      <main id="main" className="literacy-page">
        <div className="artifact-hero section-wrap">
          <a className="artifact-breadcrumb" href="/#artifacts"><span aria-hidden="true">←</span> Back to the artifact collection</a>
          <div className="artifact-hero-grid">
            <div>
              <p className="eyebrow">ARTIFACT 03 / AI LITERACY / COMPLETION CERTIFICATE</p>
              <h1>AI Literacy <span className="serif">Lab.</span></h1>
              <p className="artifact-lead">A four-stage exercise on how language models respond and when to verify their answers.</p>
            </div>
            <dl className="artifact-facts">
              <div><dt>RECIPIENT</dt><dd>{certificate.recipient}</dd></div>
              <div><dt>PROGRAM</dt><dd>{certificate.program}</dd></div>
              <div><dt>FORMAT</dt><dd>Completion certificate and reflection</dd></div>
              <div><dt>COMPLETED</dt><dd>{certificate.date}</dd></div>
            </dl>
          </div>
        </div>

        <div className="artifact-content artifact-content-compact section-wrap">
          <article className="artifact-prose" aria-label="AI Literacy Lab artifact">
            <Certificate />
            <section id="introduction">
              <h2>Introduction</h2>
              <p>I completed Professor Predict’s AI Literacy Lab to understand how large language models learn patterns, generate responses, and handle questions that need reliable evidence.</p>
            </section>
            <LearningJourney />
            <section id="value">
              <h2>Artifact-Specific Value Proposition</h2>
              <p>This exercise shows how I evaluate AI responses and decide when a task needs an external tool or a reliable source.</p>
            </section>
            <section id="audience">
              <h2>Customization for Audience</h2>
              <p>I used examples from writing, software, and everyday research so engineering teams, recruiters, and collaborators can see where I’d use AI and how I’d check its work.</p>
            </section>
            <section id="reflection">
              <h2>Reflection</h2>
              <blockquote>{certificate.reflection}</blockquote>
              <details className="literacy-reflection">
                <summary>Read my full reflection</summary>
                <p>This exercise helped me understand how large language models learn patterns and generate responses without necessarily verifying their accuracy. The fictional Velmora question showed me how an AI could produce convincing but incorrect information.</p>
                <p>I was particularly surprised by the distinction between private information and data used to train AI models. I also learned that LLMs work well for familiar tasks like drafting cover letters and explaining algorithms, but require additional verification for legal advice, current information, and exact calculations.</p>
                <p>Going forward, I’ll verify important information and use external tools or reliable sources when a task calls for them.</p>
              </details>
            </section>
            <section id="feedback">
              <h2>Feedback and Revisions</h2>
              <p>The Velmora exercise prompted me to look for evidence behind a fluent answer. I used that example to make my reflection more specific about when and how I’ll verify AI output.</p>
            </section>
            <section id="references">
              <h2>References</h2>
              <ul>
                <li>Professor Predict’s AI Literacy Lab exercise and completion badge.</li>
                <li>Pranav Jain, AI Literacy Lab exercise responses and reflection.</li>
              </ul>
            </section>
            <div className="artifact-page-end">
              <a className="text-link" href="/#artifacts"><span aria-hidden="true">←</span> Back to all artifacts</a>
              <p>Artifact 03 · Pranav Jain</p>
            </div>
          </article>
        </div>
      </main>
      <footer className="site-footer section-wrap">
        <p>© <span id="year">2026</span> Pranav Jain</p>
        <p>Built with care. Hosted on GitHub Pages.</p>
        <a href="/#home">Portfolio home <span aria-hidden="true">↗</span></a>
      </footer>
    </>
  );
}
