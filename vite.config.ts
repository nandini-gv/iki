import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.svg':
      return 'image/svg+xml';
    case '.webp':
      return 'image/webp';
    case '.gif':
      return 'image/gif';
    default:
      return 'application/octet-stream';
  }
}

function srcAssetsImagesPlugin(): Plugin {
  return {
    name: 'src-assets-images-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/images/')) {
          const rawUrl = req.url.split('?')[0]!;
          const relativePath = decodeURIComponent(rawUrl.replace(/^\/images\//, ''));
          const filePath = path.resolve(__dirname, 'src/assets/images', relativePath);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            res.setHeader('Content-Type', getMimeType(filePath));
            res.setHeader('Cache-Control', 'no-cache');
            return fs.createReadStream(filePath).pipe(res);
          }
        }
        next();
      });
    },
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'src/assets/images');
      const distDir = path.resolve(__dirname, 'dist/images');
      if (fs.existsSync(srcDir)) {
        fs.cpSync(srcDir, distDir, { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), srcAssetsImagesPlugin()],
  server: {
    port: 3000,
    open: false,
  },
  preview: {
    port: 3000,
  },
});

