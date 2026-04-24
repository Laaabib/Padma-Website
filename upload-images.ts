import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

async function uploadImages() {
  try {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      storageBucket: 'gen-lang-client-0805975943.firebasestorage.app'
    });

    const bucket = admin.storage().bucket();
    const publicDir = path.join(process.cwd(), 'public');
    const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.png'));
    
    const urlMap: Record<string, string> = {};

    for (const file of files) {
      console.log(`Processing ${file}...`);
      const filePath = path.join(publicDir, file);
      const webpFileName = file.replace('.png', '.webp');
      
      const buffer = await sharp(filePath)
        .resize({ width: 1920, height: 1080, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      const fileObj = bucket.file(`images/${webpFileName}`);
      await fileObj.save(buffer, {
        metadata: { contentType: 'image/webp' }
      });
      await fileObj.makePublic();
      
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/images/${webpFileName}`;
      console.log(`Uploaded ${file} as ${webpFileName} to ${publicUrl}`);
      
      urlMap['/' + file] = publicUrl;
    }

    fs.writeFileSync('url-map.json', JSON.stringify(urlMap, null, 2));
    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
}

uploadImages();
