import { window } from "vscode";

export const sendToTerminal = (command: string) => {
  const terminal = window.activeTerminal || window.createTerminal();
  terminal.sendText(command, true);
  terminal.show();
};
