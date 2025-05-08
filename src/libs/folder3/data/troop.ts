import type {
  FsLib_ReadFile,
  FsLib_WriteFile,
  PathLib_Resolve,
} from "./detail/libTypes";
import { ensureDataPath, readRmmzDataListFile, writeDataFile } from "./detail";

import { FILENAME_TROOPS, type Data_Troop } from "@sigureya/rpgtypes";

const isDataTroop = (data: unknown): data is Data_Troop => {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    typeof (data as Data_Troop).id === "number"
  );
};

export const ensureTroopDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_TROOPS);
};

export const writeRmmzTroopData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  troops: Data_Troop[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureTroopDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, troops, space);
};

export const readRmmzTroopData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_Troop[]> => {
  const path: string = ensureTroopDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_Troop>(fsLib, path, isDataTroop);
};
