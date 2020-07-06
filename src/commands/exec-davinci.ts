import * as vscode from "vscode";

import { runDavinciCommand } from "../utils";
import { QuickPickItem } from "vscode";
import { DavinciPackageNames } from "../types";

const execScript = (
  packageName: string,
  command: string,
  options?: string | undefined
) => {
  const terminal = vscode.window.createTerminal();
  terminal.sendText(
    runDavinciCommand(packageName as DavinciPackageNames, command, options),
    true
  );
  terminal.show();
};

interface DavinciQuickPick extends QuickPickItem {
  options?: string;
}

// TODO: Convert options to quick picks
const DAVINCI_CLI: Record<DavinciPackageNames, DavinciQuickPick[]> = {
  ci: [{ label: "danger" }],
  qa: [
    {
      options: "--setupFilesAfterEnv ./my-global-setup.js",
      label: "unit",
      description: "Runs all Jest tests",
    },
    {
      label: "e2e",
      description: "Runs all Cypress tests",
    },
  ],
  engine: [
    {
      options:
        "--https <boolean> --open <boolean> --open-url <url> --skip-type-checking <boolean> --dotenv <path to dotenv file>",
      label: "start",
      description: "Servers your project",
    },
    {
      options: "--dotenv <path to dotenv file> --as-library <boolean>",
      label: "build",
      description: "Builds your project",
    },
    {
      options: "--limit <size with units, e.g. 500kb",
      label: "size",
      description: "Compares your project's bundle against a limit",
    },
    {
      label: "analyze",
      description: "Analyzes bundle dependencies",
    },
    {
      options: "--dotenv <path to dotenv file> --as-library <boolean>",
      label: "compile-package",
      description: "Compiles your package as a library",
    },
  ],
  code: [
    {
      options: "<module name>",
      label: "new module",
      description: "Creates a new module under src/modules",
    },
    {
      options: "<module name> <page name>",
      label: "new page",
      description:
        "Creates a new page under src/modules/<module name>/<page name>",
    },
    {
      options: "<module name> <component name>",
      label: "new component",
      description:
        "Creates a new component under src/modules/<module name>/<component name>",
    },
  ],
  syntax: [
    { label: "init" },
    {
      options: "<path> --check",
      label: "lint code",
      description: "Lints JS/TS",
    },
    {
      options: "<path> --check",
      label: "lint styles",
      description: "Lints styled-components",
    },
  ],
  bootstrap: [
    {
      options: "Specify app name",
      label: "new",
      description:
        "Creates new React application with everything necessary for you to start working as soon as possible. It adds davinci and picasso packages and structures skeleton of app according to Toptal guidelines.",
    },
  ],
};

const DAVINCI_CLI_PACKAGES = Object.keys(DAVINCI_CLI);

const execDavinci = async () => {
  // Display a message box to the user

  const selectedDavinciPackage = await vscode.window.showQuickPick(
    DAVINCI_CLI_PACKAGES
  );

  if (!selectedDavinciPackage) {
    vscode.window.showErrorMessage("Package must be selected");
    return;
  }

  const commandPicker = vscode.window.createQuickPick();
  commandPicker.items =
    DAVINCI_CLI[selectedDavinciPackage as DavinciPackageNames];
  commandPicker.show();

  commandPicker.onDidAccept(async () => {
    const selectedCommand = commandPicker.selectedItems[0] as DavinciQuickPick;
    if (!selectedCommand.options) {
      execScript(selectedDavinciPackage, selectedCommand.label);
      return;
    }

    const options = await vscode.window.showInputBox({
      prompt: selectedCommand.options,
    });

    execScript(selectedDavinciPackage, selectedCommand.label, options);
  });
};

export default execDavinci;
