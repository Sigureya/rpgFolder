import type { Dirent } from "node:fs";
import type { FsLib_ReadDir } from "../data/detail/libTypes";
import type PathLib from "node:path";
import { ensurePath } from "./ensure";
import type { AudioFolders, ImageFolders } from "@sigureya/rpgtypes";
import { FOLDER_IMG, FOLDER_AUDIO } from "@sigureya/rpgtypes";
import type { AudioDirent, ImageDirent } from "./types/assetPath";

export const listupImageFiles = async (
  pathLib: typeof PathLib,
  fsLib: FsLib_ReadDir,
  basePath: string,
  subFolderName: ImageFolders
): Promise<ImageDirent[]> => {
  const dirPath = ensurePath(pathLib, basePath, FOLDER_IMG, subFolderName);
  const dirents = await fsLib.readdir(dirPath, { withFileTypes: true });
  return dirents.filter(isImageDirent);
};

const areExtention = <D extends { name: string }, Ext extends `.${string}`>(
  dirent: D,
  ext: Ext
): dirent is D & { name: `${string}${Ext}` } => {
  return dirent.name.endsWith(ext);
};

export const isImageDirent = (dirent: Dirent): dirent is ImageDirent => {
  if (dirent.isFile()) {
    return areExtention(dirent, ".png");
  }
  return false;
};

export const isAudioDirent = (dirent: Dirent): dirent is AudioDirent => {
  if (dirent.isFile()) {
    return areExtention(dirent, ".ogg") || areExtention(dirent, ".mp3");
  }
  return false;
};

export const listupAudioFiles = async (
  pathLib: typeof PathLib,
  fsLib: FsLib_ReadDir,
  basePath: string,
  subFolderName: AudioFolders
): Promise<AudioDirent[]> => {
  const dirPath = ensurePath(pathLib, basePath, FOLDER_AUDIO, subFolderName);
  const dirents = await fsLib.readdir(dirPath, { withFileTypes: true });
  return dirents.filter(isAudioDirent);
};
