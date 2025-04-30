import type PathLib from "node:path";
import type FsLib from "node:fs/promises";

export const listJsonFiles = async (
  libs: Pick<typeof FsLib, "readdir">,
  folderPath: string
): Promise<string[]> => {
  const entries = await libs.readdir(folderPath);
  return entries.filter((name) => name.endsWith(".json"));
};

export const listFilesWithExtension = async (
  libs: Pick<typeof FsLib, "readdir">,
  folderPath: string,
  ext: string
): Promise<string[]> => {
  const entries = await libs.readdir(folderPath);
  return entries.filter((name) => name.endsWith(ext));
};

export const ensureFolderExists = async (
  lib: Pick<typeof FsLib, "mkdir">,
  folderPath: string
): Promise<void> => {
  await lib.mkdir(folderPath, { recursive: true });
};

export const makeFolder = async (
  pathLib: Pick<typeof PathLib, "resolve">,
  fs: Pick<typeof FsLib, "mkdir">,
  base: string,
  folderName: string
): Promise<void> => {
  if (!/^[a-zA-Z0-9_]+$/.test(folderName)) {
    throw new Error(`Invalid folder name: ${folderName}`);
  }
  const path = pathLib.resolve(base, folderName);
  try {
    await fs.mkdir(path, { recursive: true });
  } catch (error) {
    console.error(`Failed to create folder: ${path}`, error);
    throw error;
  }
};
