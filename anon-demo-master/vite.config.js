import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Auto-copy script to transfer user-uploaded chat media to local assets folder (reload-trigger-45)
try {
  const mappingsPath = path.join(__dirname, 'image_mappings.json');
  if (fs.existsSync(mappingsPath)) {
    const mappings = JSON.parse(fs.readFileSync(mappingsPath, 'utf8'));
    const sourceDir = 'C:/Users/USER/.gemini/antigravity/brain/957b482d-1fca-4c3b-b5d6-1a70bf4361df';
    const destDir = path.join(__dirname, 'public/assets/images/products');

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    for (const [sourceFile, destFile] of Object.entries(mappings)) {
      const sourcePath = path.join(sourceDir, sourceFile);
      const destPath = path.join(destDir, destFile);

      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`[Auto-Copy] Successfully copied ${sourceFile} to ${destFile}`);
      } else {
        console.warn(`[Auto-Copy] Source file not found: ${sourcePath}`);
      }
    }
  }
} catch (err) {
  console.error('[Auto-Copy] Error running image copy script:', err);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
