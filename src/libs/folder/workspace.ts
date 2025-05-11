import { ensureDataFolderPath } from "./data/detail";
import type { PathLib_Resolve, FsLib_WriteFile } from "./data/detail/libTypes";

export const makeDataFiels = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string
) => {
  const path = ensureDataFolderPath(pathLib, basePath);
};
