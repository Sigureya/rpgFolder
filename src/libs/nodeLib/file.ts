import type FsLib from "node:fs/promises";
export const readJsonFile = async (
  libs: Pick<typeof FsLib, "readFile">,
  filePath: string
): Promise<unknown> => {
  const content = await libs.readFile(filePath, "utf-8");
  return JSON.parse(content);
};

export const writeJsonFile = async (
  libs: Pick<typeof FsLib, "writeFile">,
  filePath: string,
  data: unknown,
  space: number = 2
): Promise<void> => {
  const json = JSON.stringify(data, null, space);
  await libs.writeFile(filePath, json, "utf-8");
};

export const readTextFile = async (
  libs: Pick<typeof FsLib, "readFile">,
  filePath: string
): Promise<string> => {
  return libs.readFile(filePath, "utf-8");
};

export const writeTextFile = async (
  libs: Pick<typeof FsLib, "writeFile">,
  filePath: string,
  content: string
): Promise<void> => {
  await libs.writeFile(filePath, content, "utf-8");
};
