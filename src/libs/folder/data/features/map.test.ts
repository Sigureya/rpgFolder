import { expect, describe, test } from "vitest";
import { isMapFileName } from "./map";

describe("isMapFileName", () => {
  test("should return true for valid map file names", () => {
    expect(isMapFileName("Map001.json")).toBe(true);
    expect(isMapFileName("Map123.json")).toBe(true);
  });

  test("should return false for invalid map file names", () => {
    expect(isMapFileName("Map001.txt")).toBe(false);
    expect(isMapFileName("map001.json")).toBe(false);
    expect(isMapFileName("Map001")).toBe(false);
  });
});
