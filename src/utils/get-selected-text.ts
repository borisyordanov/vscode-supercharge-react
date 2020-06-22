import * as vscode from "vscode";

const getSelectedText = () => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const selection = editor.selection;
    return editor.document.getText(selection);
  } else {
    return null;
  }
};

export default getSelectedText;
