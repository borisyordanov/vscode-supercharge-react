import * as vscode from "vscode";

import { createDavinciModule } from "../utils";

const createModule = async () => {
  // Display a message box to the user
  const moduleName = await vscode.window.showInputBox({
    prompt: "Enter module name",
  });

  if (!moduleName) {
    vscode.window.showErrorMessage("Module name must be provided");
    return;
  }

  const terminal = vscode.window.createTerminal();
  terminal.sendText(createDavinciModule(moduleName), true);
  terminal.show();
};

export default createModule;
