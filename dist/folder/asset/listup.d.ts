import { Dirent } from 'node:fs';
import { default as PathLib } from 'node:path';
import { AudioFolders, ImageFolders } from '@sigureya/rpgtypes';
import { AudioDirent, ImageDirent } from './types/assetPath';
import { FsLib_ReadDir } from 'folder/data/features/detail/libTypes';
export declare const listupImageFiles: (pathLib: typeof PathLib, fsLib: FsLib_ReadDir, basePath: string, subFolderName: ImageFolders) => Promise<ImageDirent[]>;
export declare const isAudioFileExtension: <D extends {
    name: string;
}>(dirent: D) => dirent is (D & {
    name: `${string}.ogg`;
}) | (D & {
    name: `${string}.m4a`;
});
export declare const isImageFileExtension: <D extends {
    name: string;
}>(dirent: D) => dirent is D & {
    name: `${string}.png`;
};
export declare const isImageDirent: (dirent: Dirent) => dirent is ImageDirent;
export declare const isAudioDirent: (dirent: Dirent) => dirent is AudioDirent;
export declare const listupAudioFiles: (pathLib: typeof PathLib, fsLib: FsLib_ReadDir, basePath: string, subFolderName: AudioFolders) => Promise<AudioDirent[]>;
