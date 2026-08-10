import { jsPDF } from "jspdf";
import type { Workbook } from "../types";

export function buildWorksheetPDF(workbook: Workbook) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const bottomMargin = 22;

  doc.setFontSize(22);
  doc.setTextColor(40, 40, 40);
  doc.text("School Quest", pageWidth / 2, 20, { align: "center" });

  doc.setFontSize(16);
  doc.text(workbook.title, pageWidth / 2, 30, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`Subject: ${workbook.subject}`, 20, 45);
  doc.text(`Topic: ${workbook.topic}`, 20, 52);
  doc.text(`Grade: ${workbook.grade}`, 20, 59);
  doc.text(
    `Date: ${new Date().toLocaleDateString("en-GB")}`,
    pageWidth - 60,
    45,
  );
  doc.setFontSize(9);
  doc.text(
    "Curriculum-aligned original practice • references included at the end",
    20,
    62,
  );

  doc.setDrawColor(200, 200, 200);
  doc.line(20, 67, pageWidth - 20, 67);

  let yPos = 77;
  workbook.questions.forEach((q, index) => {
    const questionText = `${index + 1}. ${q.text}`;
    const splitText = doc.splitTextToSize(
      questionText,
      pageWidth - 40,
    ) as string[];
    const optionsHeight = q.options?.length ? q.options.length * 7 : 15;
    const workingHeight = workbook.subject === "Mathematics" ? 22 : 0;
    const requiredHeight =
      splitText.length * 7 + optionsHeight + workingHeight + 10;

    if (yPos + requiredHeight > pageHeight - bottomMargin) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(splitText, 20, yPos);
    yPos += splitText.length * 7;

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

    if (workbook.subject === "Mathematics") {
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 120);
      doc.text("Working:", 30, yPos + 1);
      doc.setDrawColor(210, 210, 210);
      doc.line(30, yPos + 7, pageWidth - 30, yPos + 7);
      doc.line(30, yPos + 14, pageWidth - 30, yPos + 14);
      yPos += 19;
      doc.setTextColor(0, 0, 0);
    }

    yPos += 5;
  });

  doc.addPage();
  doc.setFontSize(18);
  doc.text("Answer Key", pageWidth / 2, 20, { align: "center" });

  yPos = 35;
  workbook.questions.forEach((q, index) => {
    const splitExp = q.explanation
      ? (doc.splitTextToSize(
          `Explanation: ${q.explanation}`,
          pageWidth - 45,
        ) as string[])
      : [];
    const requiredHeight = 10 + splitExp.length * 5;
    if (yPos + requiredHeight > pageHeight - bottomMargin) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(`${index + 1}. ${q.answer}`, 20, yPos);
    yPos += 7;
    if (splitExp.length) {
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(splitExp, 25, yPos);
      yPos += splitExp.length * 5 + 5;
    }
  });

  const sources = [
    ...new Map(
      workbook.questions
        .filter((question) => question.source)
        .map((question) => [question.source!.url, question.source!]),
    ).values(),
  ];

  if (sources.length) {
    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text("Curriculum References", pageWidth / 2, 20, { align: "center" });
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    doc.text(
      "These questions are original and aligned to the following official programmes of study.",
      20,
      32,
    );
    yPos = 45;
    sources.forEach((source, index) => {
      doc.setFontSize(11);
      doc.setTextColor(70, 70, 70);
      doc.text(`${index + 1}. ${source.title}`, 20, yPos);
      yPos += 7;
      doc.setFontSize(9);
      doc.setTextColor(83, 95, 185);
      doc.textWithLink(
        "Open the official GOV.UK programme of study",
        25,
        yPos,
        { url: source.url },
      );
      yPos += 13;
    });
  }

  return doc;
}

export function downloadWorksheetPDF(workbook: Workbook) {
  buildWorksheetPDF(workbook).save(
    `${workbook.subject}_${workbook.topic}_Worksheet.pdf`,
  );
}
