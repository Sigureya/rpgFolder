import type { Data_Map, Data_MapInfo, MapFileInfo } from "@sigureya/rpgtypes";

export type ResultOfReadMapFile = MapFileInfo<Data_Map | undefined>;
export interface MapDataFolder {
  readAllMap(): Promise<MapFileInfo[]>;
  readMapInfos(): Promise<Data_MapInfo[]>;
}
