import { workspace } from "vscode";

export const DEFAULT_MODULE_NAME = workspace.getConfiguration("supercharge")
  .defaultModule;
