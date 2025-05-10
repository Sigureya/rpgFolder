import { expect, describe, test } from "vitest";
import { isValidAssetPath } from "./validate";

describe("validateFunction", () => {
  test("true", () => {
    expect(isValidAssetPath("")).toBe(true);

    expect(isValidAssetPath("path")).toBe(true);
    expect(isValidAssetPath("path/file")).toBe(true);
  });
  test("false", () => {
    expect(isValidAssetPath("path/")).toBe(false);
    expect(isValidAssetPath("path/file/")).toBe(false);
  });
  test("2byteChar", () => {
    expect(isValidAssetPath("パス")).toBe(true);
    expect(isValidAssetPath("path/ファイル")).toBe(true);
  });
  test("specialChar", () => {
    expect(isValidAssetPath("path/!file")).toBe(true);
    expect(isValidAssetPath("path/$file")).toBe(true);
    expect(isValidAssetPath("path/$!file")).toBe(true);
    expect(isValidAssetPath("!file")).toBe(true);
    expect(isValidAssetPath("$file")).toBe(true);
    expect(isValidAssetPath("$!file")).toBe(true);
    expect(isValidAssetPath("!path/file")).toBe(true);
  });
  test("dot", () => {
    expect(isValidAssetPath("path/../file")).toBe(false);
    expect(isValidAssetPath("path/./file")).toBe(false);
    expect(isValidAssetPath("path/file.txt")).toBe(false);
  });
  test("other", () => {
    expect(isValidAssetPath("#file")).toBe(false);
  });
  test("windows", () => {
    expect(isValidAssetPath("con")).toBe(false);
    expect(isValidAssetPath("con/file")).toBe(false);
    expect(isValidAssetPath("folder/con")).toBe(false);
  });
});
