import { FOLDER_DATA, FILENAME_ACTORS } from "@sigureya/rpgtypes";
import type PathLib2 from "node:path";

type PathLib_Resolve = Pick<typeof PathLib2, "resolve">;

const filePath2 = (
  lib: PathLib_Resolve,
  baseFolder: string,
  fileName: string
) => {
  return lib.resolve(baseFolder, FOLDER_DATA, fileName);
};

export const actorsFilePath = (
  lib: PathLib_Resolve,
  gameFolder: string
): string => {
  return filePath2(lib, gameFolder, FILENAME_ACTORS);
};
