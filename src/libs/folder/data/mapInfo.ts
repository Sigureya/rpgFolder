import type { Data_MapInfo } from "@sigureya/rpgtypes";
import { FILENAME_MAP_INFOS, isDataMapInfo } from "@sigureya/rpgtypes";
import { ensureDataPath, writeDataFile, readRmmzDataListFile } from "./detail";
import type {
  PathLib_Resolve,
  FsLib_WriteFile,
  FsLib_ReadFile,
} from "./detail/libTypes";

export const ensureMapInfoDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_MAP_INFOS);
};

export const writeRmmzMapInfoData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  mapInfos: Data_MapInfo[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureMapInfoDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, mapInfos, space);
};

export const readRmmzMapInfoData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_MapInfo[]> => {
  const path: string = ensureMapInfoDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_MapInfo>(fsLib, path, isDataMapInfo);
};
