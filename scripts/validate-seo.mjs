import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const canonicalUrl = "https://kiddo-workbook.vercel.app/";
const requiredPublicFiles = [
  "favicon.svg",
  "preview.png",
  "preview.svg",
  "robots.txt",
  "site.webmanifest",
  "sitemap.xml",
];
const errors = [];

const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

for (const file of requiredPublicFiles) {
  if (!fs.existsSync(path.join(root, "public", file))) {
    errors.push(`missing public SEO asset: ${file}`);
  }
}

const html = read("index.html");
const requiredHtml = [
  '<html lang="en-GB">',
  'name="description"',
  'name="robots"',
  `<link rel="canonical" href="${canonicalUrl}"`,
  'property="og:title"',
  'property="og:description"',
  `<meta property="og:url" content="${canonicalUrl}"`,
  'property="og:image"',
  '<meta name="twitter:card"',
  '<script type="application/ld+json">',
];

for (const fragment of requiredHtml) {
  if (!html.includes(fragment)) errors.push(`index.html missing: ${fragment}`);
}

const jsonLdMatch = html.match(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
);
if (!jsonLdMatch) {
  errors.push("index.html has no JSON-LD block");
} else {
  try {
    const jsonLd = JSON.parse(jsonLdMatch[1]);
    const graphTypes = (jsonLd["@graph"] ?? []).flatMap((item) =>
      Array.isArray(item["@type"]) ? item["@type"] : [item["@type"]],
    );
    for (const type of ["WebSite", "WebApplication", "LearningResource"]) {
      if (!graphTypes.includes(type)) errors.push(`JSON-LD missing ${type}`);
    }
  } catch (error) {
    errors.push(`invalid JSON-LD: ${error.message}`);
  }
}

if (fs.existsSync(path.join(root, "public", "robots.txt"))) {
  const robots = read("public/robots.txt");
  if (!robots.includes("Allow: /"))
    errors.push("robots.txt must allow crawling");
  if (!robots.includes(`${canonicalUrl}sitemap.xml`)) {
    errors.push("robots.txt must reference the canonical sitemap");
  }
}

if (fs.existsSync(path.join(root, "public", "sitemap.xml"))) {
  const sitemap = read("public/sitemap.xml");
  if (!sitemap.includes(`<loc>${canonicalUrl}</loc>`)) {
    errors.push("sitemap must contain the canonical URL");
  }
  if (sitemap.includes("github.io")) {
    errors.push("sitemap must not nominate the mirror as canonical");
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `SEO validation passed: canonical metadata, structured data and ${requiredPublicFiles.length} public assets`,
);
