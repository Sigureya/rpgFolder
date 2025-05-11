import PathLib from "node:path";

import { expect, describe, test } from "vitest";
import {
  buildBattleback1Path,
  buildBattleback2Path,
  buildCharactersImagePath,
  buildEnemyImagesPath,
  buildFaceImagesPath,
  buildParallacesPath,
  buildPicturesPath,
  buildSideVewEnemiesPath,
  buildSideViewActorsPath,
  buildSystemImagePath,
  buildTilesetImagesPath,
  buildTitle1ImagesPath,
  buildTitle2ImagesPath,
} from "./imagePath";
import {
  FOLDER_IMG_BATTLEBACK1,
  FOLDER_IMG_BATTLEBACK2,
  FOLDER_IMG_CHACTERS,
  FOLDER_IMG_ENEMIES,
  FOLDER_IMG_FACES,
  FOLDER_IMG_PICTURES,
  FOLDER_IMG_PARALLACES,
  FOLDER_IMG_SV_ACTORS,
  FOLDER_IMG_SV_ENEMIES,
  FOLDER_IMG_SYSTEM,
  FOLDER_IMG_TILESETS,
  FOLDER_IMG_TITLES1,
  FOLDER_IMG_TITLES2,
} from "@sigureya/rpgtypes";

const replaceSeparator = (path: string): string => {
  return path.replaceAll(PathLib.sep, "/");
};
const BASE_PATH = "game" as const;
const filePathPattern = new RegExp("/img/[a-zA-Z0-9_/]+/[^/]+\\.png$");

describe("buildBattleback1Path", () => {
  test("should return the correct path", () => {
    const filePath = "cave";
    const result = buildBattleback1Path(PathLib, "game", filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/cave\.png$/);
    expect(replaceSeparator(result)).include(
      `game/img/${FOLDER_IMG_BATTLEBACK1}/`
    );
  });
  test("", () => {
    const filePath = "cave";
    const result = buildBattleback1Path(PathLib, "project", filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/cave\.png$/);
    expect(replaceSeparator(result)).include(
      `project/img/${FOLDER_IMG_BATTLEBACK1}/`
    );
  });
});

describe("buildBattleback2Path", () => {
  test("should return the correct path", () => {
    const filePath = "town1";
    const result = buildBattleback2Path(PathLib, "project", filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/town1\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_BATTLEBACK2}/`);
  });
});
describe("buildCharactersImagePath", () => {
  test("should return the correct path", () => {
    const filePath = "hero";
    const result = buildCharactersImagePath(PathLib, "superRPG", filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/hero\.png$/);
    expect(replaceSeparator(result)).include(
      `superRPG/img/${FOLDER_IMG_CHACTERS}/`
    );
  });
});
describe("buildEnemyImagesPath", () => {
  test("should return the correct path", () => {
    const filePath = "dragon";
    const result = buildEnemyImagesPath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/dragon\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_ENEMIES}/`);
  });
});

describe("buildFaceImagesPath", () => {
  test("should return the correct path", () => {
    const filePath = "actor1";
    const result = buildFaceImagesPath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/actor1\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_FACES}/`);
  });
});
describe("buildPicturesPath", () => {
  test("should return the correct path", () => {
    const filePath = "picture1";
    const result = buildPicturesPath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/picture1\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_PICTURES}/`);
  });
});
describe("buildParallacesPath", () => {
  test("should return the correct path", () => {
    const filePath = "parallax1";
    const result = buildParallacesPath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/parallax1\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_PARALLACES}/`);
  });
});
describe("buildSideVewEnemiesPath", () => {
  test("should return the correct path", () => {
    const filePath = "enemy1";
    const result = buildSideVewEnemiesPath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/enemy1\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_SV_ENEMIES}/`);
  });
});
describe("buildSideViewActorsPath", () => {
  test("should return the correct path", () => {
    const filePath = "actor1";
    const result = buildSideViewActorsPath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/actor1\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_SV_ACTORS}/`);
  });
});

describe("buildSystemImagePath", () => {
  test("should return the correct path", () => {
    const filePath = "system1";
    const result = buildSystemImagePath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/system1\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_SYSTEM}/`);
  });
});

describe("buildTilesetImagesPath", () => {
  test("should return the correct path", () => {
    const filePath = "tileset1";
    const result = buildTilesetImagesPath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/tileset1\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_TILESETS}/`);
  });
});
describe("buildTitle1ImagesPath", () => {
  test("should return the correct path", () => {
    const filePath = "title1";
    const result = buildTitle1ImagesPath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/title1\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_TITLES1}/`);
  });
});
describe("buildTitle2ImagesPath", () => {
  test("should return the correct path", () => {
    const filePath = "green/forrest";
    const result = buildTitle2ImagesPath(PathLib, BASE_PATH, filePath);
    expect(replaceSeparator(result)).toMatch(filePathPattern);
    expect(replaceSeparator(result)).toMatch(/green\/forrest\.png$/);
    expect(replaceSeparator(result)).include(`img/${FOLDER_IMG_TITLES2}/`);
  });
});
