// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import { createComponent, createModule, createPage } from "./commands";
import { getSelectedText } from "./utils";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("sup-react.newModule", createModule)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("sup-react.newComponent", createComponent)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("sup-react.newPage", createPage)
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
