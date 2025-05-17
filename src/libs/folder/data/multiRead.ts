import type PathLib from "node:path";
import type FsLib from "node:fs/promises";
import type { DataMapper } from "./features/types";
import {
  SRC_DATA_ACTOR,
  SRC_DATA_ARMOR,
  SRC_DATA_CLASS,
  SRC_DATA_COMMON_EVNET,
  SRC_DATA_ENEMY,
  SRC_DATA_ITEMS,
  SRC_DATA_SKILL,
  SRC_DATA_STATE,
  SRC_DATA_TROOP,
  SRC_DATA_WEAPON,
} from "@sigureya/rpgtypes";
import {
  readRmmzActorData,
  readRmmzArmorData,
  readRmmzClassData,
  readRmmzCommonEventData,
  readRmmzEnemyData,
  readRmmzItemData,
  readRmmzSkillData,
  readRmmzStateData,
  readRmmzTroopData,
  readRmmzWeaponData,
} from "./features";
type FsLib_ReadFile = Pick<typeof FsLib, "readFile">;
type PathLib_Resolve = Pick<typeof PathLib, "resolve" | "sep">;

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
    class: dataMapper.class
      ? dataMapper.class(
          await readRmmzClassData(pathLib, fsLib, basePath),
          SRC_DATA_CLASS
        )
      : undefined,
    item: dataMapper.item
      ? dataMapper.item(
          await readRmmzItemData(pathLib, fsLib, basePath),
          SRC_DATA_ITEMS
        )
      : undefined,

    skill: dataMapper.skill
      ? dataMapper.skill(
          await readRmmzSkillData(pathLib, fsLib, basePath),
          SRC_DATA_SKILL
        )
      : undefined,

    state: dataMapper.state
      ? dataMapper.state(
          await readRmmzStateData(pathLib, fsLib, basePath),
          SRC_DATA_STATE
        )
      : undefined,
    weapon: dataMapper.weapon
      ? dataMapper.weapon(
          await readRmmzWeaponData(pathLib, fsLib, basePath),
          SRC_DATA_WEAPON
        )
      : undefined,

    troop: dataMapper.troop
      ? dataMapper.troop(
          await readRmmzTroopData(pathLib, fsLib, basePath),
          SRC_DATA_TROOP
        )
      : undefined,
    commonEvent: dataMapper.commonEvent
      ? dataMapper.commonEvent(
          await readRmmzCommonEventData(pathLib, fsLib, basePath),
          SRC_DATA_COMMON_EVNET
        )
      : undefined,
  };
};
