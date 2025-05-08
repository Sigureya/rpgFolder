import type PathLib from "node:path";
import type FsLib from "node:fs/promises";
import type { DataMapper } from "./data/types";
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
  isDataEnemy,
  isDataClass,
  isDataItem,
  isDataSkill,
  isDataState,
  isDataWeapon,
  SRC_DATA_ACTOR,
  SRC_DATA_ARMOR,
  SRC_DATA_CLASS,
  SRC_DATA_ITEMS,
  SRC_DATA_SKILL,
  SRC_DATA_STATE,
  SRC_DATA_WEAPON,
  SRC_DATA_ENEMY,
} from "@sigureya/rpgtypes";
import { readDataFile } from "./data/detail/detail";
import { readRmmzActorData } from "./data/actor";
import { readRmmzArmorData } from "./data/armor";
import { readRmmzEnemyData } from "./data/enemy";
import { readRmmzItemData } from "./data/item";

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

export const dispatchHandlers = async <T>(
  fsLib: FsLib_ReadFile,
  pathLib: PathLib_Resolve,
  basePath: string,
  dataMapper: Partial<DataMapper<T>>
): Promise<Record<keyof DataMapper<T>, T | undefined>> => {
  return {
    actor: dataMapper.actor
      ? dataMapper.actor(
          await readRmmzActorData(pathLib, fsLib, basePath),
          SRC_DATA_ACTOR
        )
      : undefined,
    armor: dataMapper.armor
      ? dataMapper.armor(
          await readRmmzArmorData(pathLib, fsLib, basePath),
          SRC_DATA_ARMOR
        )
      : undefined,

    enemy: dataMapper.enemy
      ? dataMapper.enemy(
          await readRmmzEnemyData(pathLib, fsLib, basePath),
          SRC_DATA_ENEMY
        )
      : undefined,
    class: dataMapper.class ? dataMapper.class([], SRC_DATA_CLASS) : undefined,
    item: dataMapper.item
      ? dataMapper.item(
          await readRmmzItemData(pathLib, fsLib, basePath),
          SRC_DATA_ITEMS
        )
      : undefined,

    skill: dataMapper.skill ? dataMapper.skill([], SRC_DATA_SKILL) : undefined,

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
