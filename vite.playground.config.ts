import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const rootPath = resolve(__dirname, 'playground');
const srcPath = resolve(__dirname, 'src');
const entryPath = resolve(srcPath, 'index.ts');
const distPath = resolve(__dirname, 'dist');

export default defineConfig({
  root: rootPath,
  plugins: [react(), svgr()],
  publicDir: false,
  resolve: {
    alias: {
      '#src': srcPath,
      '@admiral-ds/admiral3-tokens/css': resolve(distPath, 'css/index.css'),
      '@admiral-ds/admiral3-tokens/css/global-colors': resolve(distPath, 'css/global-colors.css'),
      '@admiral-ds/admiral3-tokens/css/radius': resolve(distPath, 'css/radius.css'),
      '@admiral-ds/admiral3-tokens/css/shadow': resolve(distPath, 'css/shadow.css'),
      '@admiral-ds/admiral3-tokens/css/theme-dark': resolve(distPath, 'css/theme-dark.css'),
      '@admiral-ds/admiral3-tokens/css/theme-dark-neutral': resolve(distPath, 'css/theme-dark-neutral.css'),
      '@admiral-ds/admiral3-tokens/css/theme-light': resolve(distPath, 'css/theme-light.css'),
      '@admiral-ds/admiral3-tokens/css/theme-light-neutral': resolve(distPath, 'css/theme-light-neutral.css'),
      '@admiral-ds/admiral3-tokens/css/themes': resolve(distPath, 'css/themes.css'),
      '@admiral-ds/admiral3-tokens/fonts': resolve(srcPath, 'fonts/index.ts'),
      '@admiral-ds/admiral3-tokens': entryPath,
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist-playground'),
    emptyOutDir: true,
  },
});
