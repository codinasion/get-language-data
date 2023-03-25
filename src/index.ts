import LanguageData from './data';
import type { LanguageDataType, InputType } from './type';

export default function Language({ name, fileExtension }: InputType): LanguageDataType[] {
  const language = LanguageData.filter((languageData) => {
    if (name) {
      return languageData.name.toLowerCase() === name.toLowerCase();
    } else if (fileExtension) {
      return languageData.fileExtension.includes(fileExtension);
    }
  });

  if (language) {
    return language;
  } else {
    throw new Error('Language not found');
  }
}
