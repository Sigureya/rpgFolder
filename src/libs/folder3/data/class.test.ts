import { expect, describe, test, vi } from "vitest";

import {
  ensureClassDataPath,
  readRmmzClassData,
  writeRmmzClassData,
} from "./class";

import type { Data_Class } from "@sigureya/rpgtypes";
import { FILENAME_CLASSES, makeClass, isDataClass } from "@sigureya/rpgtypes";

const makePathLib = () => {
  return {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
};
const expectedPath = `base/path/data/${FILENAME_CLASSES}` as const;

describe("ensureClassDataPath", () => {
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureClassDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzClassData", async () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const classes: Data_Class[] = [makeClass()];
  const space = 2;

  await writeRmmzClassData(mockPathLib, mockFs, basePath, classes, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should write class data to the correct path", async () => {
    expect(a).toBe(expectedPath);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", async () => {
    const expectedData: [null, ...Data_Class[]] = JSON.parse(b);
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(classes[0]);
  });
});

describe("readRmmzClassData", () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";
  test("should return an empty array when the file contains only null", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzClassData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
});

describe("isDataClass", () => {
  const classData: Data_Class = makeClass();
  test("should return true for valid data", () => {
    expect(isDataClass(classData)).toBe(true);
  });
  test("should return false for invalid object", () => {
    expect(isDataClass({})).toBe(false);
  });
  test("should return false for null", () => {
    expect(isDataClass(null)).toBe(false);
  });
});
