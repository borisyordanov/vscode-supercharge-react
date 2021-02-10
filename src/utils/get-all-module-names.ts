import { existsSync, readdirSync } from "fs";
import { DEFAULT_SRC_DIR } from "../config";

export const getAllModuleNames = (): string[] => {
  const source = `${DEFAULT_SRC_DIR}/modules`;

  if (!existsSync(source)) {
    return [];
  }

  return readdirSync(source, { withFileTypes: true })
    .filter((dirent: any) => dirent.isDirectory())
    .map((dirent: any) => dirent.name);
};
