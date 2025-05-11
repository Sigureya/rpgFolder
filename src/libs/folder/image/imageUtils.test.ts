import { describe, expect, test, vi } from "vitest";
import { imageFiles, imageFolderPath } from "./imageUtils";
import type { Dirent } from "node:fs";
import { FOLDER_IMG_PICTURES } from "@sigureya/rpgtypes";

const makeMockPath = (path: string) => ({
  sep: "/" as const,
  resolve: vi.fn(() => path),
});

describe("imageFolderPath", () => {
  test("returns correct path for valid subfolder", () => {
    const mockPathLib = {
      resolve: vi.fn((...paths: string[]) => paths.join("/")),
    };
    const basePath = "/base/path";
    const subFolder = FOLDER_IMG_PICTURES;

    const result = imageFolderPath(mockPathLib, basePath, subFolder);

    expect(result).toContain("base/path/img/");
    expect(result).toContain(FOLDER_IMG_PICTURES);
    expect(mockPathLib.resolve).toHaveBeenCalledWith(
      basePath,
      "img",
      subFolder
    );
  });

  test("throws error for invalid subfolder", () => {
    const mockPathLib = {
      resolve: vi.fn(),
    };
    const basePath = "/base/path";
    const subFolder = "InvalidFolder";

    expect(() =>
      imageFolderPath(mockPathLib, basePath, subFolder)
    ).toThrowError("Invalid image folder: InvalidFolder");
  });
});

test("", () => {
  const mockPathLib = makeMockPath("mockPath");
  expect(mockPathLib.resolve()).toBe("mockPath");
  expect(mockPathLib.resolve()).toBe("mockPath");
});

describe("imageFiles", () => {
  test("returns only .png files from the directory", async () => {
    const mockPathLib = makeMockPath("mockPath");
    const mockFsLib = {
      readdir: vi.fn(
        async () =>
          [
            { name: "file1.png", isFile: () => true },
            { name: "file2.jpg", isFile: () => true },
            { name: "subfolder", isFile: () => false },
          ] as Dirent[]
      ),
    };
    const basePath = "/base/path";
    const subFolder = FOLDER_IMG_PICTURES;

    const result = await imageFiles(
      mockPathLib,
      mockFsLib as any,
      basePath,
      subFolder
    );

    expect(result).toEqual([
      { name: "file1.png", isFile: expect.any(Function) },
    ]);
    expect(mockPathLib.resolve).toHaveBeenCalledWith(
      basePath,
      "img",
      subFolder
    );
    expect(mockFsLib.readdir).toHaveBeenCalledWith("mockPath", {
      withFileTypes: true,
    });
  });

  test("returns empty array if no .png files are found", async () => {
    const mockPathLib = makeMockPath("mockPath");
    const mockFsLib = {
      readdir: vi.fn(
        async () =>
          [
            { name: "file1.jpg", isFile: () => true },
            { name: "subfolder", isFile: () => false },
          ] as Dirent[]
      ),
    };
    const basePath = "/base/path";
    const subFolder = FOLDER_IMG_PICTURES;

    const result = await imageFiles(
      mockPathLib,
      mockFsLib as any,
      basePath,
      subFolder
    );

    expect(result).toEqual([]);
    expect(mockPathLib.resolve).toHaveBeenCalledWith(
      basePath,
      "img",
      subFolder
    );
    expect(mockFsLib.readdir).toHaveBeenCalledWith("mockPath", {
      withFileTypes: true,
    });
  });
});
