import { FOLDER_AUDIO, FOLDER_IMG } from "@sigureya/rpgtypes";
import type PathLib from "node:path";

export const ensurePath = (
  pathLib: typeof PathLib,
  basePath: string,
  folderName: string,
  subFolderName: string
): string => {
  // basePathを正規化。末尾のセパレータを削除
  const normalizedBasePath = pathLib.normalize(basePath);

  if (normalizedBasePath.endsWith(`${pathLib.sep}${folderName}`)) {
    // フォルダ名がbasePathに含まれている場合、basePathをそのまま使用
    return pathLib.join(normalizedBasePath, subFolderName);
  }

  if (
    normalizedBasePath.endsWith(
      `${pathLib.sep}${folderName}${pathLib.sep}${subFolderName}`
    )
  ) {
    return normalizedBasePath;
  }

  // サブフォルダを結合
  return pathLib.join(basePath, folderName, subFolderName);
};

export const validateFilePath = (filePath: string): boolean => {
  // 相対パスの../と、拡張子の両方を禁止する
  // ./xxは存在しないので巻き添えで禁止
  return !filePath.includes(".");
};

const buildAssetPath = (
  pathLib: typeof PathLib,
  basePath: string,
  assetType: string,
  subFolder: string,
  filePath: string,
  extension: string
): string => {
  if (!validateFilePath(filePath)) {
    throw new Error(`Invalid file path: ${filePath}`);
  }
  const dir = ensurePath(pathLib, basePath, assetType, subFolder);

  return pathLib.join(dir, `${filePath}.${extension}`);
};

export const buildImageAssetPath = (
  pathLib: typeof PathLib,
  basePath: string,
  subFolderName: string,
  filePath: string
) => {
  return buildAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG,
    subFolderName,
    filePath,
    "png"
  );
};

export const buildAudioAssetPath = (
  pathLib: typeof PathLib,
  basePath: string,
  subFolderName: string,
  filePath: string
) => {
  return buildAssetPath(
    pathLib,
    basePath,
    FOLDER_AUDIO,
    subFolderName,
    filePath,
    "ogg"
  );
};
