import {
  makeMapData,
  type Data_MapInfo,
  type MapFileInfo,
} from "@sigureya/rpgtypes";
import type FsLib from "node:fs/promises";
import type PathLib from "node:path";
import type { ResultOfReadMapFile } from "./types";

export interface M {
  //  readMapInfos(): Promise<Data_MapInfo[]>;
  readAllMap(): Promise<MapFileInfo[]>;
}

const makeMapFileName = (mapId: number) => {
  return `Map${String(mapId).padStart(3, "0")}.json` as const;
};

export const readMapFileFromInfo = async (
  fsLib: Pick<typeof FsLib, "readFile">,
  pathLib: Pick<typeof PathLib, "resolve">,
  basePath: string,
  info: Pick<Data_MapInfo, "name" | "id">
): Promise<ResultOfReadMapFile> => {
  const filename = makeMapFileName(info.id);
  const filePath = pathLib.resolve(basePath, filename);
  try {
    const text = await fsLib.readFile(filePath, "utf-8");
    const mapData = makeMapData(JSON.parse(text));
    return {
      filename,
      map: mapData,
      editingName: info.name,
    };
  } catch {
    return {
      filename,
      editingName: info.name,
      map: undefined,
    };
  }
};

const xxx = <T>(infos: ReadonlyArray<Data_MapInfo | null>, fn: () => T) => {
  const mapInfos = infos.filter((info): info is Data_MapInfo => info !== null);
  mapInfos.map((info) => {});
};
