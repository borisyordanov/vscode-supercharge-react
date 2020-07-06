import { DavinciPackageNames } from "../types";

export const runDavinciCommand = (
  packageName: DavinciPackageNames,
  command: string,
  options?: string
): string => `npx @toptal/davinci ${packageName} ${command} ${options || ""}`;

export const createDavinciModule = (moduleName: string): string =>
  runDavinciCommand("code", `new module`, `${moduleName}`);

export const createDavinciComponent = (
  componentName: string,
  selectedModuleName: string
): string =>
  runDavinciCommand(
    "code",
    `new component`,
    `${componentName} ${selectedModuleName}`
  );

export const createDavinciPage = (
  pageName: string,
  selectedModuleName: string
): string =>
  runDavinciCommand("code", `new page`, `${pageName} ${selectedModuleName}`);
