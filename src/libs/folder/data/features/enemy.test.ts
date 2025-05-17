import { expect, describe, test, vi } from "vitest";
import {
  ensureEnemyDataPath,
  readRmmzEnemyData,
  writeRmmzEnemyData,
} from "./enemy";

import type { Data_Enemy } from "@sigureya/rpgtypes";
import {
  FILENAME_ENEMIES,
  makeEnemyData,
  isDataEnemy,
} from "@sigureya/rpgtypes";

describe("ensureEnemyDataPath", () => {
  const makePathLib = () => {
    return {
      resolve: vi.fn((...args: string[]) => args.join("/")),
      sep: "/" as const,
    };
  };
  const expectedPath = `base/path/data/${FILENAME_ENEMIES}` as const;
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureEnemyDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzEnemyData", async () => {
  const mockPathLib = {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const enemies: Data_Enemy[] = [makeEnemyData()];
  const space = 2;
  await writeRmmzEnemyData(mockPathLib, mockFs, basePath, enemies, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should write enemy data to the correct path", async () => {
    expect(a).toBe(`base/path/data/${FILENAME_ENEMIES}`);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", async () => {
    const expectedData: [null, ...Data_Enemy[]] = JSON.parse(b);
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(enemies[0]);
  });
});

describe("readRmmzEnemyData", () => {
  const mockPathLib = {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";
  test("should return an empty array when the file contains only null", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzEnemyData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
  test("should return the correct enemy data", async () => {
    const enemyData = [makeEnemyData()];
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, ...enemyData]));
    const result = await readRmmzEnemyData(mockPathLib, mockFs, basePath);
    expect(result).toEqual(enemyData);
  });
  test("should return an empty array when the file is empty", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([]));
    const result = await readRmmzEnemyData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
});

describe("isDataEnemy", () => {
  test("should return true for valid Data_Enemy", () => {
    const enemy = makeEnemyData();
    expect(isDataEnemy(enemy)).toBe(true);
  });

  test("should return false for invalid Data_Enemy", () => {
    const invalidEnemy = { id: 1, name: "Invalid Enemy" };
    expect(isDataEnemy(invalidEnemy)).toBe(false);
  });
});
