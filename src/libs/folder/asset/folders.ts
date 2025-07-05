import type PathLib from "node:path";
import { AUDIO_FOLDERS, IMAGE_FOLDERS } from "./constants";
import { ensurePath } from "./ensure";
import { FOLDER_AUDIO, FOLDER_IMG } from "@sigureya/rpgtypes";

export const imageFolders = (
  pathLib: typeof PathLib,
  basePath: string
): string[] => {
  return IMAGE_FOLDERS.map((folder) =>
    ensurePath(pathLib, basePath, FOLDER_IMG, folder)
  );
};

export const audioFolders = (
  pathLib: typeof PathLib,
  basePath: string
): string[] => {
  return AUDIO_FOLDERS.map((folder) =>
    ensurePath(pathLib, basePath, FOLDER_AUDIO, folder)
  );
};
