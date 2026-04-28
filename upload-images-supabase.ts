import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Users will need to provide these via terminal or .env
const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/\/rest\/v1\/?$/, '');
const SUPABASE_ANON_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzeW1xb3p0b2tmdmV2YnJmYndiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzA2MDU0OSwiZXhwIjoyMDkyNjM2NTQ5fQ.o4S8-wUx1SUIoENOfzzLU4IZ9UQZMOOIrbKpPgVSXh0';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  console.error("Please add them to your environment variables or .env file before running this script.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const BUCKET_NAME = 'images';

async function uploadImages() {
  const publicDir = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.png') || f.endsWith('.webp'));
  
  // Create bucket if it doesn't exist
  const { data: buckets } = await supabase.storage.listBuckets();
  
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const fileBuffer = fs.readFileSync(filePath);
    
    console.log(`Uploading ${file}...`);
    
    // determine content type
    let contentType = 'image/png';
    if (file.endsWith('.webp')) contentType = 'image/webp';
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) contentType = 'image/jpeg';

    const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(file, fileBuffer, {
      contentType,
      upsert: true
    });
    
    if (error) {
      console.error(`Error uploading ${file}:`, error.message);
    } else {
      console.log(`Successfully uploaded ${file}.`);
    }
  }

  console.log('All images uploaded!');
  
  // Now replace local image references in components with Supabase URLs
  const { data: publicUrlData } = supabase.storage.from(BUCKET_NAME).getPublicUrl('');
  const baseUrl = publicUrlData.publicUrl;
  console.log(`Base URL for images: ${baseUrl}`);
  console.log(`To use these images, you can update your components to prepend this URL, or run a find/replace.`)
}

uploadImages().catch(console.error);
