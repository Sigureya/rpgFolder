import { expect, describe, test, vi } from "vitest";

import {
  ensureWeaponDataPath,
  readRmmzWeaponData,
  writeRmmzWeaponData,
} from "./weapon";

import type { Data_Weapon } from "@sigureya/rpgtypes";
import { FILENAME_WEAPONS, makeWeapon } from "@sigureya/rpgtypes";

const makePathLib = () => {
  return {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
};
const expectedPath = `base/path/data/${FILENAME_WEAPONS}` as const;

describe("ensureWeaponDataPath", () => {
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureWeaponDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzWeaponData", async () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const weapons: Data_Weapon[] = [makeWeapon()];
  const space = 2;

  await writeRmmzWeaponData(mockPathLib, mockFs, basePath, weapons, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should write weapon data to the correct path", async () => {
    expect(a).toBe(expectedPath);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", async () => {
    const expectedData: [null, ...Data_Weapon[]] = JSON.parse(b);
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(weapons[0]);
  });
});

describe("readRmmzWeaponData", () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";
  test("should return an empty array when the file contains only null", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzWeaponData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });

  test("should return the correct weapon data", async () => {
    const weapon = makeWeapon();
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, weapon]));
    const result = await readRmmzWeaponData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([weapon]);
  });
  test("should return an empty array when the file is empty", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([]));
    const result = await readRmmzWeaponData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });

  test("should return the correct weapon data when the file contains only weapon data", async () => {
    const weapon = makeWeapon();
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, weapon]));
    const result = await readRmmzWeaponData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([weapon]);
  });
});
