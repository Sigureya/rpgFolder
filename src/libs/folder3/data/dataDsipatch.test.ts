import { expect, describe, test, vi } from "vitest";
import type FsLib from "node:fs/promises";
import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Weapon,
} from "@sigureya/rpgtypes";
import {
  isDataActor,
  makeActor,
  isDataArmor,
  makeArmor,
  isDataClass,
  isDataEnemy,
  isDataItem,
  isDataSkill,
  isDataState,
  isDataWeapon,
  makeClass,
  makeEnemy,
  makeItem,
  makeSkill,
  makeState,
  makeWeapon,
} from "@sigureya/rpgtypes";
import { readDataFile } from "./detail/indentifideItems";

const makeMockFs = (func: (filepath: string) => Promise<string>) => {
  return {
    readFile: vi.fn(func),
  } as unknown as Pick<typeof FsLib, "readFile">;
};
const makeMockPath = (path: string) => ({
  sep: "/" as const,
  resolve: vi.fn(() => path),
});

describe("readDataFile", () => {
  test("should read file and parse JSON", async () => {
    const MockActor: string = JSON.stringify([null, makeActor()]);
    const mockFs = makeMockFs(async () => MockActor);
    const mockPath = makeMockPath("test/test.json");

    const result = await readDataFile(
      mockFs,
      mockPath,
      "base",
      "test.json",
      (x) => isDataActor(x)
    );
    expect(result).toEqual([makeActor()]);
  });

  test("should return empty array for invalid JSON", async () => {
    const mockFs = makeMockFs(async () => {
      return JSON.stringify({ id: 0 });
    });
    const mockPath = makeMockPath("dummyPath.json");
    const mockFuncIs = vi.fn((_: unknown): _ is unknown => false);
    expect(async () => {
      await readDataFile(
        mockFs,
        mockPath,
        "base",
        "test.json",
        (x): x is unknown => mockFuncIs(x)
      );
    }).rejects.toThrow();
    expect(mockFs.readFile).toHaveBeenCalledWith("dummyPath.json", "utf-8");
    expect(mockFuncIs).toHaveBeenCalledTimes(0);
  });
});

describe("validdateFunction", () => {
  const validateFunctionTest = <T>(
    fn: (data: unknown) => data is T,
    data: T
  ) => {
    test("should return true for valid data", () => {
      expect(fn(data)).toBe(true);
    });
    test("should return false for invalid object", () => {
      expect(fn({})).toBe(false);
    });
    test("should return false for null", () => {
      expect(fn(null)).toBe(false);
    });
  };

  describe("isDataActor", () => {
    const actor: Data_Actor = makeActor();
    validateFunctionTest(isDataActor, actor);
  });

  describe("isDataArmor", () => {
    const armor: Data_Armor = makeArmor();
    validateFunctionTest(isDataArmor, armor);
  });

  describe("isDataClass", () => {
    const data: Data_Class = makeClass();
    validateFunctionTest(isDataClass, data);
  });

  describe("isDataEnemy", () => {
    const data: Data_Enemy = makeEnemy();
    validateFunctionTest(isDataEnemy, data);
  });

  describe("isDataItem", () => {
    const data: Data_Item = makeItem();
    validateFunctionTest(isDataItem, data);
  });

  describe("isDataSkill", () => {
    const data: Data_Skill = makeSkill();
    validateFunctionTest(isDataSkill, data);
  });

  describe("isDataState", () => {
    const data: Data_State = makeState();
    validateFunctionTest(isDataState, data);
  });

  describe("isDataWeapon", () => {
    const data: Data_Weapon = makeWeapon();
    validateFunctionTest(isDataWeapon, data);
  });
});
