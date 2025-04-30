import type PathLib from "node:path";
import type FsLib from "node:fs/promises";

import { WorkSpace_MainFolder } from "./gameWorkSpaceFolder";

export class ProjectFolder {
  public readonly _main: WorkSpace_MainFolder;
  basePath: string;
  gameTitle: string;

  constructor(
    private pathLib: typeof PathLib,
    private fsLib: typeof FsLib,
    public d: { basePath: string; gameTitle: string }
  ) {
    this.basePath = d.basePath;
    this.gameTitle = d.gameTitle;
    this._main = new WorkSpace_MainFolder(
      pathLib,
      fsLib,
      d.gameTitle,
      d.basePath
    );
  }

  // 親フォルダのパス
  get projectPath(): string {
    return this.pathLib.resolve(this.basePath, this.gameTitle);
  }

  // mainフォルダのパス
  get mainFolderPath(): string {
    return this.pathLib.resolve(this.projectPath, "main");
  }

  // distフォルダのパス
  get distFolderPath(): string {
    return this.pathLib.resolve(this.projectPath, "dist");
  }

  // 拡張ツール用フォルダのパス
  getToolFolderPath(toolName: string): string {
    return this.pathLib.resolve(this.projectPath, "tools", toolName);
  }
}
