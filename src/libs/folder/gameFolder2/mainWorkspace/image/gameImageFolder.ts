import type FsLib from "node:fs/promises";
import type PathLib from "node:path";
import { ensureFolderPath } from "@lib/nodeLib";
import {
  FOLDER_IMG,
  FOLDER_IMG_BATTLEBACK1,
  FOLDER_IMG_BATTLEBACK2,
  FOLDER_IMG_ENEMIES,
  FOLDER_IMG_FACES,
  FOLDER_IMG_PICTURES,
  FOLDER_IMG_SV_ENEMIES,
  FOLDER_IMG_TITLES1,
  FOLDER_IMG_TITLES2,
  FOLDER_IMG_CHACTERS,
  FOLDER_IMG_SV_ACTORS,
  FOLDER_IMG_PARALLACES,
  FOLDER_IMG_SYSTEM,
  FOLDER_IMG_TILESETS,
} from "@sigureya/rpgtypes";
import { PATH_REGEXP } from "src/libs/nodeLib/regExp";

const SUBFOLDES: ReadonlyArray<string> = [
  FOLDER_IMG_BATTLEBACK1,
  FOLDER_IMG_BATTLEBACK2,
  FOLDER_IMG_ENEMIES,
  FOLDER_IMG_FACES,
  FOLDER_IMG_PICTURES,
  FOLDER_IMG_SV_ENEMIES,
  FOLDER_IMG_TITLES1,
  FOLDER_IMG_TITLES2,
  FOLDER_IMG_CHACTERS,
  FOLDER_IMG_SV_ACTORS,
  FOLDER_IMG_PARALLACES,
  FOLDER_IMG_SYSTEM,
  FOLDER_IMG_TILESETS,
];
export class GameImageFolder {
  public readonly basePath: string;
  constructor(
    private pathLib: Pick<typeof PathLib, "join" | "sep" | "resolve">,
    private fsLib: Pick<typeof FsLib, "readFile" | "writeFile" | "mkdir">,
    basePath: string
  ) {
    this.basePath = ensureFolderPath(pathLib, basePath, FOLDER_IMG);
  }

  imageFolderPath(subFolder: string): string {
    return this.pathLib.resolve(this.basePath, subFolder);
  }

  async makeSubFolder(folderName: string): Promise<void> {
    if (!PATH_REGEXP.test(folderName)) {
      throw new Error(`Invalid folder name: ${folderName}`);
    }
    const path = this.pathLib.resolve(this.basePath, folderName);
    await this.fsLib.mkdir(path, { recursive: true });
  }
  async makeFolders(): Promise<void[]> {
    return await Promise.all(
      SUBFOLDES.map((folderName) => this.makeSubFolder(folderName))
    );
  }
}
