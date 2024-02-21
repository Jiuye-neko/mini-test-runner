import { globSync } from 'glob';
import fs from 'fs/promises';
import { build } from 'esbuild';

const files = globSync('*.spec.js');

console.log(files);

async function getFileContents() {
  for (const file of files) {
    const fileContent = await fs.readFile(file, 'utf-8');
    console.log(fileContent);

    runModule(fileContent);
  }
}

async function runModule(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd(),
    },
    write: false,
    bundle: true,
    target: 'esnext',
    // external: ['fs', 'glob', 'esbuild'],
  });

  new Function(result.outputFiles[0].text)();
}

getFileContents();
