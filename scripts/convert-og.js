const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'public', 'og-image.svg');
const outPath = path.join(__dirname, '..', 'public', 'og-image.png');

if (!fs.existsSync(svgPath)) {
  console.error('SVG source not found:', svgPath);
  process.exit(1);
}

sharp(svgPath)
  .resize(1200, 630, { fit: 'cover' })
  .png({ quality: 90 })
  .toFile(outPath)
  .then(() => console.log('Wrote', outPath))
  .catch((err) => {
    console.error('Error converting SVG to PNG:', err);
    process.exit(1);
  });
