export const createDavinciModule = (moduleName: string): string =>
  `npx davinci code new module ${moduleName}`;

export const createDavinciComponent = (
  componentName: string,
  selectedModuleName: string
): string =>
  `npx davinci code new component ${componentName} ${selectedModuleName}`;

export const createDavinciPage = (
  pageName: string,
  selectedModuleName: string
): string => `npx davinci code new page ${pageName} ${selectedModuleName}`;
