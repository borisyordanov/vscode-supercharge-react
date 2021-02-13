import { window } from "vscode";

import {
  getAllModuleNames,
  createDavinciPageCommand,
  sendToTerminal,
} from "../utils";

export const createPage = async () => {
  const pageName = await window.showInputBox({
    prompt: "Enter page name",
  });

  if (!pageName) {
    window.showErrorMessage("Page name must be provided");
    return;
  }

  const moduleNames = getAllModuleNames();

  if (!moduleNames.length) {
    window.showInformationMessage(
      "No modules were found, creating page in default module"
    );
    sendToTerminal(createDavinciPageCommand(pageName));
    return;
  }

  const selectedModuleName = await window.showQuickPick(moduleNames, {
    placeHolder: "Press Enter to choose default module",
  });

  sendToTerminal(createDavinciPageCommand(pageName, selectedModuleName));
};
