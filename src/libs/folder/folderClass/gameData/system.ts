import type PathLib from "node:path";
import type FsLib from "node:fs/promises";
import { FILENAME_STATES, FOLDER_DATA } from "@sigureya/rpgtypes";
const readSystemFile = (
  p: typeof PathLib,
  fs: typeof FsLib,
  gameFolder: string
) => {};

export const systemFilePath = (p: typeof PathLib, gameFolderPath: string) => {
  return p.resolve(gameFolderPath, FOLDER_DATA, FILENAME_STATES);
};
