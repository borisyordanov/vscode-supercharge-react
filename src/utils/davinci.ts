import { DEFAULT_MODULE_NAME } from "../config";
import { DavinciPackages } from "../types";

export const createDavinciTerminalCommand = (
  packageName: DavinciPackages,
  command: string,
  options?: string
): string => {
  const terminalCommand = `npx @toptal/davinci ${packageName} ${command}`;

  if (options) {
    return `${terminalCommand} ${options}`;
  }
  return terminalCommand;
};

export const createDavinciModuleCommand = (moduleName = DEFAULT_MODULE_NAME) =>
  createDavinciTerminalCommand(
    DavinciPackages.code,
    `new module`,
    `${moduleName}`
  );

export const createDavinciComponentCommand = (
  componentName: string,
  selectedModuleName = DEFAULT_MODULE_NAME
) =>
  createDavinciTerminalCommand(
    DavinciPackages.code,
    `new component`,
    `${componentName} ${selectedModuleName}`
  );

export const createDavinciPageCommand = (
  pageName: string,
  selectedModuleName = DEFAULT_MODULE_NAME
) =>
  createDavinciTerminalCommand(
    DavinciPackages.code,
    `new page`,
    `${pageName} ${selectedModuleName}`
  );
