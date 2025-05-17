import { expect, describe, test, vi } from "vitest";
import {
  ensureCommonEventDataPath,
  readRmmzCommonEventData,
  writeRmmzCommonEventData,
} from "./commonEvent";

import type { Data_CommonEvent } from "@sigureya/rpgtypes";
import {
  FILENAME_COMMON_EVENTS,
  makeCommonEventData,
} from "@sigureya/rpgtypes";

const makePathLib = () => {
  return {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
};
const expectedPath = `base/path/data/${FILENAME_COMMON_EVENTS}` as const;

const makeMockFs = () => {
  return {
    writeFile: vi.fn(),
    readFile: vi.fn(),
  };
};
describe("ensureCommonEventDataPath", () => {
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureCommonEventDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzCommonEventData", () => {
  const mockPathLib = makePathLib();
  const mockFs = makeMockFs();
  const basePath = "base/path";
  const commonEvents: Data_CommonEvent[] = [makeCommonEventData()];
  const space = 2;

  writeRmmzCommonEventData(mockPathLib, mockFs, basePath, commonEvents, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should write common event data to the correct path", () => {
    expect(a).toBe(expectedPath);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", () => {
    const expectedData: [null, ...Data_CommonEvent[]] = JSON.parse(b);
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(commonEvents[0]);
  });
});

describe("readRmmzCommonEventData", () => {
  const mockPathLib = makePathLib();
  const mockFs = makeMockFs();
  const basePath = "base/path";
  test("should return an empty array when the file contains only null", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzCommonEventData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
  test("should return the correct data when the file contains valid data", async () => {
    const commonEvent: Data_CommonEvent = makeCommonEventData();
    mockFs.readFile.mockResolvedValueOnce(
      JSON.stringify([null, commonEvent, null])
    );
    const result = await readRmmzCommonEventData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([commonEvent]);
  });
});
