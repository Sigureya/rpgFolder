import type { Dirent } from "node:fs";
import type PathLib from "node:path";
import { ensurePath } from "./ensure";
import type { AudioFolders, ImageFolders } from "@sigureya/rpgtypes";
import { FOLDER_IMG, FOLDER_AUDIO } from "@sigureya/rpgtypes";
import type { AudioDirent, ImageDirent } from "./types/assetPath";
import type { FsLib_ReadDir } from "folder/data/features/detail/libTypes";

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

export const isAudioFileExtension = <D extends { name: string }>(dirent: D) => {
  return areExtention(dirent, ".ogg") || areExtention(dirent, ".m4a");
};

export const isImageFileExtension = <D extends { name: string }>(dirent: D) => {
  return areExtention(dirent, ".png");
};

export const isImageDirent = (dirent: Dirent): dirent is ImageDirent => {
  return dirent.isFile() && isImageFileExtension(dirent);
};

export const isAudioDirent = (dirent: Dirent): dirent is AudioDirent => {
  return dirent.isFile() && isAudioFileExtension(dirent);
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
