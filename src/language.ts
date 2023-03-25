import LanguageData from './data';
import type { LanguageDataType, InputType } from './type';

export default function getLanguageData({ name, fileExtension }: InputType): LanguageDataType[] {
  const language = LanguageData.filter((languageData) => {
    if (name) {
      return languageData.name.toLowerCase() === name.toLowerCase();
    } else if (fileExtension) {
      if (fileExtension[0] === '.') {
        fileExtension = fileExtension.slice(1);
      }
      return languageData.fileExtension.includes(fileExtension);
    }
  });

  if (language) {
    return language;
  } else {
    return [];
  }
}
