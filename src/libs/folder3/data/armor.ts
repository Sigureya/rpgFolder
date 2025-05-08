import {
  FILENAME_ARMORS,
  isDataArmor,
  type Data_Armor,
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

export const ensureArmorDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_ARMORS);
};

export const writeRmmzArmorData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  armors: Data_Armor[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureArmorDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, armors, space);
};

export const readRmmzArmorData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_Armor[]> => {
  const path: string = ensureArmorDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_Armor>(fsLib, path, isDataArmor);
};
