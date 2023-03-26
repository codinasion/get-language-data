import LanguageData from '../data';
import type { RenameFileInputType } from '../type';

import {
  FormatStringToCamelCase,
  FormatStringToKebabCase,
  FormatStringToPascalCase,
  FormatStringToSnakeCase,
} from '@codinasion/tools';

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
      fileSlug = FormatStringToPascalCase(fileSlug);
      break;
    case 'camelCase':
      fileSlug = FormatStringToCamelCase(fileSlug);
      break;
    case 'snake_case':
      fileSlug = FormatStringToSnakeCase(fileSlug);
      break;
    case 'kebab-case':
      fileSlug = FormatStringToKebabCase(fileSlug);
      break;
    default:
      break;
  }

  return `${fileSlug}.${fileExt}`;
}
