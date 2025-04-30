import { FOLDER_GAMES_ROOT } from "@constants";
import type { Dirent } from "node:fs";
import type FsLib from "node:fs/promises";

export const gamePrejectFolders = async (
  fsLib: typeof FsLib
): Promise<Dirent[]> => {
  const list = await fsLib.readdir(FOLDER_GAMES_ROOT, { withFileTypes: true });
  return list.filter((dirent) => dirent.isDirectory());
};
