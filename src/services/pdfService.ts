import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Workbook } from '../types';

export function downloadWorksheetPDF(workbook: Workbook) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header
  doc.setFontSize(22);
  doc.setTextColor(40, 40, 40);
  doc.text('KiddoWorkbooks', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(16);
  doc.text(workbook.title, pageWidth / 2, 30, { align: 'center' });

  // Info Section
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`Subject: ${workbook.subject}`, 20, 45);
  doc.text(`Topic: ${workbook.topic}`, 20, 52);
  doc.text(`Grade: ${workbook.grade}`, 20, 59);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 60, 45);

  // Divider
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 65, pageWidth - 20, 65);

  // Questions
  let yPos = 75;
  workbook.questions.forEach((q, index) => {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const questionText = `${index + 1}. ${q.text}`;
    const splitText = doc.splitTextToSize(questionText, pageWidth - 40);
    doc.text(splitText, 20, yPos);
    yPos += (splitText.length * 7);

    if (q.options && q.options.length > 0) {
      q.options.forEach((opt, optIdx) => {
        const label = String.fromCharCode(65 + optIdx);
        doc.text(`${label}) ${opt}`, 30, yPos);
        yPos += 7;
      });
    } else {
      doc.setDrawColor(150, 150, 150);
      doc.line(30, yPos + 5, pageWidth - 30, yPos + 5);
      yPos += 15;
    }
    
    yPos += 5;
  });

  // Answer Key on new page
  doc.addPage();
  doc.setFontSize(18);
  doc.text('Answer Key', pageWidth / 2, 20, { align: 'center' });
  
  yPos = 35;
  workbook.questions.forEach((q, index) => {
    doc.setFontSize(11);
    doc.text(`${index + 1}. ${q.answer}`, 20, yPos);
    yPos += 7;
    if (q.explanation) {
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      const splitExp = doc.splitTextToSize(`Explanation: ${q.explanation}`, pageWidth - 40);
      doc.text(splitExp, 25, yPos);
      yPos += (splitExp.length * 5) + 5;
      doc.setTextColor(0, 0, 0);
    }
  });

  doc.save(`${workbook.subject}_${workbook.topic}_Worksheet.pdf`);
}
