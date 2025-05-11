import {
  FOLDER_IMG_FACES,
  FOLDER_IMG_PICTURES,
  FOLDER_IMG_BATTLEBACK1,
  FOLDER_IMG_BATTLEBACK2,
  FOLDER_IMG_CHACTERS,
  FOLDER_IMG_ENEMIES,
  FOLDER_IMG_PARALLACES,
  FOLDER_IMG_SV_ACTORS,
  FOLDER_IMG_SV_ENEMIES,
  FOLDER_IMG_SYSTEM,
  FOLDER_IMG_TILESETS,
  FOLDER_IMG_TITLES1,
  FOLDER_IMG_TITLES2,
} from "@sigureya/rpgtypes";
import type PathLib from "node:path";
import { buildImageAssetPath } from "./ensure";

export const buildFaceImagesPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
) => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_FACES, filePath);
};

export const buildPicturesPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_PICTURES, filePath);
};

export const buildBattleback1Path = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG_BATTLEBACK1,
    filePath
  );
};

export const buildBattleback2Path = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG_BATTLEBACK2,
    filePath
  );
};

export const buildCharactersImagePath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_CHACTERS, filePath);
};

export const buildEnemyImagesPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_ENEMIES, filePath);
};

export const buildParallacesPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG_PARALLACES,
    filePath
  );
};

export const buildSideViewActorsPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_SV_ACTORS, filePath);
};

export const buildSideVewEnemiesPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    FOLDER_IMG_SV_ENEMIES,
    filePath
  );
};

export const buildSystemImagePath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_SYSTEM, filePath);
};

export const buildTilesetImagesPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_TILESETS, filePath);
};

export const buildTitle1ImagesPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_TITLES1, filePath);
};

export const buildTitle2ImagesPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_IMG_TITLES2, filePath);
};
