import { default as PathLib } from 'node:path';
export declare const ensurePath: (pathLib: typeof PathLib, basePath: string, folderName: string, subFolderName: string) => string;
export declare const validateFilePath: (filePath: string) => boolean;
export declare const buildImageAssetPath: (pathLib: typeof PathLib, basePath: string, subFolderName: string, filePath: string) => string;
export declare const buildAudioAssetPath: (pathLib: typeof PathLib, basePath: string, subFolderName: string, filePath: string) => string;
