import type { NodeLibs } from "@lib/nodeLib";

export class FolderClass {
  constructor(private libs: NodeLibs) {}
  async createFolder(path: string): Promise<void> {
    try {
      await this.libs.fs.mkdir(path, { recursive: true });
    } catch (error) {
      console.error(`Error creating folder: ${error}`);
    }
  }
}
