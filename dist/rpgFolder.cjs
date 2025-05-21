"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const rpgtypes = require("@sigureya/rpgtypes");
const denormalizeIdentifiedItems = (items) => {
  return [null, ...items];
};
const ensureDataPath = (pathLib, basePath, fileName) => {
  return basePath.endsWith(`${pathLib.sep}${rpgtypes.FOLDER_DATA}`) ? pathLib.resolve(basePath, fileName) : pathLib.resolve(basePath, rpgtypes.FOLDER_DATA, fileName);
};
const validateAndFilterItems = (list, fn) => {
  if (Array.isArray(list)) {
    return list.filter((item) => fn(item));
  }
  throw new Error("Invalid data format");
};
const writeDataFile = async (fsLib, path, data, space = 2) => {
  const list = denormalizeIdentifiedItems(data);
  return fsLib.writeFile(path, JSON.stringify(list, null, space), "utf-8");
};
const readRmmzDataListFile = async (fsLib, resolvedPath, validateFn) => {
  const jsonText = await fsLib.readFile(resolvedPath, "utf-8");
  const obj = JSON.parse(jsonText);
  return validateAndFilterItems(obj, validateFn);
};
const ensureActorDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_ACTORS);
};
const writeRmmzActorData = (pathLib, fsLib, basePath, actors, space = 2) => {
  const path = ensureActorDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, actors, space);
};
const readRmmzActorData = async (pathLib, fsLib, basePath) => {
  const path = ensureActorDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, rpgtypes.isDataActor);
};
const ensureArmorDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_ARMORS);
};
const writeRmmzArmorData = (pathLib, fsLib, basePath, armors, space = 2) => {
  const path = ensureArmorDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, armors, space);
};
const readRmmzArmorData = async (pathLib, fsLib, basePath) => {
  const path = ensureArmorDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, rpgtypes.isDataArmor);
};
const ensureClassDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_CLASSES);
};
const writeRmmzClassData = (pathLib, fsLib, basePath, armors, space = 2) => {
  const path = ensureClassDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, armors, space);
};
const readRmmzClassData = async (pathLib, fsLib, basePath) => {
  const path = ensureClassDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, rpgtypes.isDataClass);
};
const ensureEnemyDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_ENEMIES);
};
const writeRmmzEnemyData = (pathLib, fsLib, basePath, enemies, space = 2) => {
  const path = ensureEnemyDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, enemies, space);
};
const readRmmzEnemyData = async (pathLib, fsLib, basePath) => {
  const path = ensureEnemyDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, rpgtypes.isDataEnemy);
};
const ensureItemDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_ITEMS);
};
const writeRmmzItemData = (pathLib, fsLib, basePath, items, space = 2) => {
  const path = ensureItemDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, items, space);
};
const readRmmzItemData = async (pathLib, fsLib, basePath) => {
  const path = ensureItemDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, rpgtypes.isDataItem);
};
const ensureSkillDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_SKILLS);
};
const writeRmmzSkillData = (pathLib, fsLib, basePath, skills, space = 2) => {
  const path = ensureSkillDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, skills, space);
};
const readRmmzSkillData = async (pathLib, fsLib, basePath) => {
  const path = ensureSkillDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, rpgtypes.isDataSkill);
};
const ensureStateDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_STATES);
};
const writeRmmzStateData = (pathLib, fsLib, basePath, states, space = 2) => {
  const path = ensureStateDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, states, space);
};
const readRmmzStateData = async (pathLib, fsLib, basePath) => {
  const path = ensureStateDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, rpgtypes.isDataState);
};
const ensureWeaponDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_WEAPONS);
};
const writeRmmzWeaponData = (pathLib, fsLib, basePath, weapons, space = 2) => {
  const path = ensureWeaponDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, weapons, space);
};
const readRmmzWeaponData = async (pathLib, fsLib, basePath) => {
  const path = ensureWeaponDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, rpgtypes.isDataWeapon);
};
const isDataTroop = (data) => {
  return typeof data === "object" && data !== null && "id" in data && typeof data.id === "number";
};
const ensureTroopDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_TROOPS);
};
const writeRmmzTroopData = (pathLib, fsLib, basePath, troops, space = 2) => {
  const path = ensureTroopDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, troops, space);
};
const readRmmzTroopData = async (pathLib, fsLib, basePath) => {
  const path = ensureTroopDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isDataTroop);
};
const isCommonEvent = (data) => {
  return !!data && typeof data === "object" && "id" in data;
};
const ensureCommonEventDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_COMMON_EVENTS);
};
const writeRmmzCommonEventData = (pathLib, fsLib, basePath, commonEvents, space = 2) => {
  const path = ensureCommonEventDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, commonEvents, space);
};
const readRmmzCommonEventData = async (pathLib, fsLib, basePath) => {
  const path = ensureCommonEventDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, isCommonEvent);
};
const ensureMapInfoDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_MAP_INFOS);
};
const writeRmmzMapInfoData = (pathLib, fsLib, basePath, mapInfos, space = 2) => {
  const path = ensureMapInfoDataPath(pathLib, basePath);
  return writeDataFile(fsLib, path, mapInfos, space);
};
const readRmmzMapInfoData = async (pathLib, fsLib, basePath) => {
  const path = ensureMapInfoDataPath(pathLib, basePath);
  return readRmmzDataListFile(fsLib, path, rpgtypes.isDataMapInfo);
};
const isMapFileName = (filename) => {
  return filename.startsWith("Map") && filename.endsWith(".json");
};
const listupMapFiles = async (fsLib, resolvedPath) => {
  return (await fsLib.readdir(resolvedPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isFile() && isMapFileName(dirent.name)
  );
};
const makeMapFileName = (mapId) => {
  return `Map${String(mapId).padStart(3, "0")}.json`;
};
const resolveMapFilePath = (pathLib, basePath, mapId) => {
  const fileName = makeMapFileName(mapId);
  const filePath = pathLib.resolve(basePath, fileName);
  return { filePath, fileName };
};
const validateAndNormalizeMapData = (data) => {
  return rpgtypes.makeMapData(data);
};
const readMapFileFromInfo = async (fsLib, pathLib, basePath, info) => {
  const { filePath, fileName } = resolveMapFilePath(pathLib, basePath, info.id);
  try {
    const text = await fsLib.readFile(filePath, "utf-8");
    const mapData = validateAndNormalizeMapData(JSON.parse(text));
    return {
      filename: fileName,
      map: mapData,
      editingName: info.name
    };
  } catch {
    return {
      filename: fileName,
      editingName: info.name,
      map: void 0
    };
  }
};
const mappingAllMapFiles = async (fsLib, pathLib, basePath, fn, infos) => {
  const list = infos ?? await readRmmzMapInfoData(pathLib, fsLib, basePath);
  return list.filter((item) => !!item && rpgtypes.isDataMapInfo(item)).map(async (info) => {
    const mapFileInfo = await readMapFileFromInfo(
      fsLib,
      pathLib,
      basePath,
      info
    );
    return fn(mapFileInfo);
  });
};
const isDataSystem = (data) => {
  return !!data;
};
const ensureSystemDataPath = (pathLib, basePath) => {
  return ensureDataPath(pathLib, basePath, rpgtypes.FILENAME_SYSTEM);
};
const writeRmmzSystemData = (pathLib, fsLib, basePath, system, space = 2) => {
  const path = ensureSystemDataPath(pathLib, basePath);
  const text = JSON.stringify(system, null, space);
  return fsLib.writeFile(path, text, "utf8");
};
const readRmmzSystemData = async (pathLib, fsLib, basePath) => {
  const path = ensureSystemDataPath(pathLib, basePath);
  const text = await fsLib.readFile(path, "utf8");
  const data = JSON.parse(text);
  if (!isDataSystem(data)) {
    throw new Error(`Invalid system data: ${path}`);
  }
  return data;
};
const dispatchHandlers = async (fsLib, pathLib, basePath, dataMapper) => {
  return {
    actor: dataMapper.actor ? dataMapper.actor(
      await readRmmzActorData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_ACTOR
    ) : void 0,
    armor: dataMapper.armor ? dataMapper.armor(
      await readRmmzArmorData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_ARMOR
    ) : void 0,
    enemy: dataMapper.enemy ? dataMapper.enemy(
      await readRmmzEnemyData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_ENEMY
    ) : void 0,
    class: dataMapper.class ? dataMapper.class(
      await readRmmzClassData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_CLASS
    ) : void 0,
    item: dataMapper.item ? dataMapper.item(
      await readRmmzItemData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_ITEMS
    ) : void 0,
    skill: dataMapper.skill ? dataMapper.skill(
      await readRmmzSkillData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_SKILL
    ) : void 0,
    state: dataMapper.state ? dataMapper.state(
      await readRmmzStateData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_STATE
    ) : void 0,
    weapon: dataMapper.weapon ? dataMapper.weapon(
      await readRmmzWeaponData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_WEAPON
    ) : void 0,
    troop: dataMapper.troop ? dataMapper.troop(
      await readRmmzTroopData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_TROOP
    ) : void 0,
    commonEvent: dataMapper.commonEvent ? dataMapper.commonEvent(
      await readRmmzCommonEventData(pathLib, fsLib, basePath),
      rpgtypes.SRC_DATA_COMMON_EVNET
    ) : void 0
  };
};
const ggg = (fm) => {
  try {
    return fm();
  } catch {
    return Promise.resolve();
  }
};
const writeDataFiles = async (fsLib, pathLib, basePath, data) => {
  return Promise.all([
    ggg(() => writeRmmzActorData(pathLib, fsLib, basePath, data.actors)),
    ggg(() => writeRmmzEnemyData(pathLib, fsLib, basePath, data.enemies)),
    ggg(() => writeRmmzArmorData(pathLib, fsLib, basePath, data.armors)),
    ggg(() => writeRmmzWeaponData(pathLib, fsLib, basePath, data.weapons)),
    ggg(() => writeRmmzClassData(pathLib, fsLib, basePath, data.classes)),
    ggg(() => writeRmmzItemData(pathLib, fsLib, basePath, data.items)),
    ggg(() => writeRmmzSkillData(pathLib, fsLib, basePath, data.skills)),
    ggg(() => writeRmmzStateData(pathLib, fsLib, basePath, data.states))
  ]);
};
const ensurePath = (pathLib, basePath, folderName, subFolderName) => {
  const normalizedBasePath = pathLib.normalize(basePath);
  if (normalizedBasePath.endsWith(`${pathLib.sep}${folderName}`)) {
    return pathLib.resolve(normalizedBasePath, subFolderName);
  }
  if (normalizedBasePath.endsWith(
    `${pathLib.sep}${folderName}${pathLib.sep}${subFolderName}`
  )) {
    return normalizedBasePath;
  }
  return pathLib.resolve(basePath, folderName, subFolderName);
};
const validateFilePath = (filePath) => {
  return !filePath.includes(".");
};
const buildAssetPath = (pathLib, basePath, assetType, subFolder, filePath, extension) => {
  if (!validateFilePath(filePath)) {
    throw new Error(`Invalid file path: ${filePath}`);
  }
  const dir = ensurePath(pathLib, basePath, assetType, subFolder);
  return pathLib.join(dir, `${filePath}.${extension}`);
};
const buildImageAssetPath = (pathLib, basePath, subFolderName, filePath) => {
  return buildAssetPath(
    pathLib,
    basePath,
    rpgtypes.FOLDER_IMG,
    subFolderName,
    filePath,
    "png"
  );
};
const buildBgmPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_AUDIO_BGM, filePath);
};
const buildBgsPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_AUDIO_BGS, filePath);
};
const buildMePath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_AUDIO_ME, filePath);
};
const buildSePath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_AUDIO_SE, filePath);
};
const buildFaceImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_IMG_FACES, filePath);
};
const buildPicturesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_IMG_PICTURES, filePath);
};
const buildBattleback1Path = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    rpgtypes.FOLDER_IMG_BATTLEBACK1,
    filePath
  );
};
const buildBattleback2Path = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    rpgtypes.FOLDER_IMG_BATTLEBACK2,
    filePath
  );
};
const buildCharactersImagePath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_IMG_CHACTERS, filePath);
};
const buildEnemyImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_IMG_ENEMIES, filePath);
};
const buildParallacesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    rpgtypes.FOLDER_IMG_PARALLACES,
    filePath
  );
};
const buildSideViewActorsPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_IMG_SV_ACTORS, filePath);
};
const buildSideVewEnemiesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(
    pathLib,
    basePath,
    rpgtypes.FOLDER_IMG_SV_ENEMIES,
    filePath
  );
};
const buildSystemImagePath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_IMG_SYSTEM, filePath);
};
const buildTilesetImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_IMG_TILESETS, filePath);
};
const buildTitle1ImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_IMG_TITLES1, filePath);
};
const buildTitle2ImagesPath = (pathLib, basePath, filePath) => {
  return buildImageAssetPath(pathLib, basePath, rpgtypes.FOLDER_IMG_TITLES2, filePath);
};
const AUDIO_FOLDES = [
  rpgtypes.FOLDER_AUDIO_BGM,
  rpgtypes.FOLDER_AUDIO_BGS,
  rpgtypes.FOLDER_AUDIO_ME,
  rpgtypes.FOLDER_AUDIO_SE
];
const IMAGE_FOLDERS = [
  rpgtypes.FOLDER_IMG_FACES,
  rpgtypes.FOLDER_IMG_PICTURES,
  rpgtypes.FOLDER_IMG_BATTLEBACK1,
  rpgtypes.FOLDER_IMG_BATTLEBACK2,
  rpgtypes.FOLDER_IMG_CHACTERS,
  rpgtypes.FOLDER_IMG_ENEMIES,
  rpgtypes.FOLDER_IMG_PARALLACES,
  rpgtypes.FOLDER_IMG_SV_ACTORS,
  rpgtypes.FOLDER_IMG_SV_ENEMIES,
  rpgtypes.FOLDER_IMG_SYSTEM,
  rpgtypes.FOLDER_IMG_TILESETS,
  rpgtypes.FOLDER_IMG_TITLES1,
  rpgtypes.FOLDER_IMG_TITLES2
];
const makeFolder = (pathLib, fsLib, basePath, folderName, subFolderName) => {
  const path = ensurePath(pathLib, basePath, folderName, subFolderName);
  return fsLib.mkdir(path, {
    recursive: true
  });
};
const makeImageFolders = (pathLib, fsLib, basePath) => {
  return IMAGE_FOLDERS.map((folder) => {
    return makeFolder(pathLib, fsLib, basePath, rpgtypes.FOLDER_IMG, folder);
  });
};
const makeAudioFolders = (pathLib, fsLib, basePath) => {
  return AUDIO_FOLDES.map((folder) => {
    return makeFolder(pathLib, fsLib, basePath, rpgtypes.FOLDER_IMG, folder);
  });
};
const makeDataFoldes = (pathLib, fsLib, basePath) => {
  return [makeFolder(pathLib, fsLib, basePath, rpgtypes.FOLDER_DATA, "")];
};
const isValidAssetPath = (path) => {
  if (path === "") {
    return true;
  }
  if (path.endsWith("/")) {
    return false;
  }
  if (hasInvalidChars(path)) {
    return false;
  }
  if (testWindowsReserved(path)) {
    return false;
  }
  return true;
};
const invalidWindowsNames = [
  "con",
  "prn",
  "aux",
  "nul",
  "com1",
  "com2",
  "com3",
  "com4",
  "com5",
  "com6",
  "com7",
  "com8",
  "com9",
  "lpt1",
  "lpt2",
  "lpt3",
  "lpt4",
  "lpt5",
  "lpt6",
  "lpt7",
  "lpt8",
  "lpt9"
];
const hasInvalidChars = (path) => {
  return /[.#\\]/.test(path);
};
const testWindowsReserved = (path) => {
  const segments = path.split("/");
  return segments.some(
    (segment) => invalidWindowsNames.includes(segment.toLowerCase())
  );
};
const listupImageFiles = async (pathLib, fsLib, basePath, subFolderName) => {
  const dirPath = ensurePath(pathLib, basePath, rpgtypes.FOLDER_IMG, subFolderName);
  const dirents = await fsLib.readdir(dirPath, { withFileTypes: true });
  return dirents.filter(isImageDirent);
};
const areExtention = (dirent, ext) => {
  return dirent.name.endsWith(ext);
};
const isAudioFileExtension = (dirent) => {
  return areExtention(dirent, ".ogg") || areExtention(dirent, ".m4a");
};
const isImageFileExtension = (dirent) => {
  return areExtention(dirent, ".png");
};
const isImageDirent = (dirent) => {
  return dirent.isFile() && isImageFileExtension(dirent);
};
const isAudioDirent = (dirent) => {
  return dirent.isFile() && isAudioFileExtension(dirent);
};
const listupAudioFiles = async (pathLib, fsLib, basePath, subFolderName) => {
  const dirPath = ensurePath(pathLib, basePath, rpgtypes.FOLDER_AUDIO, subFolderName);
  const dirents = await fsLib.readdir(dirPath, { withFileTypes: true });
  return dirents.filter(isAudioDirent);
};
exports.buildBattleback1Path = buildBattleback1Path;
exports.buildBattleback2Path = buildBattleback2Path;
exports.buildBgmPath = buildBgmPath;
exports.buildBgsPath = buildBgsPath;
exports.buildCharactersImagePath = buildCharactersImagePath;
exports.buildEnemyImagesPath = buildEnemyImagesPath;
exports.buildFaceImagesPath = buildFaceImagesPath;
exports.buildMePath = buildMePath;
exports.buildParallacesPath = buildParallacesPath;
exports.buildPicturesPath = buildPicturesPath;
exports.buildSePath = buildSePath;
exports.buildSideVewEnemiesPath = buildSideVewEnemiesPath;
exports.buildSideViewActorsPath = buildSideViewActorsPath;
exports.buildSystemImagePath = buildSystemImagePath;
exports.buildTilesetImagesPath = buildTilesetImagesPath;
exports.buildTitle1ImagesPath = buildTitle1ImagesPath;
exports.buildTitle2ImagesPath = buildTitle2ImagesPath;
exports.dispatchHandlers = dispatchHandlers;
exports.ensureActorDataPath = ensureActorDataPath;
exports.ensureArmorDataPath = ensureArmorDataPath;
exports.ensureClassDataPath = ensureClassDataPath;
exports.ensureCommonEventDataPath = ensureCommonEventDataPath;
exports.ensureEnemyDataPath = ensureEnemyDataPath;
exports.ensureItemDataPath = ensureItemDataPath;
exports.ensureMapInfoDataPath = ensureMapInfoDataPath;
exports.ensureSkillDataPath = ensureSkillDataPath;
exports.ensureStateDataPath = ensureStateDataPath;
exports.ensureSystemDataPath = ensureSystemDataPath;
exports.ensureTroopDataPath = ensureTroopDataPath;
exports.ensureWeaponDataPath = ensureWeaponDataPath;
exports.isAudioDirent = isAudioDirent;
exports.isAudioFileExtension = isAudioFileExtension;
exports.isImageDirent = isImageDirent;
exports.isImageFileExtension = isImageFileExtension;
exports.isMapFileName = isMapFileName;
exports.isValidAssetPath = isValidAssetPath;
exports.listupAudioFiles = listupAudioFiles;
exports.listupImageFiles = listupImageFiles;
exports.listupMapFiles = listupMapFiles;
exports.makeAudioFolders = makeAudioFolders;
exports.makeDataFoldes = makeDataFoldes;
exports.makeImageFolders = makeImageFolders;
exports.mappingAllMapFiles = mappingAllMapFiles;
exports.readMapFileFromInfo = readMapFileFromInfo;
exports.readRmmzActorData = readRmmzActorData;
exports.readRmmzArmorData = readRmmzArmorData;
exports.readRmmzClassData = readRmmzClassData;
exports.readRmmzCommonEventData = readRmmzCommonEventData;
exports.readRmmzEnemyData = readRmmzEnemyData;
exports.readRmmzItemData = readRmmzItemData;
exports.readRmmzMapInfoData = readRmmzMapInfoData;
exports.readRmmzSkillData = readRmmzSkillData;
exports.readRmmzStateData = readRmmzStateData;
exports.readRmmzSystemData = readRmmzSystemData;
exports.readRmmzTroopData = readRmmzTroopData;
exports.readRmmzWeaponData = readRmmzWeaponData;
exports.resolveMapFilePath = resolveMapFilePath;
exports.writeDataFiles = writeDataFiles;
exports.writeRmmzActorData = writeRmmzActorData;
exports.writeRmmzArmorData = writeRmmzArmorData;
exports.writeRmmzClassData = writeRmmzClassData;
exports.writeRmmzCommonEventData = writeRmmzCommonEventData;
exports.writeRmmzEnemyData = writeRmmzEnemyData;
exports.writeRmmzItemData = writeRmmzItemData;
exports.writeRmmzMapInfoData = writeRmmzMapInfoData;
exports.writeRmmzSkillData = writeRmmzSkillData;
exports.writeRmmzStateData = writeRmmzStateData;
exports.writeRmmzSystemData = writeRmmzSystemData;
exports.writeRmmzTroopData = writeRmmzTroopData;
exports.writeRmmzWeaponData = writeRmmzWeaponData;
//# sourceMappingURL=rpgFolder.cjs.map
