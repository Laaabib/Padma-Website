import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

async function compressImages() {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.png'));
    
    for (const file of files) {
      if (file === 'logo.png') continue;
      
      console.log(`Processing ${file}...`);
      const filePath = path.join(publicDir, file);
      const webpFileName = file.replace('.png', '.webp');
      const webpFilePath = path.join(publicDir, webpFileName);
      
      await sharp(filePath)
        .resize({ width: 1920, height: 1080, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpFilePath);

      console.log(`Compressed ${file} to ${webpFileName}`);
      fs.unlinkSync(filePath); // delete original png
    }
    console.log('Images compressed successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

compressImages();
