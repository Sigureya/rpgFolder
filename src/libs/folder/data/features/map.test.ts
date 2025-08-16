import { expect, describe, test } from "vitest";
import { isMapFileName } from "./map";

describe("isMapFileName", () => {
  test("should return true for valid map file names", () => {
    expect("Map001.json").toSatisfy(isMapFileName);
    expect("Map123.json").toSatisfy(isMapFileName);
  });

  test("should return false for invalid map file names", () => {
    expect("Map001.txt").not.toSatisfy(isMapFileName);
    expect("map001.json").not.toSatisfy(isMapFileName);
    expect("Map001").not.toSatisfy(isMapFileName);
  });
});
