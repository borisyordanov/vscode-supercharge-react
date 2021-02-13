import { existsSync, readdirSync } from "fs";
import { workspace } from "vscode";
import * as path from "path";
import { DEFAULT_MODULE_NAME } from "../config";

const decorateDefaultModuleName = (name: string) => {
  if (name === DEFAULT_MODULE_NAME) {
    return `${name} (default)`;
  }
  return name;
};

const extractDirectoryNames = (source: string): string[] =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => decorateDefaultModuleName(dirent.name));

export const getAllModuleNames = (): string[] => {
  if (!workspace.workspaceFolders?.length) {
    return [];
  }
  const modulesDirectory = path.join(
    workspace.workspaceFolders[0].uri.fsPath,
    `/src/modules`
  );

  if (!existsSync(modulesDirectory)) {
    return [];
  }

  return extractDirectoryNames(modulesDirectory);
};
