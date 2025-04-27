import { NodeLibs } from "./types";

export const listJsonFiles = async (
  libs: NodeLibs,
  folderPath: string
): Promise<string[]> => {
  const entries = await libs.fs.readdir(folderPath);
  return entries.filter((name) => name.endsWith(".json"));
};

export const listFilesWithExtension = async (
  libs: NodeLibs,
  folderPath: string,
  ext: string
): Promise<string[]> => {
  const entries = await libs.fs.readdir(folderPath);
  return entries.filter((name) => name.endsWith(ext));
};

export const ensureFolderExists = async (
  libs: NodeLibs,
  folderPath: string
): Promise<void> => {
  await libs.fs.mkdir(folderPath, { recursive: true });
};
