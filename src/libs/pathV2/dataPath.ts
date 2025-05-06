import {
  FILANAME_CLASSES,
  FILENAME_ACTORS,
  FILENAME_ARMORS,
  FILENAME_COMMON_EVENTS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_MAP_INFOS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_SYSTEM,
  FILENAME_TROOPS,
  FILENAME_WEAPONS,
  FOLDER_DATA,
} from "@sigureya/rpgtypes";
import type PathLib from "node:path";

type PathJoin = Pick<typeof PathLib, "resolve" | "sep">;

export const ensureDataPath = (
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

export const ensureMapDataPath = (
  pathLib: PathJoin,
  basePath: string,
  mapId: number
) => {
  const fileName = makeMapFileName(mapId);
  return ensureDataPath(pathLib, basePath, fileName);
};

export const ensureActorDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_ACTORS);
};

export const ensureItemDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_ITEMS);
};

export const ensureEnemyDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_ENEMIES);
};

export const ensureSkillDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_SKILLS);
};

export const ensureTroopDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_TROOPS);
};

export const ensureCommonEventDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_COMMON_EVENTS);
};

export const ensureWeaponDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_WEAPONS);
};

export const ensureArmorDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_ARMORS);
};

export const ensureClassDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILANAME_CLASSES);
};

export const ensureStateDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_STATES);
};

export const ensureMapInfoDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_MAP_INFOS);
};

export const ensureSystemDataPath = (
  pathLib: PathJoin,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_SYSTEM);
};
