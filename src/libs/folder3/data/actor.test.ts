import { expect, describe, test, vi } from "vitest";
import {
  ensureActorDataPath,
  readRmmzActorData,
  writeRmmzActorData,
} from "./actor";
import type { Data_Actor } from "@sigureya/rpgtypes";
import { FILENAME_ACTORS, makeActor } from "@sigureya/rpgtypes";

const makePathLib = () => {
  return {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
};
const expectedPath = `base/path/data/${FILENAME_ACTORS}` as const;

describe("ensureActorDataPath", () => {
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureActorDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzActorData", async () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const actors: Data_Actor[] = [makeActor()];
  const space = 2;

  await writeRmmzActorData(mockPathLib, mockFs, basePath, actors, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should write actor data to the correct path", async () => {
    expect(a).toBe(expectedPath);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", async () => {
    const expectedData = JSON.parse(b) as [null, ...Data_Actor[]];
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(actors[0]);
  });
});

describe("readRmmzActorData", () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";

  test("should read actor data from the correct path", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzActorData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
  test("should read actor data from the correct path", async () => {
    const actor = makeActor();
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, actor]));
    const result = await readRmmzActorData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([actor]);
  });
});
