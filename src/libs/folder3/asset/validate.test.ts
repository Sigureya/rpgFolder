import { expect, describe, test } from "vitest";
import { isValidAssetPath } from "./validate";

describe("isValidAssetPath", () => {
  test("should return true for valid paths", () => {
    expect(isValidAssetPath("")).toBe(true);
    expect(isValidAssetPath("path")).toBe(true);
    expect(isValidAssetPath("path/file")).toBe(true);
  });

  test("should return false for invalid paths with trailing slashes", () => {
    expect(isValidAssetPath("path/")).toBe(false);
    expect(isValidAssetPath("path/file/")).toBe(false);
  });

  test("should return true for paths with 2-byte characters", () => {
    expect(isValidAssetPath("パス")).toBe(true);
    expect(isValidAssetPath("path/ファイル")).toBe(true);
  });

  test("should return true for paths with allowed special characters", () => {
    expect(isValidAssetPath("path/!file")).toBe(true);
    expect(isValidAssetPath("path/$file")).toBe(true);
    expect(isValidAssetPath("path/$!file")).toBe(true);
    expect(isValidAssetPath("!file")).toBe(true);
    expect(isValidAssetPath("$file")).toBe(true);
    expect(isValidAssetPath("$!file")).toBe(true);
    expect(isValidAssetPath("!path/file")).toBe(true);
  });

  test("should return false for paths with dots (relative paths or extensions)", () => {
    expect(isValidAssetPath("path/../file")).toBe(false);
    expect(isValidAssetPath("path/./file")).toBe(false);
    expect(isValidAssetPath("path/file.txt")).toBe(false);
  });

  test("should return false for paths with forbidden characters", () => {
    expect(isValidAssetPath("#file")).toBe(false);
  });

  test("should return false for Windows reserved file names", () => {
    expect(isValidAssetPath("con")).toBe(false);
    expect(isValidAssetPath("con/file")).toBe(false);
    expect(isValidAssetPath("folder/con")).toBe(false);
  });
});
