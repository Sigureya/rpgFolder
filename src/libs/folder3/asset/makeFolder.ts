import type PathLib from "node:path";
import type FsLib from "node:fs/promises";
import { ensurePath } from "./ensure";
import { FOLDER_DATA, FOLDER_IMG } from "@sigureya/rpgtypes";
import { AUDIO_FOLDES, IMAGE_FOLDERS } from "./constants";

const makeFolder = (
  pathLib: typeof PathLib,
  fsLib: typeof FsLib,
  basePath: string,
  folderName: string,
  subFolderName: string
): Promise<string | undefined> => {
  const path = ensurePath(pathLib, basePath, folderName, subFolderName);
  return fsLib.mkdir(path, {
    recursive: true,
  });
};

export const makeImageFolders = (
  pathLib: typeof PathLib,
  fsLib: typeof FsLib,
  basePath: string
): Promise<string | undefined>[] => {
  return IMAGE_FOLDERS.map((folder) => {
    return makeFolder(pathLib, fsLib, basePath, FOLDER_IMG, folder);
  });
};

export const makeAudioFolders = (
  pathLib: typeof PathLib,
  fsLib: typeof FsLib,
  basePath: string
): Promise<string | undefined>[] => {
  return AUDIO_FOLDES.map((folder) => {
    return makeFolder(pathLib, fsLib, basePath, FOLDER_IMG, folder);
  });
};

export const makeDataFoldes = (
  pathLib: typeof PathLib,
  fsLib: typeof FsLib,
  basePath: string
): Promise<string | undefined>[] => {
  return [makeFolder(pathLib, fsLib, basePath, FOLDER_DATA, "")];
};
