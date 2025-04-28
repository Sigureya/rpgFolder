import { FOLDER_DATA, IdentifiedItems } from "@sigureya/rpgtypes";
import PathLib from "node:path";
import FsLib from "node:fs/promises";

export const normalizeIdentifiedItems = <T>(items: IdentifiedItems<T>): T[] => {
  return items.filter((item): item is T => item !== null);
};

export const denormalizeIdentifiedItems = <T>(
  items: T[]
): IdentifiedItems<T> => {
  return [null, ...items];
};

export const readData = async <T>(
  pathLib: Pick<typeof PathLib, "resolve">,
  fsLib: Pick<typeof FsLib, "readFile">,
  basePath: string,
  fileName: string
): Promise<T[]> => {
  const path = pathLib.resolve(basePath, FOLDER_DATA, fileName);
  const json: string = await fsLib.readFile(path, "utf-8");
  const data = JSON.parse(json) as IdentifiedItems<T>;
  return normalizeIdentifiedItems(data);
};

export const writeData = async <T>(
  pathLib: Pick<typeof PathLib, "resolve">,
  fsLib: Pick<typeof FsLib, "writeFile">,
  basePath: string,
  fileName: string,
  data: T[],
  space: number = 2
): Promise<void> => {
  const path = pathLib.resolve(basePath, FOLDER_DATA, fileName);
  const list: IdentifiedItems<T> = denormalizeIdentifiedItems(data);
  const json = JSON.stringify(list, null, space);
  await fsLib.writeFile(path, json, "utf-8");
};
