import { expect, describe, test } from "vitest";
import { MapDataFolder } from "./mapDataFolder";
import { makeMockFs, makeMockPath } from "src/libs/testUtils";
import pathLib from "node:path";
describe("MapDataFolder", () => {
  describe("constructor", () => {
    test("should create an instance with the correct base path", () => {
      const pathLib2 = makeMockPath({ resolve: "mockPath" });
      const fsLib2 = makeMockFs({ readdir: [], readFile: "" });
      const folder = new MapDataFolder(pathLib, fsLib2, "basePath");
    });
  });
});
