import {
  FILENAME_ENEMIES,
  isDataEnemy,
  type Data_Enemy,
} from "@sigureya/rpgtypes";
import type {
  FsLib_ReadFile,
  FsLib_WriteFile,
  PathLib_Resolve,
} from "./detail/libTypes";
import {
  ensureDataPath,
  readRmmzDataListFile,
  writeDataFile,
} from "./detail/indentifideItems";

export const ensureEnemyDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_ENEMIES);
};

export const writeRmmzEnemyData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  enemies: Data_Enemy[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureEnemyDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, enemies, space);
};

export const readRmmzEnemyData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_Enemy[]> => {
  const path: string = ensureEnemyDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_Enemy>(fsLib, path, isDataEnemy);
};
