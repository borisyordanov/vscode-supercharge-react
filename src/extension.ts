// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext } from "vscode";

import {
  createComponent,
  createModule,
  createPage,
  execDavinci,
} from "./commands";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand("sup-react.newModule", createModule)
  );

  context.subscriptions.push(
    commands.registerCommand("sup-react.newComponent", createComponent)
  );

  context.subscriptions.push(
    commands.registerCommand("sup-react.newPage", createPage)
  );

  context.subscriptions.push(
    commands.registerCommand("sup-react.execDavinci", execDavinci)
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
