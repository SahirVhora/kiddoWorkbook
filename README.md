# School Quest

A free, privacy-friendly and advert-free Year 5 learning space for short lessons, five-question mini quests, smart retry practice and printable topic packs.

- Primary site: [kiddo-workbook.vercel.app](https://kiddo-workbook.vercel.app)
- GitHub Pages mirror: [sahirvhora.github.io/kiddoWorkbook](https://sahirvhora.github.io/kiddoWorkbook/)

## What is covered

- Mathematics: the Year 5 programme of study, including number, calculation, fractions and decimals, measurement, geometry and statistics
- English: the upper Key Stage 2 programme, including reading, writing, spelling, vocabulary, grammar and punctuation
- Science: Year 5 content plus working scientifically
- History and geography: common Key Stage 2 themes and skills; schools may organise these topics in different year groups
- 56 topic-specific lessons and 336 source-backed Year 5 practice questions with explanations

Curriculum alignment is based on the official GOV.UK programmes of study. Questions and lesson wording are original rather than copied from those publications.

## Learning loop

1. Pick a subject and learn the topic's three big ideas.
2. Complete a varied five-question mini quest.
3. Get immediate, encouraging explanations.
4. Revisit missed questions through smart review.
5. Print the full topic pack when paper practice is more useful.

Progress is stored only in the browser. No account, child profile, adverts or social features are used.

## Run locally

```bash
npm install
npm run dev
```

No API key is required for the built-in learning experience.

## Verify a change

```bash
npm run check
```

This runs TypeScript checks, curriculum-content validation and a production build. The content validator guards topic coverage, question depth, unique IDs, answer options, explanations, sources and topic-specific lessons.

The same command also validates canonical metadata, structured data, robots.txt, the sitemap, social-preview assets and the web manifest. Pushes to `main` deploy automatically to Vercel and GitHub Pages.

## Stack

React 19, TypeScript, Vite, Motion, jsPDF and Lucide icons.
