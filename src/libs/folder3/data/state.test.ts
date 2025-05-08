import { expect, describe, test, vi } from "vitest";

import {
  ensureStateDataPath,
  readRmmzStateData,
  writeRmmzStateData,
} from "./state";

import type { Data_State } from "@sigureya/rpgtypes";

import {
  FILENAME_STATES,
  makeStateData,
  isDataState,
} from "@sigureya/rpgtypes";

const makePathLib = () => {
  return {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
};

const expectedPath = `base/path/data/${FILENAME_STATES}` as const;

describe("ensureStateDataPath", () => {
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureStateDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzStateData", async () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const states: Data_State[] = [makeStateData()];
  const space = 2;

  await writeRmmzStateData(mockPathLib, mockFs, basePath, states, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should write state data to the correct path", async () => {
    expect(a).toBe(expectedPath);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", async () => {
    const expectedData: [null, ...Data_State[]] = JSON.parse(b);
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(states[0]);
  });
});

describe("readRmmzStateData", () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";
  test("should return an empty array when the file contains only null", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzStateData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
  test("should return an array of states when the file contains valid data", async () => {
    const state = makeStateData();
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, state, state]));
    const result = await readRmmzStateData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([state, state]);
  });
});

describe("isDataState", () => {
  test("should return true for valid state data", () => {
    const state = makeStateData();
    expect(isDataState(state)).toBe(true);
  });
  test("should return false for invalid state data", () => {
    const invalidState = { id: 1, name: "Invalid State" };
    expect(isDataState(invalidState)).toBe(false);
  });
});
