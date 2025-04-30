import type { Data_Map, Data_MapInfo } from "@sigureya/rpgtypes";
import { makeMapData } from "@sigureya/rpgtypes";
import type FsLib from "node:fs/promises";
import type PathLib from "node:path";
import type { ResultOfReadMapFile } from "./types";

type InfoType = Pick<Data_MapInfo, "name" | "id">;

const makeMapFileName = (mapId: number) => {
  return `Map${String(mapId).padStart(3, "0")}.json` as const;
};
const validateAndNormalizeMapData = (data: unknown): Data_Map => {
  // データの不足分を補い、余計なデータを排除する処理
  return makeMapData(data as {});
};

export const resolveMapFilePath = (
  pathLib: Pick<typeof PathLib, "resolve">,
  basePath: string,
  mapId: number
) => {
  const fileName = makeMapFileName(mapId);
  const filePath = pathLib.resolve(basePath, fileName);
  return { filePath, fileName };
};

export const readMapFileFromInfo = async (
  fsLib: Pick<typeof FsLib, "readFile">,
  pathLib: Pick<typeof PathLib, "resolve">,
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

export const isValidMapInfo = (
  info: Partial<Data_MapInfo> | null | undefined
): info is InfoType => {
  if (!info) {
    return false;
  }
  if (typeof info !== "object") {
    return false;
  }
  return typeof info.id === "number" && typeof info.name === "string";
};

export const mappingAllMapFiles = <T>(
  fsLib: Pick<typeof FsLib, "readFile">,
  pathLib: Pick<typeof PathLib, "resolve">,
  basePath: string,
  infos: ReadonlyArray<Data_MapInfo | null>,
  fn: (data: ResultOfReadMapFile) => T
): Promise<T>[] => {
  return infos
    .filter((item) => !!item && isValidMapInfo(item))
    .map(async (info) => {
      const mapFileInfo = await readMapFileFromInfo(
        fsLib,
        pathLib,
        basePath,
        info
      );
      return fn(mapFileInfo);
    });
};
