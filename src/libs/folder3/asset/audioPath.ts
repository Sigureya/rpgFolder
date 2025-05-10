import type PathLib from "node:path";
import {
  FOLDER_AUDIO_BGM,
  FOLDER_AUDIO_BGS,
  FOLDER_AUDIO_ME,
  FOLDER_AUDIO_SE,
} from "@sigureya/rpgtypes";
import { buildImageAssetPath } from "./ensure";

export const buildBgmPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_AUDIO_BGM, filePath);
};

export const buildBgsPath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_AUDIO_BGS, filePath);
};

export const buildMePath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_AUDIO_ME, filePath);
};

export const buildSePath = (
  pathLib: typeof PathLib,
  basePath: string,
  filePath: string
): string => {
  return buildImageAssetPath(pathLib, basePath, FOLDER_AUDIO_SE, filePath);
};
