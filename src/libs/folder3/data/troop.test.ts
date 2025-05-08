import { expect, describe, test, vi } from "vitest";
import {
  ensureTroopDataPath,
  readRmmzTroopData,
  writeRmmzTroopData,
} from "./troop";
import type { Data_Troop } from "@sigureya/rpgtypes";
import { makeTroopData } from "@sigureya/rpgtypes";

describe("ensureTroopDataPath", () => {
  const mockPathLib = {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
  const basePath = "base/path";
  const expectedPath = `base/path/data/troops.json` as const;
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
      `base/path/data/troops.json`,
      JSON.stringify([null, ...troops], null, space),
      "utf-8"
    );
  });
});
