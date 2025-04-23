import type { NodeLibs } from "./types/";

export const isSafeFileName = (fileName: string): boolean => {
  return /^[\w.-_]+$/.test(fileName); // 英数字・ドット・ハイフン・アンダースコアのみ許可
};

export const getRelativePath = (
  libs: NodeLibs,
  base: string,
  target: string
): string => {
  return libs.path.relative(base, target);
};

export const isJsonFile = (filePath: string): boolean => {
  return filePath.toLowerCase().endsWith(".json");
};
