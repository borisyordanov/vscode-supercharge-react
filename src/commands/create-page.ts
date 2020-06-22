import * as vscode from "vscode";

import {
  getAllModuleNames,
  createDavinciModule,
  createDavinciPage,
} from "../utils";
import { DEFAULT_MODULE_NAME } from "../config";

const execScript = (pageName: string, moduleName: string) => {
  const terminal = vscode.window.createTerminal();
  terminal.sendText(createDavinciPage(pageName, moduleName), true);
  terminal.show();
};

const createPage = async () => {
  // Display a message box to the user
  const pageName = await vscode.window.showInputBox({
    prompt: "Enter page name",
  });

  if (!pageName) {
    vscode.window.showErrorMessage("Page name must be provided");
    return;
  }

  const moduleNames = getAllModuleNames();

  if (!moduleNames.length) {
    createDavinciModule(DEFAULT_MODULE_NAME);
    execScript(pageName, DEFAULT_MODULE_NAME);
    return;
  }

  const selectedModuleName = await vscode.window.showQuickPick(moduleNames);

  execScript(pageName, selectedModuleName || DEFAULT_MODULE_NAME);
};
export default createPage;
