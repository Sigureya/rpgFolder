import type { Data_Map, MapFileInfo } from "@sigureya/rpgtypes";
import {
  isDataMapInfo,
  makeMapData,
  type Data_MapInfo,
} from "@sigureya/rpgtypes";
import type { FsLib_ReadFile, PathLib_Resolve } from "./detail/libTypes";
import type FsLib from "node:fs/promises";
import type { Dirent } from "node:fs";
import { readRmmzMapInfoData } from "./mapInfo";
type InfoType = Pick<Data_MapInfo, "name" | "id">;

export const isMapFileName = (filename: string) => {
  return filename.startsWith("Map") && filename.endsWith(".json");
};

export const listupMapFiles = async (
  fsLib: Pick<typeof FsLib, "readdir">,
  resolvedPath: string
): Promise<Dirent[]> => {
  return (await fsLib.readdir(resolvedPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isFile() && isMapFileName(dirent.name)
  );
};

const makeMapFileName = (mapId: number) => {
  return `Map${String(mapId).padStart(3, "0")}.json` as const;
};

export const resolveMapFilePath = (
  pathLib: PathLib_Resolve,
  basePath: string,
  mapId: number
) => {
  const fileName = makeMapFileName(mapId);
  const filePath = pathLib.resolve(basePath, fileName);
  return { filePath, fileName };
};

export type ResultOfReadMapFile = MapFileInfo<Data_Map | undefined>;
const validateAndNormalizeMapData = (data: unknown): Data_Map => {
  // データの不足分を補い、余計なデータを排除する処理
  return makeMapData(data as {});
};

export const readMapFileFromInfo = async (
  fsLib: FsLib_ReadFile,
  pathLib: PathLib_Resolve,
  basePath: string,
  info: InfoType
): Promise<ResultOfReadMapFile> => {
  const { filePath, fileName } = resolveMapFilePath(pathLib, basePath, info.id);

  try {
    const text = await fsLib.readFile(filePath, "utf-8");
    const mapData: Data_Map = validateAndNormalizeMapData(JSON.parse(text));
    return {
      filename: fileName,
      map: mapData,
      editingName: info.name,
    };
  } catch {
    return {
      filename: fileName,
      editingName: info.name,
      map: undefined,
    };
  }
};

export const mappingAllMapFiles = async <T>(
  fsLib: FsLib_ReadFile,
  pathLib: PathLib_Resolve,
  basePath: string,
  fn: (data: ResultOfReadMapFile) => T,
  infos?: ReadonlyArray<Data_MapInfo | null>
): Promise<Promise<T>[]> => {
  const list = infos ?? (await readRmmzMapInfoData(pathLib, fsLib, basePath));
  return list
    .filter((item) => !!item && isDataMapInfo(item))
    .map(async (info: Data_MapInfo) => {
      const mapFileInfo = await readMapFileFromInfo(
        fsLib,
        pathLib,
        basePath,
        info
      );
      return fn(mapFileInfo);
    });
};
