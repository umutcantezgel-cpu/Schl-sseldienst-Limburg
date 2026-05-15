const sharp = require('sharp');
const fs = require('fs');

async function generate() {
    const svgPath = './public/images/logo.svg';
    if (!fs.existsSync(svgPath)) {
        console.error('Logo SVG not found');
        return;
    }

    // app/icon.png (512x512)
    await sharp(svgPath)
        .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .toFile('./app/icon.png');
    
    // app/apple-icon.png (180x180)
    await sharp(svgPath)
        .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .toFile('./app/apple-icon.png');
        
    // public/og-image.png (1200x630)
    await sharp(svgPath)
        .resize(1200, 630, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .toFile('./public/og-image.png');

    console.log('Icons generated successfully!');
}

generate().catch(console.error);
