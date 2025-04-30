import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Troop,
  Data_Weapon,
  Data_CommonEvent,
} from "@sigureya/rpgtypes";
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
} from "@sigureya/rpgtypes";
export interface DataMapper<T> {
  actor: (data: Data_Actor[], fileName: string) => T;
  armor: (data: Data_Armor[], fileName: string) => T;
  enemy: (data: Data_Enemy[], fileName: string) => T;
  class: (data: Data_Class[], fileName: string) => T;
  item: (data: Data_Item[], fileName: string) => T;
  skill: (data: Data_Skill[], fileName: string) => T;
  state: (data: Data_State[], fileName: string) => T;
  troop: (data: Data_Troop[], fileName: string) => T;
  weapon: (data: Data_Weapon[], fileName: string) => T;
  commonEvent: (data: Data_CommonEvent[], fileName: string) => T;
}

export interface GameDataFolder {
  readActors(): Promise<Data_Actor[]>;
  readArmors(): Promise<Data_Armor[]>;
  readEnemies(): Promise<Data_Enemy[]>;
  readClasses(): Promise<Data_Class[]>;

  readItems(): Promise<Data_Item[]>;
  readSkills(): Promise<Data_Skill[]>;
  readStates(): Promise<Data_State[]>;
  readTroops(): Promise<Data_Troop[]>;
  readWeapons(): Promise<Data_Weapon[]>;
  readCommonEvents(): Promise<Data_CommonEvent[]>;
}

export const mappingData = async <T>(
  folder: GameDataFolder,
  mapper: Partial<DataMapper<T>>
): Promise<{ [k in keyof DataMapper<T>]: T | undefined }> => {
  return {
    actor: mapper.actor
      ? mapper.actor(await folder.readActors(), FILENAME_ACTORS)
      : undefined,
    armor: mapper.armor
      ? mapper.armor(await folder.readArmors(), FILENAME_ARMORS)
      : undefined,
    enemy: mapper.enemy
      ? mapper.enemy(await folder.readEnemies(), FILENAME_ENEMIES)
      : undefined,
    class: mapper.class
      ? mapper.class(await folder.readClasses(), FILANAME_CLASSES)
      : undefined,
    item: mapper.item
      ? mapper.item(await folder.readItems(), FILENAME_ITEMS)
      : undefined,
    skill: mapper.skill
      ? mapper.skill(await folder.readSkills(), FILENAME_SKILLS)
      : undefined,
    state: mapper.state
      ? mapper.state(await folder.readStates(), FILENAME_STATES)
      : undefined,
    troop: mapper.troop
      ? mapper.troop(await folder.readTroops(), FILENAME_TROOPS)
      : undefined,
    weapon: mapper.weapon
      ? mapper.weapon(await folder.readWeapons(), FILENAME_WEAPONS)
      : undefined,
    commonEvent: mapper.commonEvent
      ? mapper.commonEvent(
          await folder.readCommonEvents(),
          FILENAME_COMMON_EVENTS
        )
      : undefined,
  };
};
