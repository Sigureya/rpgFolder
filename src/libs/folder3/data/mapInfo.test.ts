import { expect, describe, test, vi } from "vitest";
import {
  ensureMapInfoDataPath,
  readRmmzMapInfoData,
  writeRmmzMapInfoData,
} from "./mapInfo";

import type { Data_MapInfo } from "@sigureya/rpgtypes";
import {
  FILENAME_MAP_INFOS,
  isDataMapInfo,
  makeMapInfoData,
} from "@sigureya/rpgtypes";

const makePathLib = () => {
  return {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
};
const expectedPath = `base/path/data/${FILENAME_MAP_INFOS}` as const;
describe("ensureMapInfoDataPath", () => {
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureMapInfoDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzMapInfoData", async () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const mapInfos: Data_MapInfo[] = [makeMapInfoData()];
  const space = 2;
  await writeRmmzMapInfoData(mockPathLib, mockFs, basePath, mapInfos, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should call writeFile exactly once", () => {
    expect(mockFs.writeFile).toHaveBeenCalledTimes(1);
  });
  test("should write map info data to the correct path", async () => {
    expect(a).toBe(expectedPath);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", async () => {
    const expectedData: [null, ...Data_MapInfo[]] = JSON.parse(b);
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(mapInfos[0]);
  });
});

describe("readRmmzMapInfoData", () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";
  test("should return an empty array when the file contains only null", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzMapInfoData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
  test("should return an array of map infos when the file contains valid data", async () => {
    const mapInfos: Data_MapInfo[] = [makeMapInfoData()];
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, ...mapInfos]));
    const result = await readRmmzMapInfoData(mockPathLib, mockFs, basePath);
    expect(result).toEqual(mapInfos);
  });
});
