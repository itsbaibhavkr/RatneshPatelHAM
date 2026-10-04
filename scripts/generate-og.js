const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Portrait of Ratnesh Patel
  const portraitPath = path.join(__dirname, '../public/images/ratnesh-patel/profile/ratnesh-patel.webp');
  const logoPath = path.join(__dirname, '../public/HAMLogo.png');

  // Resize portrait to fit elegantly in the OG layout (e.g. 420x550)
  const portraitBuffer = await sharp(portraitPath)
    .resize(420, 540, { fit: 'cover', position: 'top' })
    .toBuffer();

  // Resize party logo (e.g. 110x110)
  const logoBuffer = await sharp(logoPath)
    .resize(110, 110, { fit: 'contain' })
    .toBuffer();

  // Create SVG overlay with graphics, text, branding, and typography
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#800a0f" />
          <stop offset="45%" stop-color="#aa141b" />
          <stop offset="100%" stop-color="#4d0508" />
        </linearGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#fbbf24" />
        </linearGradient>
        <linearGradient id="whiteCard" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.04" />
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.45" />
        </filter>
        <clipPath id="portraitClip">
          <rect x="55" y="45" width="420" height="540" rx="20" ry="20" />
        </clipPath>
      </defs>

      <!-- Background with subtle curves -->
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      
      <circle cx="1100" cy="80" r="320" fill="#ffffff" fill-opacity="0.03" />
      <circle cx="650" cy="550" r="260" fill="#000000" fill-opacity="0.15" />

      <!-- Portrait Frame & Shadow -->
      <rect x="51" y="41" width="428" height="548" rx="24" ry="24" fill="none" stroke="#ffffff" stroke-width="4" stroke-opacity="0.85" filter="url(#shadow)" />

      <!-- Right Side Content Container -->
      <g transform="translate(530, 45)">
        <!-- Top Pill Badge -->
        <rect x="0" y="8" width="430" height="38" rx="19" fill="#ffffff" fill-opacity="0.18" stroke="#ffffff" stroke-opacity="0.3" />
        <circle cx="20" cy="27" r="5" fill="#f59e0b" />
        <text x="35" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1">
          HINDUSTANI AWAM MORCHA (SECULAR)
        </text>

        <!-- Leader Name (Dual English & Hindi) -->
        <text x="0" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="900" fill="#ffffff" letter-spacing="-1">
          Ratnesh Patel
        </text>
        <text x="390" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="700" fill="url(#gold)">
          रत्नेश पटेल
        </text>

        <!-- Designation -->
        <text x="0" y="168" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" fill="#fef08a">
          Senior State Vice President, Bihar
        </text>
        <text x="0" y="200" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#fed7aa">
          वरीय उपाध्यक्ष, बिहार • HAM(S)
        </text>

        <!-- Divider Line -->
        <rect x="0" y="226" width="600" height="2" fill="#ffffff" fill-opacity="0.25" />

        <!-- Key Credentials & Mandate -->
        <g transform="translate(0, 252)">
          <rect x="0" y="0" width="290" height="74" rx="14" fill="url(#whiteCard)" stroke="#ffffff" stroke-opacity="0.15" />
          <text x="18" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#cbd5e1" text-transform="uppercase">
            PUBLIC SERVICE
          </text>
          <text x="18" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" fill="#ffffff">
            30+ Years Leadership
          </text>

          <rect x="310" y="0" width="290" height="74" rx="14" fill="url(#whiteCard)" stroke="#ffffff" stroke-opacity="0.15" />
          <text x="328" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#cbd5e1" text-transform="uppercase">
            ELECTION INCHARGE
          </text>
          <text x="328" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" fill="#ffffff">
            NDA Lok Sabha 2024
          </text>
        </g>

        <!-- Focus areas -->
        <text x="0" y="365" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#f1f5f9" opacity="0.9">
          Constituent Advocacy • Farmer Welfare • Tirhut Division &amp; Bihar
        </text>

        <!-- Bottom Footer Strip -->
        <g transform="translate(0, 420)">
          <!-- Circular Logo Plate -->
          <circle cx="55" cy="55" r="55" fill="#ffffff" />
          
          <g transform="translate(130, 28)">
            <text x="0" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#cbd5e1">
              OFFICIAL LEADERSHIP PORTAL
            </text>
            <text x="0" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="900" fill="#ffffff" letter-spacing="0.5">
              ratneshpatel.in
            </text>
          </g>
        </g>
      </g>
    </svg>
  `);

  // Build the composite
  const finalImage = await sharp(svgOverlay)
    .composite([
      {
        input: portraitBuffer,
        top: 45,
        left: 55,
      },
      {
        input: logoBuffer,
        top: 465, // 45 + 420
        left: 530, // 530 + 0
      },
    ])
    .png({ quality: 95 })
    .toBuffer();

  // Save to target locations
  const targets = [
    path.join(__dirname, '../public/og-image.png'),
    path.join(__dirname, '../public/images/site/og/og-image.png'),
    path.join(__dirname, '../app/opengraph-image.png'),
    path.join(__dirname, '../app/twitter-image.png'),
  ];

  for (const t of targets) {
    fs.mkdirSync(path.dirname(t), { recursive: true });
    fs.writeFileSync(t, finalImage);
    console.log(`Saved: ${t}`);
  }

  // Also sync favicon.ico from public/favicon.ico to app/favicon.ico and public/images/site/favicon/
  const pubFav = path.join(__dirname, '../public/favicon.ico');
  const appFav = path.join(__dirname, '../app/favicon.ico');
  const siteFav = path.join(__dirname, '../public/images/site/favicon/favicon.ico');

  if (fs.existsSync(pubFav)) {
    fs.copyFileSync(pubFav, appFav);
    fs.copyFileSync(pubFav, siteFav);
    console.log(`Copied public/favicon.ico to ${appFav} and ${siteFav}`);
  }
}

createOgImage()
  .then(() => console.log('OG image generation complete!'))
  .catch(err => {
    console.error('Error generating OG image:', err);
    process.exit(1);
  });
