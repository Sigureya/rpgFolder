import type PathLib from "node:path";

export const isSafeFileName = (fileName: string): boolean => {
  return /^[\w.-_]+$/.test(fileName); // 英数字・ドット・ハイフン・アンダースコアのみ許可
};

export const getRelativePath = (
  libs: Pick<typeof PathLib, "relative">,
  base: string,
  target: string
): string => {
  return libs.relative(base, target);
};

export const isJsonFile = (filePath: string): boolean => {
  return filePath.toLowerCase().endsWith(".json");
};

export const ensureFolderPath = (
  pathLib: Pick<typeof PathLib, "join" | "sep">,
  basePath: string,
  folderName: string
): string => {
  return basePath.endsWith(`${pathLib.sep}${folderName}`)
    ? basePath
    : pathLib.join(basePath, folderName);
};
