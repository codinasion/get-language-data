// This script updates readme for all available languages

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import LanguageData from './data';

const readmePath = join(__dirname, '..', 'README.md');

// Read readme
const readmeText = readFileSync(readmePath, 'utf-8');

// Find the start and end tags
const startTag = '<!-- START: Available Languages -->';
const endTag = '<!-- END: Available Languages -->';
const startIndex = readmeText.indexOf(startTag);
const endIndex = readmeText.indexOf(endTag);

// Generate Table Text
let tableText = '\n| Language | File Extension | Naming Convension | Logo |\n';
tableText += '| --- | --- | --- | --- |\n';
for (const language of LanguageData) {
  tableText += `| ${language.name} | \`${language.fileExtension.join('` `')}\` | ${language.namingConvension} | ![](${
    language.logo
  }) |\n`;
}

// Update readme
const updatedReadmeText =
  readmeText.slice(0, startIndex + startTag.length) + '\n' + tableText + '\n' + readmeText.slice(endIndex);

// Write readme
writeFileSync(readmePath, updatedReadmeText);
