import { Dirent } from 'node:fs';
export interface FolderNames {
    gameTitle: string;
    workspace: string;
}
export interface AssetPath {
    folder: string;
    subFolder: string;
    filePath: string;
}
export interface AudioDirent extends Dirent {
    name: `${string}.ogg` | `${string}.m4a`;
}
export interface ImageDirent extends Dirent {
    name: `${string}.png`;
}
