import { window } from "vscode";

import { createDavinciModuleCommand, sendToTerminal } from "../utils";

export const createModule = async () => {
  // Display a message box to the user
  const moduleName = await window.showInputBox({
    prompt: "Enter module name",
  });

  if (!moduleName) {
    window.showErrorMessage("Module name must be provided");
    return;
  }

  sendToTerminal(createDavinciModuleCommand(moduleName));
};
