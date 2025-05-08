import { FILENAME_ITEMS, isDataItem, type Data_Item } from "@sigureya/rpgtypes";
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

export const ensureItemDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_ITEMS);
};

export const writeRmmzItemData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  items: Data_Item[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureItemDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, items, space);
};

export const readRmmzItemData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_Item[]> => {
  const path: string = ensureItemDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_Item>(fsLib, path, isDataItem);
};
