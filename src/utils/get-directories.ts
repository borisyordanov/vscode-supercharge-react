import { existsSync, readdirSync } from "fs";

const getDirectories = (source: string): string[] => {
  if (!existsSync(source)) {
    return [];
  }
  return readdirSync(source, { withFileTypes: true })
    .filter((dirent: any) => dirent.isDirectory())
    .map((dirent: any) => dirent.name);
};

export default getDirectories;
