import { describe, test, expect, vi } from "vitest";
import { readData, writeData } from "./utils";
import type FsLib from "node:fs/promises";
import { FOLDER_DATA } from "@sigureya/rpgtypes";

describe("readData", async () => {
  const mockData = JSON.stringify([null, { id: 1, name: "Test Item" }]); // モックデータ
  const mockFsLib = {
    readFile: vi.fn(async () => Promise.resolve(mockData)), // 常にモックデータを返す
  };
  const mockPathLib = {
    resolve: vi.fn((...args: string[]) => args.join("/")), // パス結合のモック
  };
  const result = await readData(
    mockPathLib,
    mockFsLib as unknown as typeof FsLib,
    "basePath",
    "fileName"
  );

  test("should return normalized data", () => {
    expect(result).toEqual([{ id: 1, name: "Test Item" }]); // 正規化されたデータを確認
  });

  test("should call pathLib.resolve with correct arguments", () => {
    expect(mockPathLib.resolve).toHaveBeenCalledWith(
      "basePath",
      FOLDER_DATA,
      "fileName"
    );
  });

  test("should call fsLib.readFile with correct arguments", () => {
    expect(mockFsLib.readFile).toHaveBeenCalledWith(
      `basePath/${FOLDER_DATA}/fileName`,
      "utf-8"
    );
  });
});

describe("writeData", async () => {
  const mockFsLib = {
    writeFile: vi.fn(async () => Promise.resolve()),
  };
  const mockPathLib = {
    resolve: vi.fn((...args: string[]) => args.join("/")),
  };

  const testData = [{ id: 1, name: "Test Item" }];
  await writeData(
    mockPathLib,
    mockFsLib as unknown as typeof FsLib,
    "basePath",
    "fileName",
    testData
  );

  test("should call pathLib.resolve with correct arguments", () => {
    expect(mockPathLib.resolve).toHaveBeenCalledWith(
      "basePath",
      FOLDER_DATA,
      "fileName"
    );
  });

  test("should call fsLib.writeFile with correct arguments", () => {
    const expectedJson = JSON.stringify([null, ...testData], null, 2);
    expect(mockFsLib.writeFile).toHaveBeenCalledWith(
      `basePath/${FOLDER_DATA}/fileName`,
      expectedJson,
      "utf-8"
    );
  });
});
