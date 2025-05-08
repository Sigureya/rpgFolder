import { expect, describe, test, vi } from "vitest";

import {
  ensureItemDataPath,
  readRmmzItemData,
  writeRmmzItemData,
} from "./item";
import type { Data_Item } from "@sigureya/rpgtypes";
import { FILENAME_ITEMS, makeItem } from "@sigureya/rpgtypes";
const makePathLib = () => {
  return {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
};
const expectedPath = `base/path/data/${FILENAME_ITEMS}` as const;

describe("ensureItemDataPath", () => {
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureItemDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzItemData", async () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const items: Data_Item[] = [makeItem()];
  const space = 2;
  await writeRmmzItemData(mockPathLib, mockFs, basePath, items, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should write item data to the correct path", async () => {
    expect(a).toBe(expectedPath);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", async () => {
    const expectedData: [null, ...Data_Item[]] = JSON.parse(b);
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(items[0]);
  });
});

describe("readRmmzItemData", () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";
  test("should return an empty array when the file contains only null", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzItemData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
  test("should return an array of items when the file contains valid data", async () => {
    const item = makeItem();
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, item]));
    const result = await readRmmzItemData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([item]);
  });
  test("should throw an error when the file contains invalid data", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, {}]));
    const result = await readRmmzItemData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
});
