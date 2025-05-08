import {
  FILENAME_ACTORS,
  isDataActor,
  type Data_Actor,
} from "@sigureya/rpgtypes";
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

export const ensureActorDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_ACTORS);
};

export const writeRmmzActorData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  actors: Data_Actor[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureActorDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, actors, space);
};

export const readRmmzActorData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_Actor[]> => {
  const path: string = ensureActorDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_Actor>(fsLib, path, isDataActor);
};
