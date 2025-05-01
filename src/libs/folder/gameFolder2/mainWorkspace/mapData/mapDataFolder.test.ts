import { expect, describe, test, vi } from "vitest";
import { MapDataFolder } from "./mapDataFolder";
import pathLib from "node:path";
import type { Dirent, PathLike } from "node:fs";

interface FSX {
  readFile: string;
  readdir: Dirent[];
}

export const makeMockFs = (result: FSX) => ({
  readFile: vi.fn((path: string, encode: string): Promise<string> => {
    expect(encode).toBe("utf-8");
    return Promise.resolve(result.readFile);
  }),
  readdir: vi.fn(() => Promise.resolve(result.readdir)),
  writeFile: vi.fn((path: PathLike, data: string) => Promise.resolve()),
});

describe("MapDataFolder", () => {
  describe("constructor", () => {
    const fsLib2 = makeMockFs({ readdir: [], readFile: "" });
    const folder = new MapDataFolder(pathLib, fsLib2 as any, "basePath");
    test("should create an instance with the correct base path", () => {
      expect(folder.basePath.endsWith("data")).toBe(true);
    });
  });
});
