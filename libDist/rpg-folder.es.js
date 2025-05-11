import { FOLDER_DATA as D, FILENAME_ACTORS as z, isDataActor as C, FILENAME_ARMORS as O, isDataArmor as M, FILENAME_CLASSES as d, isDataClass as p, FILENAME_ENEMIES as k, isDataEnemy as W, FILENAME_ITEMS as g, isDataItem as h, FILENAME_SKILLS as f, isDataSkill as j, FILENAME_STATES as P, isDataState as x, FILENAME_WEAPONS as J, isDataWeapon as $, FILENAME_TROOPS as K, FILENAME_COMMON_EVENTS as V, FILENAME_MAP_INFOS as H, isDataMapInfo as A, makeMapData as Y, SRC_DATA_COMMON_EVNET as q, SRC_DATA_TROOP as B, SRC_DATA_WEAPON as G, SRC_DATA_STATE as Q, SRC_DATA_SKILL as U, SRC_DATA_ITEMS as X, SRC_DATA_CLASS as Z, SRC_DATA_ENEMY as L, SRC_DATA_ARMOR as b, SRC_DATA_ACTOR as tt } from "@sigureya/rpgtypes";
const nt = (t) => [null, ...t], a = (t, n, e) => n.endsWith(`${t.sep}${D}`) ? t.resolve(n, e) : t.resolve(n, D, e), rt = (t, n) => {
  if (Array.isArray(t))
    return t.filter((e) => n(e));
  throw new Error("Invalid data format");
}, c = async (t, n, e, r = 2) => {
  const o = nt(e);
  return t.writeFile(n, JSON.stringify(o, null, r), "utf-8");
}, m = async (t, n, e) => {
  const r = await t.readFile(n, "utf-8"), o = JSON.parse(r);
  return rt(o, e);
}, E = (t, n) => a(t, n, z), et = (t, n, e, r, o = 2) => {
  const s = E(t, e);
  return c(n, s, r, o);
}, ot = async (t, n, e) => {
  const r = E(t, e);
  return m(n, r, C);
}, S = (t, n) => a(t, n, O), st = (t, n, e, r, o = 2) => {
  const s = S(t, e);
  return c(n, s, r, o);
}, at = async (t, n, e) => {
  const r = S(t, e);
  return m(n, r, M);
}, R = (t, n) => a(t, n, d), ct = (t, n, e, r, o = 2) => {
  const s = R(t, e);
  return c(n, s, r, o);
}, mt = async (t, n, e) => {
  const r = R(t, e);
  return m(n, r, p);
}, w = (t, n) => a(t, n, k), it = (t, n, e, r, o = 2) => {
  const s = w(t, e);
  return c(n, s, r, o);
}, ut = async (t, n, e) => {
  const r = w(t, e);
  return m(n, r, W);
}, y = (t, n) => a(t, n, g), lt = (t, n, e, r, o = 2) => {
  const s = y(t, e);
  return c(n, s, r, o);
}, Dt = async (t, n, e) => {
  const r = y(t, e);
  return m(n, r, h);
}, _ = (t, n) => a(t, n, f), At = (t, n, e, r, o = 2) => {
  const s = _(t, e);
  return c(n, s, r, o);
}, Et = async (t, n, e) => {
  const r = _(t, e);
  return m(n, r, j);
}, I = (t, n) => a(t, n, P), St = (t, n, e, r, o = 2) => {
  const s = I(t, e);
  return c(n, s, r, o);
}, Rt = async (t, n, e) => {
  const r = I(t, e);
  return m(n, r, x);
}, F = (t, n) => a(t, n, J), wt = (t, n, e, r, o = 2) => {
  const s = F(t, e);
  return c(n, s, r, o);
}, yt = async (t, n, e) => {
  const r = F(t, e);
  return m(n, r, $);
}, _t = (t) => typeof t == "object" && t !== null && "id" in t && typeof t.id == "number", N = (t, n) => a(t, n, K), pt = (t, n, e, r, o = 2) => {
  const s = N(t, e);
  return c(n, s, r, o);
}, It = async (t, n, e) => {
  const r = N(t, e);
  return m(n, r, _t);
}, Ft = (t) => !!t && typeof t == "object" && "id" in t, T = (t, n) => a(t, n, V), kt = (t, n, e, r, o = 2) => {
  const s = T(t, e);
  return c(n, s, r, o);
}, Nt = async (t, n, e) => {
  const r = T(t, e);
  return m(n, r, Ft);
}, v = (t, n) => a(t, n, H), Wt = (t, n, e, r, o = 2) => {
  const s = v(t, e);
  return c(n, s, r, o);
}, Tt = async (t, n, e) => {
  const r = v(t, e);
  return m(n, r, A);
}, vt = (t) => t.startsWith("Map") && t.endsWith(".json"), gt = async (t, n) => (await t.readdir(n, { withFileTypes: !0 })).filter(
  (e) => e.isFile() && vt(e.name)
), zt = (t) => `Map${String(t).padStart(3, "0")}.json`, Ct = (t, n, e) => {
  const r = zt(e);
  return { filePath: t.resolve(n, r), fileName: r };
}, Ot = (t) => Y(t), Mt = async (t, n, e, r) => {
  const { filePath: o, fileName: s } = Ct(n, e, r.id);
  try {
    const u = await t.readFile(o, "utf-8"), l = Ot(JSON.parse(u));
    return {
      filename: s,
      map: l,
      editingName: r.name
    };
  } catch {
    return {
      filename: s,
      editingName: r.name,
      map: void 0
    };
  }
}, ht = async (t, n, e, r, o) => (o ?? await Tt(n, t, e)).filter((u) => !!u && A(u)).map(async (u) => {
  const l = await Mt(
    t,
    n,
    e,
    u
  );
  return r(l);
}), ft = async (t, n, e, r) => ({
  actor: r.actor ? r.actor(
    await ot(n, t, e),
    tt
  ) : void 0,
  armor: r.armor ? r.armor(
    await at(n, t, e),
    b
  ) : void 0,
  enemy: r.enemy ? r.enemy(
    await ut(n, t, e),
    L
  ) : void 0,
  class: r.class ? r.class(
    await mt(n, t, e),
    Z
  ) : void 0,
  item: r.item ? r.item(
    await Dt(n, t, e),
    X
  ) : void 0,
  skill: r.skill ? r.skill(
    await Et(n, t, e),
    U
  ) : void 0,
  state: r.state ? r.state(
    await Rt(n, t, e),
    Q
  ) : void 0,
  weapon: r.weapon ? r.weapon(
    await yt(n, t, e),
    G
  ) : void 0,
  troop: r.troop ? r.troop(
    await It(n, t, e),
    B
  ) : void 0,
  commonEvent: r.commonEvent ? r.commonEvent(
    await Nt(n, t, e),
    q
  ) : void 0
}), i = (t) => {
  try {
    return t();
  } catch {
    return Promise.resolve();
  }
}, jt = async (t, n, e, r) => Promise.all([
  i(() => et(n, t, e, r.actors)),
  i(() => it(n, t, e, r.enemies)),
  i(() => st(n, t, e, r.armors)),
  i(() => wt(n, t, e, r.weapons)),
  i(() => ct(n, t, e, r.classes)),
  i(() => lt(n, t, e, r.items)),
  i(() => At(n, t, e, r.skills)),
  i(() => St(n, t, e, r.states))
]);
export {
  ft as dispatchHandlers,
  E as ensureActorDataPath,
  S as ensureArmorDataPath,
  R as ensureClassDataPath,
  T as ensureCommonEventDataPath,
  w as ensureEnemyDataPath,
  y as ensureItemDataPath,
  v as ensureMapInfoDataPath,
  _ as ensureSkillDataPath,
  I as ensureStateDataPath,
  N as ensureTroopDataPath,
  F as ensureWeaponDataPath,
  vt as isMapFileName,
  gt as listupMapFiles,
  ht as mappingAllMapFiles,
  Mt as readMapFileFromInfo,
  ot as readRmmzActorData,
  at as readRmmzArmorData,
  mt as readRmmzClassData,
  Nt as readRmmzCommonEventData,
  ut as readRmmzEnemyData,
  Dt as readRmmzItemData,
  Tt as readRmmzMapInfoData,
  Et as readRmmzSkillData,
  Rt as readRmmzStateData,
  It as readRmmzTroopData,
  yt as readRmmzWeaponData,
  Ct as resolveMapFilePath,
  jt as writeDataFiles,
  et as writeRmmzActorData,
  st as writeRmmzArmorData,
  ct as writeRmmzClassData,
  kt as writeRmmzCommonEventData,
  it as writeRmmzEnemyData,
  lt as writeRmmzItemData,
  Wt as writeRmmzMapInfoData,
  At as writeRmmzSkillData,
  St as writeRmmzStateData,
  pt as writeRmmzTroopData,
  wt as writeRmmzWeaponData
};
//# sourceMappingURL=rpg-folder.es.js.map
