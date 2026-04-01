import { rename } from 'node:fs/promises';
import { resolve } from 'node:path';
import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

const distDir = resolve(import.meta.dirname, '..', 'dist');

const declarationEntries = [
  {
    input: resolve(distDir, 'index.d.ts'),
    output: resolve(distDir, 'index.d.ts'),
  },
  {
    input: resolve(distDir, 'fonts/index.d.ts'),
    output: resolve(distDir, 'fonts/index.d.ts'),
  },
  {
    input: resolve(distDir, 'styled-components.d.ts'),
    output: resolve(distDir, 'styled-components.d.ts'),
  },
] as const;

const buildDeclarationBundle = async ({ input, output }: (typeof declarationEntries)[number]) => {
  const temporaryOutput = `${output}.bundle`;
  const bundle = await rollup({
    input,
    plugins: [dts()],
  });

  try {
    await bundle.write({
      file: temporaryOutput,
      format: 'es',
    });
  } finally {
    await bundle.close();
  }

  await rename(temporaryOutput, output);
};

await Promise.all(declarationEntries.map(buildDeclarationBundle));
