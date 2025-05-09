import { expect, describe, test, vi } from "vitest";
import {
  ensureTroopDataPath,
  readRmmzTroopData,
  writeRmmzTroopData,
} from "./troop";
import type { Data_Troop } from "@sigureya/rpgtypes";
import { makeTroopData, FILENAME_TROOPS } from "@sigureya/rpgtypes";
const expectedPath = `base/path/data/${FILENAME_TROOPS}` as const;

describe("ensureTroopDataPath", () => {
  const mockPathLib = {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
  const basePath = "base/path";
  test("should return the correct path", () => {
    const result = ensureTroopDataPath(mockPathLib, basePath);
    expect(result).toBe(expectedPath);
  });
});

describe("writeRmmzTroopData", () => {
  const mockPathLib = {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const troops: Data_Troop[] = [makeTroopData()];
  const space = 2;
  test("should write troop data to the correct path", async () => {
    await writeRmmzTroopData(mockPathLib, mockFs, basePath, troops, space);
    expect(mockFs.writeFile).toHaveBeenCalledWith(
      expectedPath,
      JSON.stringify([null, ...troops], null, space),
      "utf-8"
    );
  });
});

describe("readRmmzTroopData", () => {
  const mockPathLib = {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";
  test("should read troop data from the correct path", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    await readRmmzTroopData(mockPathLib, mockFs, basePath);
    expect(mockFs.readFile).toHaveBeenCalledWith(expectedPath, "utf-8");
  });

  test("should return the correct data", async () => {
    const troops: Data_Troop[] = [makeTroopData()];
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, ...troops]));
    const result = await readRmmzTroopData(mockPathLib, mockFs, basePath);
    expect(result).toEqual(troops);
  });
});
