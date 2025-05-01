import type PathLib from "node:path";
import type FsLib from "node:fs/promises";
import { FOLDER_AUDIO, FOLDER_DATA, FOLDER_IMG } from "@sigureya/rpgtypes";
import { makeFolder } from "@lib/nodeLib";
import type { Dirent } from "node:fs";
import { MapDataFolder } from "./mapData/mapDataFolder";
import { GameDataFolderClass } from "./mainData/mainDataFolder";

export class WorkSpace_MainFolder {
  public readonly mapFolder: MapDataFolder;
  public readonly dataFolder: GameDataFolderClass;
  constructor(
    private pathLib: typeof PathLib,
    private fsLib: typeof FsLib,
    public readonly name: string,
    public readonly basePath: string
  ) {
    const dataPath = this.pathLib.resolve(basePath, FOLDER_DATA);
    this.mapFolder = new MapDataFolder(pathLib, fsLib, dataPath);
    this.dataFolder = new GameDataFolderClass(pathLib, fsLib, dataPath);
  }
  async imageFiles(subFolder: string): Promise<Dirent[]> {
    const path: string = this.imageFolderPath(subFolder);
    return (
      await this.fsLib.readdir(path, {
        withFileTypes: true,
      })
    ).filter((dirent) => dirent.isFile() && dirent.name.endsWith(".png"));
  }

  imageFolderPath(subFolder: string): string {
    return this.pathLib.resolve(this.basePath, FOLDER_IMG, subFolder);
  }
  makeSubFolder(folderName: string): Promise<void> {
    return makeFolder(this.pathLib, this.fsLib, this.basePath, folderName);
  }
  async makeFolders() {
    return await Promise.all([
      this.makeSubFolder(FOLDER_DATA),
      this.makeSubFolder(FOLDER_AUDIO),
      this.makeSubFolder(FOLDER_IMG),
    ]);
  }
}
