import {
  FILENAME_COMMON_EVENTS,
  type Data_CommonEvent,
} from "@sigureya/rpgtypes";
import type {
  FsLib_ReadFile,
  FsLib_WriteFile,
  PathLib_Resolve,
} from "./detail/libTypes";
import { ensureDataPath, readRmmzDataListFile, writeDataFile } from "./detail";

const isCommonEvent = (data: unknown): data is Data_CommonEvent => {
  return !!data && typeof data === "object" && "id" in data;
};

export const ensureCommonEventDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_COMMON_EVENTS);
};

export const writeRmmzCommonEventData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  commonEvents: Data_CommonEvent[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureCommonEventDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, commonEvents, space);
};

export const readRmmzCommonEventData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_CommonEvent[]> => {
  const path: string = ensureCommonEventDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_CommonEvent>(fsLib, path, isCommonEvent);
};
