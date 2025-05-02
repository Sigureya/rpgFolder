import {
  FILENAME_ITEMS,
  FILENAME_ENEMIES,
  FILENAME_SKILLS,
  FILENAME_TROOPS,
  FILENAME_COMMON_EVENTS,
  FILENAME_WEAPONS,
  FILANAME_CLASSES,
  FILENAME_STATES,
  FILENAME_ACTORS,
  FILENAME_ARMORS,
  FILENAME_MAP_INFOS,
  FILENAME_SYSTEM,
  FOLDER_DATA,
} from "@sigureya/rpgtypes";
import type PathLib from "node:path";

type PathJoin = Pick<typeof PathLib, "resolve" | "sep">;

const ensureFolderPath = (
  pathLib: PathJoin,
  basePath: string,
  fileName: string
): string => {
  return basePath.endsWith(`${pathLib.sep}${FOLDER_DATA}`)
    ? pathLib.resolve(basePath, fileName)
    : pathLib.resolve(basePath, FOLDER_DATA, fileName);
};

const makeMapFileName = (mapId: number) => {
  return `Map${String(mapId).padStart(3, "0")}.json` as const;
};

export const ensureMapFile = (
  pathLib: PathJoin,
  basePath: string,
  mapId: number
) => {
  const fileName = makeMapFileName(mapId);
  return ensureFolderPath(pathLib, basePath, fileName);
};

export const ensureActorFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_ACTORS);
};

export const ensureItemFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_ITEMS);
};
export const ensureWeaponFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_WEAPONS);
};
export const ensureArmorFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_ARMORS);
};
export const ensureEnemyFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_ENEMIES);
};
export const ensureSkillFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_SKILLS);
};

export const ensureTroopFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_TROOPS);
};
export const ensureClassFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILANAME_CLASSES);
};
export const ensureStateFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_STATES);
};

export const ensureCommonEventFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_COMMON_EVENTS);
};

export const ensureMapInfoFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_MAP_INFOS);
};

export const ensureSystemFilePath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureFolderPath(pathLib, basePath, FILENAME_SYSTEM);
};
