#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TOOLBOX_DIR = path.join(ROOT, 'toolbox');
const OUTPUT_FILE = path.join(ROOT, 'core', 'BlocklyArduino', 'toolbox_bundle.js');

function normalizeNewlines(text) {
  return text.replace(/\r\n/g, '\n');
}

async function main() {
  const entries = await fs.promises.readdir(TOOLBOX_DIR);
  const xmlFiles = entries
    .filter((name) => name.toLowerCase().endsWith('.xml'))
    .sort((a, b) => a.localeCompare(b));

  if (!xmlFiles.length) {
    throw new Error('No toolbox XML files found in ./toolbox');
  }

  const lines = [
    '/**',
    ' * Auto-generated toolbox bundle for offline (file://) usage.',
    ' * Source: toolbox/*.xml',
    ' */',
    "'use strict';",
    '',
    'window.BlocklyDuinoToolboxes = window.BlocklyDuinoToolboxes || {};',
    ''
  ];

  for (const fileName of xmlFiles) {
    const fullPath = path.join(TOOLBOX_DIR, fileName);
    const key = path.basename(fileName, '.xml');
    const xmlContent = await fs.promises.readFile(fullPath, 'utf8');
    const compactXml = normalizeNewlines(xmlContent).trim();
    lines.push(`window.BlocklyDuinoToolboxes[${JSON.stringify(key)}] = ${JSON.stringify(compactXml)};`);
  }

  lines.push('');
  await fs.promises.writeFile(OUTPUT_FILE, lines.join('\n'), 'utf8');

  console.log(`Generated ${path.relative(ROOT, OUTPUT_FILE)} from ${xmlFiles.length} XML files.`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
