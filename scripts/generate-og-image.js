import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const photoPath = resolve(__dirname, '../public/ment.jpeg');

// Read and resize the profile photo to a circle
const photoBuffer = readFileSync(photoPath);
const resizedPhoto = await sharp(photoBuffer)
  .resize(200, 200)
  .toBuffer();

// Get base64 of the photo for embedding in SVG
const photoBase64 = resizedPhoto.toString('base64');

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <clipPath id="circle">
      <circle cx="960" cy="315" r="150"/>
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>

  <!-- Subtle grid pattern -->
  <g opacity="0.03">
    <line x1="0" y1="100" x2="1200" y2="100" stroke="#60a5fa" stroke-width="1"/>
    <line x1="0" y1="200" x2="1200" y2="200" stroke="#60a5fa" stroke-width="1"/>
    <line x1="0" y1="300" x2="1200" y2="300" stroke="#60a5fa" stroke-width="1"/>
    <line x1="0" y1="400" x2="1200" y2="400" stroke="#60a5fa" stroke-width="1"/>
    <line x1="0" y1="500" x2="1200" y2="500" stroke="#60a5fa" stroke-width="1"/>
    <line x1="200" y1="0" x2="200" y2="630" stroke="#60a5fa" stroke-width="1"/>
    <line x1="400" y1="0" x2="400" y2="630" stroke="#60a5fa" stroke-width="1"/>
    <line x1="600" y1="0" x2="600" y2="630" stroke="#60a5fa" stroke-width="1"/>
    <line x1="800" y1="0" x2="800" y2="630" stroke="#60a5fa" stroke-width="1"/>
    <line x1="1000" y1="0" x2="1000" y2="630" stroke="#60a5fa" stroke-width="1"/>
  </g>

  <!-- Profile photo with circular clip -->
  <circle cx="960" cy="315" r="155" fill="#60a5fa" opacity="0.3"/>
  <circle cx="960" cy="315" r="152" fill="#1e293b"/>
  <image href="data:image/jpeg;base64,${photoBase64}" x="810" y="165" width="300" height="300" clip-path="url(#circle)"/>

  <!-- Name -->
  <text x="80" y="240" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="88" font-weight="700" fill="#ffffff" letter-spacing="-2">Moritz Nentwig</text>

  <!-- Title -->
  <text x="84" y="320" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="42" font-weight="500" fill="#60a5fa">Software Developer &amp;</text>
  <text x="84" y="375" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="42" font-weight="500" fill="#60a5fa">Security Engineer</text>

  <!-- Divider -->
  <rect x="84" y="405" width="140" height="3" rx="1.5" fill="#60a5fa"/>

  <!-- Location -->
  <text x="84" y="455" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="28" font-weight="400" fill="#94a3b8">Lindau, Germany</text>

  <!-- Bottom bar -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#accent)"/>

  <!-- Domain -->
  <text x="84" y="580" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="#475569">www.mentlabs.de</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(resolve(__dirname, '../public/og-image.png'));

console.log('Generated public/og-image.png (1200x630)');
