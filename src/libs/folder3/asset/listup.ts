import type { Dirent } from "node:fs";
import type { FsLib_ReadDir, PathLib_Resolve } from "../data/detail/libTypes";
import type PathLib from "node:path";
import { ensurePath } from "./ensure";
import { FOLDER_IMG, type ImageFolders } from "@sigureya/rpgtypes";

const xxx = (
  pathLib: typeof PathLib,
  fsLib: FsLib_ReadDir,
  basePath: string,
  folderName: string,
  subFolderName: string = ""
): Promise<Dirent[]> => {
  return fsLib.readdir(
    ensurePath(pathLib, basePath, folderName, subFolderName),
    { withFileTypes: true }
  );
};

export const listupImageFiles = async (
  pathLib: typeof PathLib,
  fsLib: FsLib_ReadDir,
  basePath: string,
  subFolderName: ImageFolders
): Promise<Dirent[]> => {
  const dirents = await xxx(
    pathLib,
    fsLib,
    basePath,
    FOLDER_IMG,
    subFolderName
  );
  return dirents.filter(
    (dirent) => dirent.isFile() && dirent.name.endsWith(".png")
  );
};
