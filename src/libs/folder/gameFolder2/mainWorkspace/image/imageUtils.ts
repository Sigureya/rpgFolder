import type { Dirent } from "node:fs";
import type PathLib from "node:path";
import type FsLib from "node:fs/promises";
import {
  FOLDER_IMG,
  FOLDER_IMG_BATTLEBACK1,
  FOLDER_IMG_BATTLEBACK2,
  FOLDER_IMG_CHACTERS,
  FOLDER_IMG_ENEMIES,
  FOLDER_IMG_FACES,
  FOLDER_IMG_PARALLACES,
  FOLDER_IMG_PICTURES,
  FOLDER_IMG_SV_ACTORS,
  FOLDER_IMG_SV_ENEMIES,
  FOLDER_IMG_SYSTEM,
  FOLDER_IMG_TILESETS,
  FOLDER_IMG_TITLES1,
  FOLDER_IMG_TITLES2,
} from "@sigureya/rpgtypes";

const isPngFile = (dirent: Dirent): boolean => {
  return dirent.isFile() && dirent.name.endsWith(".png");
};

export const imageFiles = async (
  pathLib: Pick<typeof PathLib, "resolve">,
  fsLib: Pick<typeof FsLib, "readdir">,
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

const BASIC_SUBFOLDERS: ReadonlyArray<string> = [
  FOLDER_IMG_BATTLEBACK1,
  FOLDER_IMG_BATTLEBACK2,
  FOLDER_IMG_CHACTERS,
  FOLDER_IMG_ENEMIES,
  FOLDER_IMG_FACES,
  FOLDER_IMG_PARALLACES,
  FOLDER_IMG_PICTURES,
  FOLDER_IMG_SV_ACTORS,
  FOLDER_IMG_SV_ENEMIES,
  FOLDER_IMG_SYSTEM,
  FOLDER_IMG_TILESETS,
  FOLDER_IMG_TITLES1,
  FOLDER_IMG_TITLES2,
];
export const imageFolderPath = (
  pathLib: Pick<typeof PathLib, "resolve">,
  basePath: string,
  subFolder: string
): string => {
  if (BASIC_SUBFOLDERS.includes(subFolder)) {
    return pathLib.resolve(basePath, FOLDER_IMG, subFolder);
  }
  throw new Error(`Invalid image folder: ${subFolder}`);
};
