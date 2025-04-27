import { NodeLibs } from "./types";

export const readJsonFile = async (
  libs: NodeLibs,
  filePath: string
): Promise<unknown> => {
  const content = await libs.fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
};

export const writeJsonFile = async (
  libs: NodeLibs,
  filePath: string,
  data: unknown,
  space: number = 2
): Promise<void> => {
  const json = JSON.stringify(data, null, space);
  await libs.fs.writeFile(filePath, json, "utf-8");
};

export const readTextFile = async (
  libs: NodeLibs,
  filePath: string
): Promise<string> => {
  return libs.fs.readFile(filePath, "utf-8");
};

export const writeTextFile = async (
  libs: NodeLibs,
  filePath: string,
  content: string
): Promise<void> => {
  await libs.fs.writeFile(filePath, content, "utf-8");
};
