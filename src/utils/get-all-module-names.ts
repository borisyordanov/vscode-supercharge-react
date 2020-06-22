import * as vscode from "vscode";
import getDirectories from "./get-directories";

const getAllModuleNames = () =>
  getDirectories(`${vscode.workspace.rootPath}/src/modules`);

export default getAllModuleNames;
