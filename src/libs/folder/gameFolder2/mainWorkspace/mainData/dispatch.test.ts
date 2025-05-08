import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { DataMapper, GameDataFolder } from "./dispatch";
import { mappingData } from "./dispatch";
import {
  makeTroopData,
  makeCommonEventData,
  makeActorData,
  makeArmorData,
  makeClassData,
  makeEnemyData,
  makeItemData,
  makeSkillData,
  makeStateData,
  makeWeaponData,
} from "@sigureya/rpgtypes";

const makeMockFolder = (): MockedObject<GameDataFolder> => ({
  readActors: vi.fn(() => Promise.resolve([makeActorData()])),
  readArmors: vi.fn(() => Promise.resolve([makeArmorData()])),
  readEnemies: vi.fn(() => Promise.resolve([makeEnemyData()])),
  readClasses: vi.fn(() => Promise.resolve([makeClassData()])),
  readItems: vi.fn(() => Promise.resolve([makeItemData()])),
  readSkills: vi.fn(() => Promise.resolve([makeSkillData()])),
  readStates: vi.fn(() => Promise.resolve([makeStateData()])),
  readTroops: vi.fn(() => Promise.resolve([makeTroopData()])),
  readWeapons: vi.fn(() => Promise.resolve([makeWeaponData()])),
  readCommonEvents: vi.fn(() => Promise.resolve([makeCommonEventData()])),
});

describe("mappingData", () => {
  const mockFolder = makeMockFolder();
  test("should map data using provided mapper functions", async () => {
    const mapper: Partial<
      DataMapper<{ id: number; name: string; type: string }>
    > = {
      actor: (data) => ({ type: "actor", id: data[0].id, name: data[0].name }),
      armor: (data) => ({ type: "armor", id: data[0].id, name: data[0].name }),
    };

    const result = await mappingData(mockFolder, mapper);
    expect(result.actor).toEqual({
      type: "actor",
      id: 0,
      name: "",
    });
    expect(result.armor).toEqual({
      type: "armor",
      id: 0,
      name: "",
    });

    expect(result.enemy).toBeUndefined();
    expect(result.class).toBeUndefined();
  });

  test("should return undefined for keys without mapper functions", async () => {
    const mapper: Partial<DataMapper<string>> = {};

    const result = await mappingData(mockFolder, mapper);

    expect(result.actor).toBeUndefined();
    expect(result.armor).toBeUndefined();
    expect(result.enemy).toBeUndefined();
  });

  test("should call the correct folder methods", async () => {
    const mapper: Partial<DataMapper<string>> = {
      actor: (data) => `Mapped ${data[0].name}`,
      weapon: (data) => `Mapped ${data[0].name}`,
    };

    await mappingData(mockFolder, mapper);

    expect(mockFolder.readActors).toHaveBeenCalled();
    expect(mockFolder.readWeapons).toHaveBeenCalled();
    //    expect(mockFolder.readArmors).not.toHaveBeenCalled();
  });
});
