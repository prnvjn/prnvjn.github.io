'use client';

import { MotionConfig, motion } from 'framer-motion';
import { useState } from 'react';
import { certificate } from './certificate-data';
import { downloadPdf, downloadPng } from './downloads';

export default function Certificate() {
  const [status, setStatus] = useState('');

  async function run(action: () => Promise<void>, success: string, failure: string) {
    setStatus('');
    try {
      await action();
      setStatus(success);
    } catch {
      setStatus(failure);
    }
  }

  return (
    <section className="certificate-exhibit" aria-label="Completion certificate">
      <div className="literacy-certificate">
        <p className="eyebrow">CERTIFICATE OF COMPLETION</p>
        <p className="certificate-recipient">{certificate.recipient}</p>
        <h2>{certificate.program}</h2>
        <p className="certificate-completion">{certificate.status}</p>
        <div className="certificate-award">
          <MotionConfig reducedMotion="user">
            <motion.span
              className="certificate-medal"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
            >🏅</motion.span>
          </MotionConfig>
          <p>{certificate.badge}</p>
        </div>
        <p className="certificate-date">{certificate.date}</p>
      </div>

      <div className="certificate-actions flex flex-wrap items-center gap-3" aria-label="Certificate actions">
        <button className="button button-accent" type="button" onClick={() => run(downloadPdf, 'PDF download started.', 'The PDF could not be downloaded. Try Print certificate.')}>Download PDF <span aria-hidden="true">↓</span></button>
        <button className="certificate-button" type="button" onClick={() => window.print()}>Print certificate</button>
        <button className="certificate-button" type="button" onClick={() => run(
          () => navigator.clipboard.writeText(window.location.origin + window.location.pathname),
          'Artifact link copied.',
          'Copy this page’s address to share it.',
        )}>Copy link</button>
      </div>

      <div className="achievement-card">
        <div>
          <p className="eyebrow">SHAREABLE ACHIEVEMENT CARD</p>
          <p><strong>{certificate.recipient}</strong> · {certificate.status}</p>
          <p>{certificate.badge}</p>
        </div>
        <button className="certificate-button" type="button" onClick={() => run(downloadPng, 'Achievement card download started.', 'The achievement card could not be downloaded. Try again.')}>Download PNG <span aria-hidden="true">↓</span></button>
      </div>
      <p className="certificate-status" role="status">{status}</p>
    </section>
  );
}
