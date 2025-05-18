import { expect, describe, test } from "vitest";
import * as RPG from "@sigureya/rpgtypes";
import type { Data_Map, Data_Actor } from "@sigureya/rpgtypes";
import {
  isDataMap,
  makeMapData,
  isDataActor,
  makeActorData,
} from "@sigureya/rpgtypes";

describe("RpgTypes Test", () => {
  test("map", () => {
    const map: Data_Map = makeMapData();
    expect(isDataMap(map)).toBe(true);
  });
  test("actor", () => {
    const actor: Data_Actor = makeActorData();
    expect(isDataActor(actor)).toBe(true);
  });
  test("armor", () => {
    const armor: RPG.Data_Armor = RPG.makeArmorData();
    expect(RPG.isDataArmor(armor)).toBe(true);
  });
  test("class", () => {
    const data: RPG.Data_Class = RPG.makeClassData();
    expect(RPG.isDataClass(data)).toBe(true);
  });
  test("enemy", () => {
    const data: RPG.Data_Enemy = RPG.makeEnemyData();
    expect(RPG.isDataEnemy(data)).toBe(true);
  });
  test("item", () => {
    const data: RPG.Data_Item = RPG.makeItemData();
    expect(RPG.isDataItem(data)).toBe(true);
  });
  test("skill", () => {
    const data: RPG.Data_Skill = RPG.makeSkillData();
    expect(RPG.isDataSkill(data)).toBe(true);
  });
  test("state", () => {
    const data: RPG.Data_State = RPG.makeStateData();
    expect(RPG.isDataState(data)).toBe(true);
  });
  test("weapon", () => {
    const data: RPG.Data_Weapon = RPG.makeWeaponData();
    expect(RPG.isDataWeapon(data)).toBe(true);
  });
});
