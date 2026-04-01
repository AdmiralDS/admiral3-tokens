import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const srcPath = resolve(__dirname, 'src');
const entryPath = resolve(srcPath, 'index.ts');
const fontsEntryPath = resolve(srcPath, 'fonts/index.ts');
const styledComponentsEntryPath = resolve(srcPath, 'styled-components.ts');

export default defineConfig({
  publicDir: false,
  resolve: {
    alias: {
      '#src': srcPath,
      '@admiral-ds/admiral3-tokens': entryPath,
    },
  },
  build: {
    lib: {
      entry: {
        index: entryPath,
        fonts: fontsEntryPath,
        'styled-components': styledComponentsEntryPath,
      },
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [/^@admiral-ds\/fonts\//, /^@fontsource\/source-code-pro\/files\//, 'react', 'react/jsx-runtime'],
    },
  },
});
