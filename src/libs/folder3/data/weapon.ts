import {
  FILENAME_WEAPONS,
  isDataWeapon,
  type Data_Weapon,
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

export const ensureWeaponDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_WEAPONS);
};

export const writeRmmzWeaponData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  weapons: Data_Weapon[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureWeaponDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, weapons, space);
};

export const readRmmzWeaponData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_Weapon[]> => {
  const path: string = ensureWeaponDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_Weapon>(fsLib, path, isDataWeapon);
};
