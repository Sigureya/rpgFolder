import type PathLib from "node:path";
import type FsLib from "node:fs/promises";

import type {
  Data_Actor,
  Data_Item,
  Data_Weapon,
  Data_Armor,
  Data_Enemy,
  Data_Skill,
  Data_Troop,
  Data_Class,
  Data_CommonEvent,
  Data_State,
} from "@sigureya/rpgtypes";
import {
  FILENAME_ACTORS,
  FILENAME_ITEMS,
  FILENAME_WEAPONS,
  FILENAME_ARMORS,
  FILENAME_ENEMIES,
  FILENAME_SKILLS,
  FILENAME_TROOPS,
  FILANAME_CLASSES,
  FILENAME_COMMON_EVENTS,
  FILENAME_STATES,
} from "@sigureya/rpgtypes";
import { readData, writeData } from "./utils";
import type { GameDataFolder } from "./dispatch";

export class GameDataFolderClass implements GameDataFolder {
  constructor(
    private pathLib: typeof PathLib,
    private fsLib: typeof FsLib,
    public readonly name: string,
    public readonly basePath: string
  ) {}

  private async readData<T>(fileName: string): Promise<T[]> {
    return readData(this.pathLib, this.fsLib, this.basePath, fileName);
  }

  private async writeData<T>(fileName: string, data: T[]): Promise<void> {
    return writeData(this.pathLib, this.fsLib, this.basePath, fileName, data);
  }
  async readActors(): Promise<Data_Actor[]> {
    return this.readData<Data_Actor>(FILENAME_ACTORS);
  }

  async writeActors(data: Data_Actor[]): Promise<void> {
    return this.writeData<Data_Actor>(FILENAME_ACTORS, data);
  }

  async readItems(): Promise<Data_Item[]> {
    return this.readData<Data_Item>(FILENAME_ITEMS);
  }

  async writeItems(data: Data_Item[]): Promise<void> {
    return this.writeData<Data_Item>(FILENAME_ITEMS, data);
  }
  async readWeapons(): Promise<Data_Weapon[]> {
    return this.readData<Data_Weapon>(FILENAME_WEAPONS);
  }
  async writeWeapons(data: Data_Weapon[]): Promise<void> {
    return this.writeData<Data_Weapon>(FILENAME_WEAPONS, data);
  }

  async readArmors(): Promise<Data_Armor[]> {
    return this.readData<Data_Armor>(FILENAME_ARMORS);
  }
  async writeArmors(data: Data_Armor[]): Promise<void> {
    return this.writeData<Data_Armor>(FILENAME_ARMORS, data);
  }
  async readEnemies(): Promise<Data_Enemy[]> {
    return this.readData<Data_Enemy>(FILENAME_ENEMIES);
  }
  async writeEnemies(data: Data_Enemy[]): Promise<void> {
    return this.writeData(FILENAME_ENEMIES, data);
  }
  async readSkills(): Promise<Data_Skill[]> {
    return this.readData<Data_Skill>(FILENAME_SKILLS);
  }
  async writeSkills(data: Data_Skill[]): Promise<void> {
    return this.writeData(FILENAME_SKILLS, data);
  }

  async readTroops(): Promise<Data_Troop[]> {
    return this.readData<Data_Troop>(FILENAME_TROOPS);
  }
  async writeTroops(data: Data_Troop[]): Promise<void> {
    return this.writeData(FILENAME_TROOPS, data);
  }
  async readClasses(): Promise<Data_Class[]> {
    return this.readData<Data_Class>(FILANAME_CLASSES);
  }
  async writeClasses(data: Data_Class[]): Promise<void> {
    return this.writeData(FILANAME_CLASSES, data);
  }
  async readCommonEvents(): Promise<Data_CommonEvent[]> {
    return this.readData(FILENAME_COMMON_EVENTS);
  }
  async writeCommonEvents(data: Data_CommonEvent[]): Promise<void> {
    return this.writeData<Data_CommonEvent>(FILENAME_COMMON_EVENTS, data);
  }
  async readStates(): Promise<Data_State[]> {
    return this.readData<Data_State>(FILENAME_STATES);
  }
  async writeStates(data: Data_State[]): Promise<void> {
    return this.writeData<Data_State>(FILENAME_STATES, data);
  }
}
