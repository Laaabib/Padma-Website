import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

async function convertBack() {
  const publicDir = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.webp'));
  
  for (const file of files) {
    console.log(`Processing ${file}...`);
    const filePath = path.join(publicDir, file);
    const pngFileName = file.replace('.webp', '.png');
    const pngFilePath = path.join(publicDir, pngFileName);
    
    await sharp(filePath)
      .png()
      .toFile(pngFilePath);

    console.log(`Converted ${file} to ${pngFileName}`);
    fs.unlinkSync(filePath); // delete original webp
  }
  console.log('Images converted successfully!');
}

convertBack().catch(console.error);
