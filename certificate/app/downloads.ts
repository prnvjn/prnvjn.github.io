import { certificate } from './certificate-data';

export async function downloadPdf() {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ orientation: 'landscape', format: 'a4' });
  const center = doc.internal.pageSize.getWidth() / 2;

  doc.setFillColor('#f3f3eb').rect(0, 0, 297, 210, 'F');
  doc.setDrawColor('#536653').setLineWidth(0.35).rect(10, 10, 277, 190);
  doc.setTextColor('#18271d');
  doc.setFont('helvetica', 'bold').setFontSize(12);
  doc.text('AI LITERACY LAB COMPLETION', center, 35, { align: 'center' });
  doc.setFont('times', 'italic').setFontSize(68);
  doc.text(certificate.recipient, center, 79, { align: 'center' });
  doc.setFont('helvetica', 'normal').setFontSize(17);
  doc.text(certificate.program, center, 100, { align: 'center' });
  doc.setFontSize(13);
  doc.text(certificate.status, center, 113, { align: 'center' });
  doc.setDrawColor('#a9b8a9').line(48, 132, 249, 132);
  doc.setFont('helvetica', 'bold').setFontSize(16);
  doc.text(certificate.badge, center, 151, { align: 'center', maxWidth: 215 });
  doc.setFont('helvetica', 'normal').setFontSize(12);
  doc.text(certificate.date, center, 174, { align: 'center' });
  doc.save('pranav-ai-literacy-certificate.pdf');
}

export async function downloadPng() {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas unavailable');

  const background = ctx.createLinearGradient(0, 0, 1200, 630);
  background.addColorStop(0, '#22392a');
  background.addColorStop(1, '#101713');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, 1200, 630);
  ctx.strokeStyle = '#748d70';
  ctx.lineWidth = 2;
  ctx.strokeRect(34, 34, 1132, 562);

  ctx.fillStyle = '#d3f397';
  ctx.font = '700 23px Arial';
  ctx.fillText('AI LITERACY LAB COMPLETION', 82, 115);
  ctx.fillStyle = '#f0f2e9';
  ctx.font = 'italic 112px Georgia';
  ctx.fillText(certificate.recipient, 82, 251, 1036);
  ctx.font = '38px Arial';
  ctx.fillText(certificate.program, 85, 328, 1030);
  ctx.fillStyle = '#c5d1c1';
  ctx.font = '26px Arial';
  ctx.fillText(certificate.status, 85, 376);
  ctx.fillStyle = '#d3f397';
  ctx.font = '700 30px Arial';
  ctx.fillText(certificate.badge, 85, 480, 1030);
  ctx.fillStyle = '#c5d1c1';
  ctx.font = '26px Arial';
  ctx.fillText(certificate.date, 85, 539);

  const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));
  if (!blob) throw new Error('PNG export unavailable');
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'pranav-ai-literacy-achievement.png';
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
