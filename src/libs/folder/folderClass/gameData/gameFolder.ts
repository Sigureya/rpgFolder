import type { Dirent } from "node:fs";
import {
  FOLDER_DATA,
  FILENAME_ACTORS,
  FILENAME_ARMORS,
  FILANAME_CLASSES,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_SKILLS,
  FILENAME_WEAPONS,
  FILENAME_TROOPS,
  FILENAME_ANIMATIONS,
  FILENAME_TILESET,
  FILENAME_MAP_INFOS,
  FILENAME_SYSTEM,
} from "@sigureya/rpgtypes";
import type { NodeLibs } from "@lib/nodeLib";
const FOLDER_GAMES_ROOT = "./games" as const;

export const gameFolders = async (lib: NodeLibs): Promise<Dirent[]> => {
  const list = await lib.fs.readdir(FOLDER_GAMES_ROOT, { withFileTypes: true });
  return list.filter((dirent) => dirent.isDirectory());
};

const filePath = (lib: NodeLibs, gameFolder: string, fileName: string) => {
  return lib.path.join(FOLDER_GAMES_ROOT, gameFolder, FOLDER_DATA, fileName);
};

export const actorsFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_ACTORS);
};

export const armorsFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_ARMORS);
};

export const classesFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILANAME_CLASSES);
};

export const enemiesFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_ENEMIES);
};

export const itemsFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_ITEMS);
};

export const skillsFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_SKILLS);
};

export const weaponsFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_WEAPONS);
};

export const troopsFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_TROOPS);
};

export const animationsFileName = (
  lib: NodeLibs,
  gameFolder: string
): string => {
  return filePath(lib, gameFolder, FILENAME_ANIMATIONS);
};

export const systemFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_SYSTEM);
};

export const tilesetFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_TILESET);
};
export const mapInfosFileName = (lib: NodeLibs, gameFolder: string): string => {
  return filePath(lib, gameFolder, FILENAME_MAP_INFOS);
};
