import { expect, describe, test, vi } from "vitest";
import {
  ensureArmorDataPath,
  readRmmzArmorData,
  writeRmmzArmorData,
} from "./armor";
import type { Data_Armor } from "@sigureya/rpgtypes";
import { FILENAME_ARMORS, makeArmor } from "@sigureya/rpgtypes";

const makePathLib = () => {
  return {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
};
const expectedPath = `base/path/data/${FILENAME_ARMORS}` as const;

describe("ensureArmorDataPath", () => {
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureArmorDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzArmorData", async () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const armors: Data_Armor[] = [makeArmor()];
  const space = 2;

  await writeRmmzArmorData(mockPathLib, mockFs, basePath, armors, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should write armor data to the correct path", async () => {
    expect(a).toBe(expectedPath);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", async () => {
    const expectedData: [null, ...Data_Armor[]] = JSON.parse(b);
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(armors[0]);
  });
});

describe("readRmmzArmorData", () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";
  test("should return an empty array when the file contains only null", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzArmorData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
  test("should return the correct armor data", async () => {
    const mockArmor = makeArmor();
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, mockArmor]));
    const result = await readRmmzArmorData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([mockArmor]);
  });
  test("should return an empty array when the file is empty", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([]));
    const result = await readRmmzArmorData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
  test("should return the correct armor data when the file contains only armor data", async () => {
    const mockArmor = makeArmor();
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([mockArmor]));
    const result = await readRmmzArmorData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([mockArmor]);
  });
});
