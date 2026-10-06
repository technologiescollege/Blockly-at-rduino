#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const EXAMPLES_DIR = path.join(ROOT, 'examples');
const LIST_OUTPUT = path.join(ROOT, 'core', 'BlocklyArduino', 'examples_bundle.js');
const XML_OUTPUT = path.join(ROOT, 'core', 'BlocklyArduino', 'examples_xml_bundle.js');
const LIST_INPUT = path.join(EXAMPLES_DIR, 'examples.json');

function normalizeNewlines(text) {
  return text.replace(/\r\n/g, '\n');
}

function toPosix(relPath) {
  return relPath.split(path.sep).join('/');
}

async function collectXmlFiles(dir, baseDir, out) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectXmlFiles(full, baseDir, out);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.xml')) {
      out.push(path.relative(baseDir, full));
    }
  }
}

async function main() {
  const raw = await fs.promises.readFile(LIST_INPUT, 'utf8');
  const data = JSON.parse(raw);

  const listLines = [
    '/**',
    ' * Auto-generated examples list for offline (file://) usage.',
    ' * Source: examples/examples.json',
    ' */',
    "'use strict';",
    '',
    `window.BlocklyDuinoExamples = ${JSON.stringify(data)};`,
    ''
  ];
  await fs.promises.writeFile(LIST_OUTPUT, listLines.join('\n'), 'utf8');

  const xmlFiles = [];
  await collectXmlFiles(EXAMPLES_DIR, EXAMPLES_DIR, xmlFiles);
  xmlFiles.sort((a, b) => a.localeCompare(b));

  const xmlLines = [
    '/**',
    ' * Auto-generated examples XML bundle for offline (file://) usage.',
    ' * Source: examples/**/*.xml',
    ' */',
    "'use strict';",
    '',
    'window.BlocklyDuinoExampleXmls = window.BlocklyDuinoExampleXmls || {};',
    ''
  ];

  for (const rel of xmlFiles) {
    const fullPath = path.join(EXAMPLES_DIR, rel);
    const key = toPosix(rel);
    const content = normalizeNewlines(await fs.promises.readFile(fullPath, 'utf8')).trim();
    xmlLines.push(`window.BlocklyDuinoExampleXmls[${JSON.stringify(key)}] = ${JSON.stringify(content)};`);
  }
  xmlLines.push('');
  await fs.promises.writeFile(XML_OUTPUT, xmlLines.join('\n'), 'utf8');

  console.log(`Generated ${path.relative(ROOT, LIST_OUTPUT)} (${data.length} examples).`);
  console.log(`Generated ${path.relative(ROOT, XML_OUTPUT)} (${xmlFiles.length} XML files).`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
