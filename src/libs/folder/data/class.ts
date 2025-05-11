import type {
  FsLib_ReadFile,
  FsLib_WriteFile,
  PathLib_Resolve,
} from "./detail/libTypes";
import {
  FILENAME_CLASSES,
  isDataClass,
  type Data_Class,
} from "@sigureya/rpgtypes";
import { ensureDataPath, readRmmzDataListFile, writeDataFile } from "./detail";

export const ensureClassDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_CLASSES);
};

export const writeRmmzClassData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  armors: Data_Class[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureClassDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, armors, space);
};

export const readRmmzClassData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_Class[]> => {
  const path: string = ensureClassDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_Class>(fsLib, path, isDataClass);
};
