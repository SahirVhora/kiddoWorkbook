# KiddoWorkbooks

A professional workbook generator for primary school kids, aligned with the **UK National Curriculum (Year 1-6)**. Generate custom worksheets with downloadable PDFs and AI-powered question creation.

## Features

- **UK National Curriculum aligned** - Covers Mathematics and English for Years 1-6
- **AI-powered question generation** - Uses Google Gemini to create fresh, curriculum-relevant questions on demand
- **Static question bank** - Ready-to-use questions covering Number Bonds, Place Value, Fractions, Money, Time, and more
- **PDF worksheet downloads** - Generate and download printable worksheets via jsPDF
- **Year-level filtering** - Select the appropriate difficulty by school year

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS
- **AI:** Google Gemini SDK (`@google/genai`)
- **PDF Generation:** jsPDF with auto-table plugin
- **Animations:** Motion (Framer Motion)

## Getting Started

**Prerequisites:** Node.js and a Gemini API key.

```bash
npm install
cp .env.example .env.local    # Add your GEMINI_API_KEY
npm run dev                    # → http://localhost:3000
```
