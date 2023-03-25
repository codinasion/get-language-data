// This script helps to understand that how many languages have the same file extension
// Run this script with ts-node
// $ ts-node src/AnalyzeExtensions.ts

import LanguageData from './data';

let extensions: string[] = [];

for (const language of LanguageData) {
  for (const extension of language.fileExtension) {
    // // Test
    // if (extensions.includes(extension)) {
    //   console.log(`Duplicate extension: ${extension} (${language.name})`);
    // }
    extensions.push(extension);
  }
}

extensions = extensions.sort();

// // Test
// console.log(extensions);
