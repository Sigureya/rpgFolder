import { FOLDER_DATA as _, FILENAME_ACTORS as H, isDataActor as Y, FILENAME_ARMORS as q, isDataArmor as Q, FILENAME_CLASSES as X, isDataClass as Z, FILENAME_ENEMIES as b, isDataEnemy as tt, FILENAME_ITEMS as nt, isDataItem as et, FILENAME_SKILLS as rt, isDataSkill as st, FILENAME_STATES as ot, isDataState as at, FILENAME_WEAPONS as ct, isDataWeapon as it, FILENAME_TROOPS as ut, FILENAME_COMMON_EVENTS as mt, FILENAME_MAP_INFOS as lt, isDataMapInfo as S, makeMapData as Et, SRC_DATA_COMMON_EVNET as Dt, SRC_DATA_TROOP as At, SRC_DATA_WEAPON as _t, SRC_DATA_STATE as It, SRC_DATA_SKILL as Rt, SRC_DATA_ITEMS as St, SRC_DATA_CLASS as dt, SRC_DATA_ENEMY as Ft, SRC_DATA_ARMOR as Tt, SRC_DATA_ACTOR as wt, FOLDER_IMG as E, FOLDER_AUDIO_BGM as d, FOLDER_AUDIO_BGS as F, FOLDER_AUDIO_ME as T, FOLDER_AUDIO_SE as w, FOLDER_IMG_FACES as O, FOLDER_IMG_PICTURES as y, FOLDER_IMG_BATTLEBACK1 as M, FOLDER_IMG_BATTLEBACK2 as C, FOLDER_IMG_CHACTERS as v, FOLDER_IMG_ENEMIES as h, FOLDER_IMG_PARALLACES as P, FOLDER_IMG_SV_ACTORS as g, FOLDER_IMG_SV_ENEMIES as p, FOLDER_IMG_SYSTEM as N, FOLDER_IMG_TILESETS as z, FOLDER_IMG_TITLES1 as k, FOLDER_IMG_TITLES2 as G, FOLDER_AUDIO as Ot } from "@sigureya/rpgtypes";
const yt = (t) => [null, ...t], c = (t, n, e) => n.endsWith(`${t.sep}${_}`) ? t.resolve(n, e) : t.resolve(n, _, e), Mt = (t, n) => {
  if (Array.isArray(t))
    return t.filter((e) => n(e));
  throw new Error("Invalid data format");
}, i = async (t, n, e, r = 2) => {
  const s = yt(e);
  return t.writeFile(n, JSON.stringify(s, null, r), "utf-8");
}, u = async (t, n, e) => {
  const r = await t.readFile(n, "utf-8"), s = JSON.parse(r);
  return Mt(s, e);
}, f = (t, n) => c(t, n, H), Ct = (t, n, e, r, s = 2) => {
  const o = f(t, e);
  return i(n, o, r, s);
}, vt = async (t, n, e) => {
  const r = f(t, e);
  return u(n, r, Y);
}, W = (t, n) => c(t, n, q), ht = (t, n, e, r, s = 2) => {
  const o = W(t, e);
  return i(n, o, r, s);
}, Pt = async (t, n, e) => {
  const r = W(t, e);
  return u(n, r, Q);
}, $ = (t, n) => c(t, n, X), gt = (t, n, e, r, s = 2) => {
  const o = $(t, e);
  return i(n, o, r, s);
}, pt = async (t, n, e) => {
  const r = $(t, e);
  return u(n, r, Z);
}, B = (t, n) => c(t, n, b), Nt = (t, n, e, r, s = 2) => {
  const o = B(t, e);
  return i(n, o, r, s);
}, zt = async (t, n, e) => {
  const r = B(t, e);
  return u(n, r, tt);
}, j = (t, n) => c(t, n, nt), kt = (t, n, e, r, s = 2) => {
  const o = j(t, e);
  return i(n, o, r, s);
}, Gt = async (t, n, e) => {
  const r = j(t, e);
  return u(n, r, et);
}, x = (t, n) => c(t, n, rt), ft = (t, n, e, r, s = 2) => {
  const o = x(t, e);
  return i(n, o, r, s);
}, Wt = async (t, n, e) => {
  const r = x(t, e);
  return u(n, r, st);
}, U = (t, n) => c(t, n, ot), $t = (t, n, e, r, s = 2) => {
  const o = U(t, e);
  return i(n, o, r, s);
}, Bt = async (t, n, e) => {
  const r = U(t, e);
  return u(n, r, at);
}, V = (t, n) => c(t, n, ct), jt = (t, n, e, r, s = 2) => {
  const o = V(t, e);
  return i(n, o, r, s);
}, xt = async (t, n, e) => {
  const r = V(t, e);
  return u(n, r, it);
}, Ut = (t) => typeof t == "object" && t !== null && "id" in t && typeof t.id == "number", L = (t, n) => c(t, n, ut), ln = (t, n, e, r, s = 2) => {
  const o = L(t, e);
  return i(n, o, r, s);
}, Vt = async (t, n, e) => {
  const r = L(t, e);
  return u(n, r, Ut);
}, Lt = (t) => !!t && typeof t == "object" && "id" in t, K = (t, n) => c(t, n, mt), En = (t, n, e, r, s = 2) => {
  const o = K(t, e);
  return i(n, o, r, s);
}, Kt = async (t, n, e) => {
  const r = K(t, e);
  return u(n, r, Lt);
}, J = (t, n) => c(t, n, lt), Dn = (t, n, e, r, s = 2) => {
  const o = J(t, e);
  return i(n, o, r, s);
}, Jt = async (t, n, e) => {
  const r = J(t, e);
  return u(n, r, S);
}, Ht = (t) => t.startsWith("Map") && t.endsWith(".json"), An = async (t, n) => (await t.readdir(n, { withFileTypes: !0 })).filter(
  (e) => e.isFile() && Ht(e.name)
), Yt = (t) => `Map${String(t).padStart(3, "0")}.json`, qt = (t, n, e) => {
  const r = Yt(e);
  return { filePath: t.resolve(n, r), fileName: r };
}, Qt = (t) => Et(t), Xt = async (t, n, e, r) => {
  const { filePath: s, fileName: o } = qt(n, e, r.id);
  try {
    const m = await t.readFile(s, "utf-8"), A = Qt(JSON.parse(m));
    return {
      filename: o,
      map: A,
      editingName: r.name
    };
  } catch {
    return {
      filename: o,
      editingName: r.name,
      map: void 0
    };
  }
}, _n = async (t, n, e, r, s) => (s ?? await Jt(n, t, e)).filter((m) => !!m && S(m)).map(async (m) => {
  const A = await Xt(
    t,
    n,
    e,
    m
  );
  return r(A);
}), In = async (t, n, e, r) => ({
  actor: r.actor ? r.actor(
    await vt(n, t, e),
    wt
  ) : void 0,
  armor: r.armor ? r.armor(
    await Pt(n, t, e),
    Tt
  ) : void 0,
  enemy: r.enemy ? r.enemy(
    await zt(n, t, e),
    Ft
  ) : void 0,
  class: r.class ? r.class(
    await pt(n, t, e),
    dt
  ) : void 0,
  item: r.item ? r.item(
    await Gt(n, t, e),
    St
  ) : void 0,
  skill: r.skill ? r.skill(
    await Wt(n, t, e),
    Rt
  ) : void 0,
  state: r.state ? r.state(
    await Bt(n, t, e),
    It
  ) : void 0,
  weapon: r.weapon ? r.weapon(
    await xt(n, t, e),
    _t
  ) : void 0,
  troop: r.troop ? r.troop(
    await Vt(n, t, e),
    At
  ) : void 0,
  commonEvent: r.commonEvent ? r.commonEvent(
    await Kt(n, t, e),
    Dt
  ) : void 0
}), l = (t) => {
  try {
    return t();
  } catch {
    return Promise.resolve();
  }
}, Rn = async (t, n, e, r) => Promise.all([
  l(() => Ct(n, t, e, r.actors)),
  l(() => Nt(n, t, e, r.enemies)),
  l(() => ht(n, t, e, r.armors)),
  l(() => jt(n, t, e, r.weapons)),
  l(() => gt(n, t, e, r.classes)),
  l(() => kt(n, t, e, r.items)),
  l(() => ft(n, t, e, r.skills)),
  l(() => $t(n, t, e, r.states))
]), D = (t, n, e, r) => {
  const s = t.normalize(n);
  return s.endsWith(`${t.sep}${e}`) ? t.resolve(s, r) : s.endsWith(
    `${t.sep}${e}${t.sep}${r}`
  ) ? s : t.resolve(n, e, r);
}, Zt = (t) => !t.includes("."), bt = (t, n, e, r, s, o) => {
  if (!Zt(s))
    throw new Error(`Invalid file path: ${s}`);
  const m = D(t, n, e, r);
  return t.join(m, `${s}.${o}`);
}, a = (t, n, e, r) => bt(
  t,
  n,
  E,
  e,
  r,
  "png"
), Sn = (t, n, e) => a(t, n, d, e), dn = (t, n, e) => a(t, n, F, e), Fn = (t, n, e) => a(t, n, T, e), Tn = (t, n, e) => a(t, n, w, e), wn = (t, n, e) => a(t, n, O, e), On = (t, n, e) => a(t, n, y, e), yn = (t, n, e) => a(
  t,
  n,
  M,
  e
), Mn = (t, n, e) => a(
  t,
  n,
  C,
  e
), Cn = (t, n, e) => a(t, n, v, e), vn = (t, n, e) => a(t, n, h, e), hn = (t, n, e) => a(
  t,
  n,
  P,
  e
), Pn = (t, n, e) => a(t, n, g, e), gn = (t, n, e) => a(
  t,
  n,
  p,
  e
), pn = (t, n, e) => a(t, n, N, e), Nn = (t, n, e) => a(t, n, z, e), zn = (t, n, e) => a(t, n, k, e), kn = (t, n, e) => a(t, n, G, e), tn = [
  d,
  F,
  T,
  w
], nn = [
  O,
  y,
  M,
  C,
  v,
  h,
  P,
  g,
  p,
  N,
  z,
  k,
  G
], R = (t, n, e, r, s) => {
  const o = D(t, e, r, s);
  return n.mkdir(o, {
    recursive: !0
  });
}, Gn = (t, n, e) => nn.map((r) => R(t, n, e, E, r)), fn = (t, n, e) => tn.map((r) => R(t, n, e, E, r)), Wn = (t, n, e) => [R(t, n, e, _, "")], $n = (t) => t === "" ? !0 : !(t.endsWith("/") || rn(t) || sn(t)), en = [
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
], rn = (t) => /[.#\\]/.test(t), sn = (t) => t.split("/").some(
  (e) => en.includes(e.toLowerCase())
), Bn = async (t, n, e, r) => {
  const s = D(t, e, E, r);
  return (await n.readdir(s, { withFileTypes: !0 })).filter(cn);
}, I = (t, n) => t.name.endsWith(n), on = (t) => I(t, ".ogg") || I(t, ".m4a"), an = (t) => I(t, ".png"), cn = (t) => t.isFile() && an(t), un = (t) => t.isFile() && on(t), jn = async (t, n, e, r) => {
  const s = D(t, e, Ot, r);
  return (await n.readdir(s, { withFileTypes: !0 })).filter(un);
};
export {
  yn as buildBattleback1Path,
  Mn as buildBattleback2Path,
  Sn as buildBgmPath,
  dn as buildBgsPath,
  Cn as buildCharactersImagePath,
  vn as buildEnemyImagesPath,
  wn as buildFaceImagesPath,
  Fn as buildMePath,
  hn as buildParallacesPath,
  On as buildPicturesPath,
  Tn as buildSePath,
  gn as buildSideVewEnemiesPath,
  Pn as buildSideViewActorsPath,
  pn as buildSystemImagePath,
  Nn as buildTilesetImagesPath,
  zn as buildTitle1ImagesPath,
  kn as buildTitle2ImagesPath,
  In as dispatchHandlers,
  f as ensureActorDataPath,
  W as ensureArmorDataPath,
  $ as ensureClassDataPath,
  K as ensureCommonEventDataPath,
  B as ensureEnemyDataPath,
  j as ensureItemDataPath,
  J as ensureMapInfoDataPath,
  x as ensureSkillDataPath,
  U as ensureStateDataPath,
  L as ensureTroopDataPath,
  V as ensureWeaponDataPath,
  un as isAudioDirent,
  on as isAudioFileExtension,
  cn as isImageDirent,
  an as isImageFileExtension,
  Ht as isMapFileName,
  $n as isValidAssetPath,
  jn as listupAudioFiles,
  Bn as listupImageFiles,
  An as listupMapFiles,
  fn as makeAudioFolders,
  Wn as makeDataFoldes,
  Gn as makeImageFolders,
  _n as mappingAllMapFiles,
  Xt as readMapFileFromInfo,
  vt as readRmmzActorData,
  Pt as readRmmzArmorData,
  pt as readRmmzClassData,
  Kt as readRmmzCommonEventData,
  zt as readRmmzEnemyData,
  Gt as readRmmzItemData,
  Jt as readRmmzMapInfoData,
  Wt as readRmmzSkillData,
  Bt as readRmmzStateData,
  Vt as readRmmzTroopData,
  xt as readRmmzWeaponData,
  qt as resolveMapFilePath,
  Rn as writeDataFiles,
  Ct as writeRmmzActorData,
  ht as writeRmmzArmorData,
  gt as writeRmmzClassData,
  En as writeRmmzCommonEventData,
  Nt as writeRmmzEnemyData,
  kt as writeRmmzItemData,
  Dn as writeRmmzMapInfoData,
  ft as writeRmmzSkillData,
  $t as writeRmmzStateData,
  ln as writeRmmzTroopData,
  jt as writeRmmzWeaponData
};
//# sourceMappingURL=rpg-folder.es.js.map
