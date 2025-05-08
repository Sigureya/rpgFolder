import type { Data_System } from "@sigureya/rpgtypes";
import { FILENAME_SYSTEM } from "@sigureya/rpgtypes";
import type {
  FsLib_ReadFile,
  FsLib_WriteFile,
  PathLib_Resolve,
} from "./detail/libTypes";
import { ensureDataPath } from "./detail";

// 仮置き。型が複雑なので実装は後回し
const isDataSystem = (data: unknown): data is Data_System => {
  return true;
};

export const ensureSystemDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_SYSTEM);
};

export const writeRmmzSystemData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  system: Data_System,
  space: number = 2
): Promise<void> => {
  const path: string = ensureSystemDataPath(pathLib, basePath);
  const text = JSON.stringify(system, null, space);
  return fsLib.writeFile(path, text, "utf8");
};

export const readRmmzSystemData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_System> => {
  const path: string = ensureSystemDataPath(pathLib, basePath);
  const text = await fsLib.readFile(path, "utf8");
  const data = JSON.parse(text);
  if (!isDataSystem(data)) {
    throw new Error(`Invalid system data: ${path}`);
  }
  return data;
};
