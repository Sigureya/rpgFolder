import type { Data_MapInfo, Data_Map } from "@sigureya/rpgtypes";
import { FOLDER_DATA, FILENAME_MAP_INFOS } from "@sigureya/rpgtypes";
import type FsLib from "node:fs/promises";
import type PathLib from "node:path";
import type { ResultOfReadMapFile } from "./utils";
import { mappingAllMapFiles } from "./utils";

export class MapDataFolder {
  constructor(
    private pathLib: typeof PathLib,
    private fsLib: typeof FsLib,
    public readonly basePath: string,
    public readonly folderName: string = FOLDER_DATA
  ) {}

  async readMapInfos(): Promise<Data_MapInfo[]> {
    const filePath = this.pathLib.resolve(
      this.basePath,
      this.folderName,
      FILENAME_MAP_INFOS
    );
    const json = await this.fsLib.readFile(filePath, "utf-8");
    return JSON.parse(json) as Data_MapInfo[];
  }

  async mappingAllMapFiles<T>(
    fn: (data: ResultOfReadMapFile) => T,
    mapInfos?: Data_MapInfo[]
  ): Promise<Promise<T>[]> {
    const infos = mapInfos ?? (await this.readMapInfos());
    return mappingAllMapFiles(
      this.fsLib,
      this.pathLib,
      this.basePath,
      infos,
      fn
    );
  }

  resolveMapFilePath(mapId: number): string {
    const fileName = `Map${String(mapId).padStart(3, "0")}.json`;
    return this.pathLib.resolve(this.basePath, fileName);
  }

  async readMapFile(mapId: number): Promise<Data_Map | undefined> {
    const filePath = this.resolveMapFilePath(mapId);
    const json = await this.fsLib.readFile(filePath, "utf-8");
    return JSON.parse(json) as Data_Map;
  }
}
