import type { Dirent } from "node:fs";
import type PathLib from "node:path";
import type FsLib from "node:fs/promises";
import { FOLDER_IMG } from "@sigureya/rpgtypes";

export const isPngFile = (dirent: Dirent): boolean => {
  return dirent.isFile() && dirent.name.endsWith(".png");
};

export const imageFiles = async (
  pathLib: typeof PathLib,
  fsLib: typeof FsLib,
  basePath: string,
  subFolder: string
): Promise<Dirent[]> => {
  const path: string = imageFolderPath(pathLib, basePath, subFolder);
  return (
    await fsLib.readdir(path, {
      withFileTypes: true,
    })
  ).filter(isPngFile);
};

export const imageFolderPath = (
  pathLib: typeof PathLib,
  basePath: string,
  subFolder: string
): string => {
  return pathLib.resolve(basePath, FOLDER_IMG, subFolder);
};
