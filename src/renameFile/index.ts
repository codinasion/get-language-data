import LanguageData from '../data';
import type { RenameFileInputType } from '../type';

import { FormatToCamelCase, FormatToKebabCase, FormatToPascalCase, FormatToSnakeCase } from 'codinasion-tools';

export default function renameFile({ name, fileExtension, fileName = 'file-name' }: RenameFileInputType): string {
  const language = LanguageData.filter((languageData) => {
    if (name) {
      return languageData.name.toLowerCase() === name.toLowerCase();
    } else if (fileExtension) {
      let tempFileExtension = '';
      if (fileExtension[0] === '.') {
        tempFileExtension = fileExtension.slice(1);
      }
      return languageData.fileExtension.includes(tempFileExtension);
    } else if (fileName) {
      const tempFileExtension = fileName.split('.').pop();
      if (tempFileExtension) {
        return languageData.fileExtension.includes(tempFileExtension);
      }
    }
  });

  const namingConvension = language[0].namingConvension;
  let fileSlug = fileName.split('.')[0];
  const fileExt = fileName.split('.').pop();

  switch (namingConvension) {
    case 'PascalCase':
      fileSlug = FormatToPascalCase(fileSlug);
      break;
    case 'camelCase':
      fileSlug = FormatToCamelCase(fileSlug);
      break;
    case 'snake_case':
      fileSlug = FormatToSnakeCase(fileSlug);
      break;
    case 'kebab-case':
      fileSlug = FormatToKebabCase(fileSlug);
      break;
    default:
      break;
  }

  return `${fileSlug}.${fileExt}`;
}
