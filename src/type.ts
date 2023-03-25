export type LanguageDataType = {
  name: string;
  fileExtension: string[];
  namingConvension: 'PascalCase' | 'camelCase' | 'snake_case' | 'kebab-case';
  logo: string;
};

export type InputType = {
  name?: string;
  fileExtension?: string;
};
