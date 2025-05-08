import { FOLDER_DATA, type IdentifiedItems } from "@sigureya/rpgtypes";
import type {
  FsLib_WriteFile,
  FsLib_ReadFile,
  PathLib_Resolve,
} from "./libTypes";

export const normalizeIdentifiedItems = <T>(items: IdentifiedItems<T>): T[] => {
  return items.filter((item): item is T => item !== null);
};

export const denormalizeIdentifiedItems = <T>(
  items: T[]
): IdentifiedItems<T> => {
  return [null, ...items];
};

export const ensureDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string,
  fileName: string
): string => {
  return basePath.endsWith(`${pathLib.sep}${FOLDER_DATA}`)
    ? pathLib.resolve(basePath, fileName)
    : pathLib.resolve(basePath, FOLDER_DATA, fileName);
};

export const validateAndFilterItems = <T>(
  list: unknown,
  fn: (data: unknown) => data is T
): T[] => {
  if (Array.isArray(list)) {
    return list.filter((item) => fn(item));
  }
  throw new Error("Invalid data format");
};

export const writeDataFile = async <T>(
  fsLib: FsLib_WriteFile,
  path: string,
  data: T[],
  space: number = 2
): Promise<void> => {
  const list: [null, ...T[]] = denormalizeIdentifiedItems(data);
  return fsLib.writeFile(path, JSON.stringify(list, null, space), "utf-8");
};

export const readDataFile = async <T>(
  fsLib: FsLib_ReadFile,
  pathLib: PathLib_Resolve,
  basePath: string,
  fileName: string,
  validateFn: (data: unknown) => data is T
): Promise<T[]> => {
  const path: string = ensureDataPath(pathLib, basePath, fileName);
  return readRmmzDataListFile(fsLib, path, validateFn);
};

export const readRmmzDataListFile = async <T>(
  fsLib: FsLib_ReadFile,
  resolvedPath: string,
  validateFn: (data: unknown) => data is T
): Promise<T[]> => {
  const jsonText: string = await fsLib.readFile(resolvedPath, "utf-8");
  const obj = JSON.parse(jsonText);
  return validateAndFilterItems(obj, validateFn);
};
