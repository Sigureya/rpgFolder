import { expect, describe, test, vi } from "vitest";

import {
  ensureSkillDataPath,
  readRmmzSkillData,
  writeRmmzSkillData,
} from "./skill";
import type { Data_Skill } from "@sigureya/rpgtypes";
import { FILENAME_SKILLS, makeSkill } from "@sigureya/rpgtypes";

const makePathLib = () => {
  return {
    resolve: vi.fn((...args: string[]) => args.join("/")),
    sep: "/" as const,
  };
};
const expectedPath = `base/path/data/${FILENAME_SKILLS}` as const;

describe("ensureSkillDataPath", () => {
  ["base/path", "base/path/data"].forEach((basePath) => {
    test(`should return the correct path for basePath: ${basePath}`, () => {
      const mockPathLib = makePathLib();
      const result = ensureSkillDataPath(mockPathLib, basePath);
      expect(result).toBe(expectedPath);
    });
  });
});

describe("writeRmmzSkillData", async () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    writeFile: vi.fn(),
  };
  const basePath = "base/path";
  const skills: Data_Skill[] = [makeSkill()];
  const space = 2;
  await writeRmmzSkillData(mockPathLib, mockFs, basePath, skills, space);
  const [a, b, c]: string[] = mockFs.writeFile.mock.calls[0];
  test("should write skill data to the correct path", async () => {
    expect(a).toBe(expectedPath);
    expect(c).toBe("utf-8");
  });
  test("should write the correct data", async () => {
    const expectedData: [null, ...Data_Skill[]] = JSON.parse(b);
    expect(expectedData[0]).toBeNull();
    expect(expectedData[1]).toEqual(skills[0]);
  });
});

describe("readRmmzSkillData", () => {
  const mockPathLib = makePathLib();
  const mockFs = {
    readFile: vi.fn(),
  };
  const basePath = "base/path";
  test("should return an empty array when the file contains only null", async () => {
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null]));
    const result = await readRmmzSkillData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([]);
  });
  test("should return an array of skills when the file contains valid data", async () => {
    const skill: Data_Skill = makeSkill();
    mockFs.readFile.mockResolvedValueOnce(JSON.stringify([null, skill]));
    const result = await readRmmzSkillData(mockPathLib, mockFs, basePath);
    expect(result).toEqual([skill]);
  });
});
