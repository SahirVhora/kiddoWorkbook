import { GoogleGenAI, Type } from "@google/genai";
import { Question, Subject, Difficulty } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function generateWorkbookQuestions(
  subject: Subject, 
  topic: string, 
  grade: string, 
  difficulty: Difficulty,
  count: number
): Promise<Question[]> {
  const prompt = `You are an expert UK primary school teacher. Generate a set of ${count} educational questions for a primary school workbook.
    Year Group: ${grade} (UK National Curriculum)
    Subject: ${subject}
    Topic: ${topic}
    Difficulty: ${difficulty}
    
    The questions MUST be strictly aligned with the UK National Curriculum for ${grade}.
    Difficulty Level Guidelines:
    - Easy: Foundational knowledge, simple wording, direct recall.
    - Medium: Application of knowledge, multi-step thinking, varied question formats.
    - Hard: Complex problem solving, reasoning, and higher-order thinking skills.
    
    Format:
    - Prefer multiple-choice questions (with 4 options) for better quiz experience.
    - For multiple-choice, provide the options array.
    - For short-answer, leave the options array empty or null.
    - Provide a clear, child-friendly explanation for each answer.
    - For each question, provide a 'topicArea' (e.g., 'Addition', 'Punctuation', 'Habitats') to help identify areas for improvement.
    - Ensure the content is engaging and age-appropriate for ${grade} students.
    - DO NOT include topics that are too advanced or too basic for this specific year group.`;

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
            explanation: { type: Type.STRING },
            topicArea: { type: Type.STRING, description: "The specific sub-topic this question covers" }
          },
          required: ["id", "text", "answer", "topicArea"]
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
