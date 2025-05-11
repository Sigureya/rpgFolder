import { expect, describe, test } from "vitest";
import {
  ensurePath,
  buildAudioAssetPath,
  buildImageAssetPath,
  validateFilePath,
} from "./ensure";

import PathLib from "node:path";

const replaceSeparator = (path: string): string => {
  return path.replaceAll(PathLib.sep, "/");
};

const expectedPattern = new RegExp("basePath/main/sub$"); // /basePath\/main\/sub$/;

describe("ensurePath", () => {
  const MAIN = "main" as const;
  const SUB = "sub" as const;

  test("", () => {
    const result = ensurePath(PathLib, "basePath", MAIN, SUB);
    const replaced = replaceSeparator(result);
    expect(replaced).toMatch(expectedPattern);
  });

  test("", () => {
    const result = ensurePath(PathLib, "basePath/main", MAIN, SUB);
    const replaced = replaceSeparator(result);
    //    expect(replaced).toBe(expected);
    expect(replaced).toMatch(expectedPattern);
  });
  test("", () => {
    const result = ensurePath(PathLib, "basePath/main/sub", MAIN, SUB);
    const replaced = replaceSeparator(result);
    // expect(replaced).toBe(expected);
    expect(replaced).toMatch(expectedPattern);
  });
  test("", () => {
    const result = ensurePath(PathLib, "basePath/mainmain", MAIN, SUB);
    const replaced = replaceSeparator(result);
    expect(replaced).toMatch(new RegExp("basePath/mainmain/main/sub$"));
  });
});

describe("validateFilePath", () => {
  test("", () => {
    expect(validateFilePath("file")).toBe(true);
    expect(validateFilePath("file.png")).toBe(false);
    expect(validateFilePath("file/face.png")).toBe(false);
    expect(validateFilePath("../file.png")).toBe(false);
    expect(validateFilePath("..")).toBe(false);
    expect(validateFilePath("file..png")).toBe(false);
  });
});

describe("buildImageAssetPath", () => {
  const expected = new RegExp("basePath/img/face/file.png");

  test("", () => {
    const result = buildImageAssetPath(PathLib, "basePath", "face", "file");
    const replaced = replaceSeparator(result);
    expect(replaced.endsWith(".png")).toBe(true);
    expect(replaced).toMatch(expected);
  });
  test("", () => {
    expect(() =>
      buildImageAssetPath(PathLib, "basePath/img/face", "face", "../malicious ")
    ).toThrow();
    expect(() =>
      buildImageAssetPath(PathLib, "basePath/img/face", "face", ".. ")
    ).toThrow();
  });
});

describe("buildAudioAssetPath", () => {
  const expected = new RegExp("basePath/audio/bgm/file\\.ogg");

  test("", () => {
    const result = buildAudioAssetPath(PathLib, "basePath", "bgm", "file");
    const replaced = replaceSeparator(result);
    expect(replaced.endsWith(".ogg")).toBe(true);
    expect(replaced).toMatch(expected);
  });
  test("", () => {
    expect(() =>
      buildAudioAssetPath(
        PathLib,
        "basePath/audio/bgm",
        "face",
        "../malicious "
      )
    ).toThrow();
    expect(() =>
      buildAudioAssetPath(PathLib, "basePath/audio/bgm", "bgm", ".. ")
    ).toThrow();
  });
});
