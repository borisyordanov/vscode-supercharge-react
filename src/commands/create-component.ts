import { window } from "vscode";

import {
  getAllModuleNames,
  createDavinciComponentCommand,
  sendToTerminal,
} from "../utils";

export const createComponent = async () => {
  const componentName = await window.showInputBox({
    prompt: "Enter component name",
  });

  if (!componentName) {
    window.showErrorMessage("Component name must be provided");
    return;
  }

  const moduleNames = getAllModuleNames();

  if (!moduleNames.length) {
    window.showInformationMessage(
      "No modules were found, creating component in default module"
    );
    sendToTerminal(createDavinciComponentCommand(componentName));
    return;
  }

  const selectedModuleName = await window.showQuickPick(moduleNames, {
    placeHolder: "Press Enter to choose default module",
  });

  sendToTerminal(
    createDavinciComponentCommand(componentName, selectedModuleName)
  );
};
