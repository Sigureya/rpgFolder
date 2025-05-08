import {
  FILENAME_STATES,
  isDataState,
  type Data_State,
} from "@sigureya/rpgtypes";
import type {
  FsLib_ReadFile,
  FsLib_WriteFile,
  PathLib_Resolve,
} from "./detail/libTypes";
import { ensureDataPath, readRmmzDataListFile, writeDataFile } from "./detail";

export const ensureStateDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_STATES);
};

export const writeRmmzStateData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  states: Data_State[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureStateDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, states, space);
};

export const readRmmzStateData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_State[]> => {
  const path: string = ensureStateDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_State>(fsLib, path, isDataState);
};
