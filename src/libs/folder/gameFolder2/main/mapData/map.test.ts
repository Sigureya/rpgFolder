import { expect, describe, test } from "vitest";

import type FsLib from "node:fs/promises";
import type PathLib from "node:path";

import { readMapFileFromInfo } from "./map";
import type { ResultOfReadMapFile } from "./types";
describe("readMapFileFromInfo", async () => {
  const fsLib = {
    readFile: async (path: string) => {
      return JSON.stringify({
        id: 1,
        name: "Test Map",
        width: 10,
        height: 10,
        tilesetId: 1,
      });
    },
  } as Pick<typeof FsLib, "readFile">;

  const pathLib = {
    resolve: (basePath: string, filename: string) => `${basePath}/${filename}`,
  } as unknown as Pick<typeof PathLib, "resolve">;

  const basePath = "/maps";

  const result: ResultOfReadMapFile = await readMapFileFromInfo(
    fsLib,
    pathLib,
    basePath,
    {
      id: 1,
      name: "Test Map",
    }
  );
  test("should read map file and return map data", () => {
    expect(result.editingName).toBe("Test Map");
    expect(result.filename).toBe("Map001.json");
  });
});
