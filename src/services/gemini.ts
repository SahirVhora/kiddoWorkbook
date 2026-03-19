import { GoogleGenAI, Type } from "@google/genai";
import { Question, Subject } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function generateWorkbookQuestions(subject: Subject, topic: string, grade: string): Promise<Question[]> {
  const prompt = `Generate a set of 10 educational questions for a primary school workbook.
    Subject: ${subject}
    Topic: ${topic}
    Grade Level: ${grade}
    
    The questions should be age-appropriate, engaging, and follow a step-by-step learning progression.
    Include a mix of multiple-choice and short-answer questions.
    Provide the correct answer and a brief explanation for each.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            text: { type: Type.STRING },
            options: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Optional: Provide 4 options for multiple choice questions"
            },
            answer: { type: Type.STRING },
            explanation: { type: Type.STRING }
          },
          required: ["id", "text", "answer"]
        }
      }
    }
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return [];
  }
}
