import type PathLib from "node:path";
import type FsLib from "node:fs/promises";
import type { DataMapper } from "./types";
import { ensureDataPath } from "src/libs/pathV2";
import type { Data_CommonEvent, Data_Troop } from "@sigureya/rpgtypes";
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
  isDataActor,
  isDataArmor,
  isDataEnemy,
  isDataClass,
  isDataItem,
  isDataSkill,
  isDataState,
  isDataWeapon,
} from "@sigureya/rpgtypes";

type FsLib_ReadFile = Pick<typeof FsLib, "readFile">;
type PathLib_Resolve = Pick<typeof PathLib, "resolve" | "sep">;

export const callConvertHandler = async <T, R>(
  fsLib: FsLib_ReadFile,
  pathLib: PathLib_Resolve,
  basePath: string,
  fileName: string,
  validateFn: (data: unknown) => data is T,
  ConvertFn?: (list: T[], fileName: string) => R
): Promise<R | undefined> => {
  if (!ConvertFn) {
    return undefined;
  }
  try {
    const list: T[] = await readDataFile(
      fsLib,
      pathLib,
      basePath,
      fileName,
      validateFn
    );
    return ConvertFn(list, fileName);
  } catch {
    // 例外発生時は全部undefinedにする。詳細なエラーチェックは後で作る
    return undefined;
  }
};

export const readDataFile = async <T>(
  fsLib: FsLib_ReadFile,
  pathLib: PathLib_Resolve,
  basePath: string,
  fileName: string,
  validateFn: (data: unknown) => data is T
): Promise<T[]> => {
  const path: string = ensureDataPath(pathLib, basePath, fileName);
  const jsonText: string = await fsLib.readFile(path, "utf-8");
  const obj = JSON.parse(jsonText);
  if (!Array.isArray(obj)) {
    throw new Error(`Invalid data format in ${fileName}`);
  }
  return obj.filter((item) => validateFn(item));
};

export const dispatchHandlers = async <T>(
  fsLib: FsLib_ReadFile,
  pathLib: PathLib_Resolve,
  basePath: string,
  dataMapper: Partial<DataMapper<T>>
): Promise<Record<keyof DataMapper<T>, T | undefined>> => {
  return {
    actor: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILENAME_ACTORS,
      isDataActor,
      dataMapper.actor
    ),
    armor: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILENAME_ARMORS,
      isDataArmor,
      dataMapper.armor
    ),
    enemy: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILENAME_ENEMIES,
      isDataEnemy,
      dataMapper.enemy
    ),
    class: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILANAME_CLASSES,
      isDataClass,
      dataMapper.class
    ),
    item: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILENAME_ITEMS,
      isDataItem,
      dataMapper.item
    ),
    skill: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILENAME_SKILLS,
      isDataSkill,
      dataMapper.skill
    ),
    state: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILENAME_STATES,
      isDataState,
      dataMapper.state
    ),
    weapon: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILENAME_WEAPONS,
      isDataWeapon,
      dataMapper.weapon
    ),
    troop: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILENAME_TROOPS,
      (data): data is Data_Troop => !!data, // troopのテストは未実装なので、仮でtrueを返す
      dataMapper.troop
    ),
    commonEvent: await callConvertHandler(
      fsLib,
      pathLib,
      basePath,
      FILENAME_COMMON_EVENTS,
      (data): data is Data_CommonEvent => !!data, // commonEventのテストは未実装なので、仮でtrueを返す
      dataMapper.commonEvent
    ),
  };
};
