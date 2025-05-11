import {
  FILENAME_SKILLS,
  isDataSkill,
  type Data_Skill,
} from "@sigureya/rpgtypes";
import type {
  FsLib_ReadFile,
  FsLib_WriteFile,
  PathLib_Resolve,
} from "./detail/libTypes";
import { ensureDataPath, readRmmzDataListFile, writeDataFile } from "./detail";

export const ensureSkillDataPath = (
  pathLib: PathLib_Resolve,
  basePath: string
): string => {
  return ensureDataPath(pathLib, basePath, FILENAME_SKILLS);
};

export const writeRmmzSkillData = (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_WriteFile,
  basePath: string,
  skills: Data_Skill[],
  space: number = 2
): Promise<void> => {
  const path: string = ensureSkillDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, skills, space);
};

export const readRmmzSkillData = async (
  pathLib: PathLib_Resolve,
  fsLib: FsLib_ReadFile,
  basePath: string
): Promise<Data_Skill[]> => {
  const path: string = ensureSkillDataPath(pathLib, basePath);
  return readRmmzDataListFile<Data_Skill>(fsLib, path, isDataSkill);
};
