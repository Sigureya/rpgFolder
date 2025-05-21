import { FOLDER_DATA as _, FILENAME_ACTORS as H, isDataActor as q, FILENAME_ARMORS as Q, isDataArmor as X, FILENAME_CLASSES as Z, isDataClass as b, FILENAME_ENEMIES as tt, isDataEnemy as nt, FILENAME_ITEMS as et, isDataItem as rt, FILENAME_SKILLS as st, isDataSkill as ot, FILENAME_STATES as at, isDataState as ct, FILENAME_WEAPONS as it, isDataWeapon as ut, FILENAME_TROOPS as mt, FILENAME_COMMON_EVENTS as lt, FILENAME_MAP_INFOS as Et, isDataMapInfo as d, makeMapData as Dt, FILENAME_SYSTEM as At, SRC_DATA_COMMON_EVNET as _t, SRC_DATA_TROOP as It, SRC_DATA_WEAPON as St, SRC_DATA_STATE as dt, SRC_DATA_SKILL as Rt, SRC_DATA_ITEMS as Ft, SRC_DATA_CLASS as wt, SRC_DATA_ENEMY as Ot, SRC_DATA_ARMOR as Tt, SRC_DATA_ACTOR as yt, FOLDER_IMG as E, FOLDER_AUDIO_BGM as R, FOLDER_AUDIO_BGS as F, FOLDER_AUDIO_ME as w, FOLDER_AUDIO_SE as O, FOLDER_IMG_FACES as T, FOLDER_IMG_PICTURES as y, FOLDER_IMG_BATTLEBACK1 as M, FOLDER_IMG_BATTLEBACK2 as h, FOLDER_IMG_CHACTERS as v, FOLDER_IMG_ENEMIES as C, FOLDER_IMG_PARALLACES as p, FOLDER_IMG_SV_ACTORS as N, FOLDER_IMG_SV_ENEMIES as P, FOLDER_IMG_SYSTEM as g, FOLDER_IMG_TILESETS as z, FOLDER_IMG_TITLES1 as f, FOLDER_IMG_TITLES2 as k, FOLDER_AUDIO as Mt } from "@sigureya/rpgtypes";
const ht = (t) => [null, ...t], c = (t, n, e) => n.endsWith(`${t.sep}${_}`) ? t.resolve(n, e) : t.resolve(n, _, e), vt = (t, n) => {
  if (Array.isArray(t))
    return t.filter((e) => n(e));
  throw new Error("Invalid data format");
}, i = async (t, n, e, r = 2) => {
  const s = ht(e);
  return t.writeFile(n, JSON.stringify(s, null, r), "utf-8");
}, u = async (t, n, e) => {
  const r = await t.readFile(n, "utf-8"), s = JSON.parse(r);
  return vt(s, e);
}, G = (t, n) => c(t, n, H), Ct = (t, n, e, r, s = 2) => {
  const o = G(t, e);
  return i(n, o, r, s);
}, pt = async (t, n, e) => {
  const r = G(t, e);
  return u(n, r, q);
}, W = (t, n) => c(t, n, Q), Nt = (t, n, e, r, s = 2) => {
  const o = W(t, e);
  return i(n, o, r, s);
}, Pt = async (t, n, e) => {
  const r = W(t, e);
  return u(n, r, X);
}, $ = (t, n) => c(t, n, Z), gt = (t, n, e, r, s = 2) => {
  const o = $(t, e);
  return i(n, o, r, s);
}, zt = async (t, n, e) => {
  const r = $(t, e);
  return u(n, r, b);
}, B = (t, n) => c(t, n, tt), ft = (t, n, e, r, s = 2) => {
  const o = B(t, e);
  return i(n, o, r, s);
}, kt = async (t, n, e) => {
  const r = B(t, e);
  return u(n, r, nt);
}, x = (t, n) => c(t, n, et), Gt = (t, n, e, r, s = 2) => {
  const o = x(t, e);
  return i(n, o, r, s);
}, Wt = async (t, n, e) => {
  const r = x(t, e);
  return u(n, r, rt);
}, j = (t, n) => c(t, n, st), $t = (t, n, e, r, s = 2) => {
  const o = j(t, e);
  return i(n, o, r, s);
}, Bt = async (t, n, e) => {
  const r = j(t, e);
  return u(n, r, ot);
}, L = (t, n) => c(t, n, at), xt = (t, n, e, r, s = 2) => {
  const o = L(t, e);
  return i(n, o, r, s);
}, jt = async (t, n, e) => {
  const r = L(t, e);
  return u(n, r, ct);
}, U = (t, n) => c(t, n, it), Lt = (t, n, e, r, s = 2) => {
  const o = U(t, e);
  return i(n, o, r, s);
}, Ut = async (t, n, e) => {
  const r = U(t, e);
  return u(n, r, ut);
}, Vt = (t) => typeof t == "object" && t !== null && "id" in t && typeof t.id == "number", V = (t, n) => c(t, n, mt), An = (t, n, e, r, s = 2) => {
  const o = V(t, e);
  return i(n, o, r, s);
}, Jt = async (t, n, e) => {
  const r = V(t, e);
  return u(n, r, Vt);
}, Kt = (t) => !!t && typeof t == "object" && "id" in t, J = (t, n) => c(t, n, lt), _n = (t, n, e, r, s = 2) => {
  const o = J(t, e);
  return i(n, o, r, s);
}, Yt = async (t, n, e) => {
  const r = J(t, e);
  return u(n, r, Kt);
}, K = (t, n) => c(t, n, Et), In = (t, n, e, r, s = 2) => {
  const o = K(t, e);
  return i(n, o, r, s);
}, Ht = async (t, n, e) => {
  const r = K(t, e);
  return u(n, r, d);
}, qt = (t) => t.startsWith("Map") && t.endsWith(".json"), Sn = async (t, n) => (await t.readdir(n, { withFileTypes: !0 })).filter(
  (e) => e.isFile() && qt(e.name)
), Qt = (t) => `Map${String(t).padStart(3, "0")}.json`, Xt = (t, n, e) => {
  const r = Qt(e);
  return { filePath: t.resolve(n, r), fileName: r };
}, Zt = (t) => Dt(t), bt = async (t, n, e, r) => {
  const { filePath: s, fileName: o } = Xt(n, e, r.id);
  try {
    const m = await t.readFile(s, "utf-8"), A = Zt(JSON.parse(m));
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
}, dn = async (t, n, e, r, s) => (s ?? await Ht(n, t, e)).filter((m) => !!m && d(m)).map(async (m) => {
  const A = await bt(
    t,
    n,
    e,
    m
  );
  return r(A);
}), tn = (t) => !!t, Y = (t, n) => c(t, n, At), Rn = (t, n, e, r, s = 2) => {
  const o = Y(t, e), m = JSON.stringify(r, null, s);
  return n.writeFile(o, m, "utf8");
}, Fn = async (t, n, e) => {
  const r = Y(t, e), s = await n.readFile(r, "utf8"), o = JSON.parse(s);
  if (!tn(o))
    throw new Error(`Invalid system data: ${r}`);
  return o;
}, wn = async (t, n, e, r) => ({
  actor: r.actor ? r.actor(
    await pt(n, t, e),
    yt
  ) : void 0,
  armor: r.armor ? r.armor(
    await Pt(n, t, e),
    Tt
  ) : void 0,
  enemy: r.enemy ? r.enemy(
    await kt(n, t, e),
    Ot
  ) : void 0,
  class: r.class ? r.class(
    await zt(n, t, e),
    wt
  ) : void 0,
  item: r.item ? r.item(
    await Wt(n, t, e),
    Ft
  ) : void 0,
  skill: r.skill ? r.skill(
    await Bt(n, t, e),
    Rt
  ) : void 0,
  state: r.state ? r.state(
    await jt(n, t, e),
    dt
  ) : void 0,
  weapon: r.weapon ? r.weapon(
    await Ut(n, t, e),
    St
  ) : void 0,
  troop: r.troop ? r.troop(
    await Jt(n, t, e),
    It
  ) : void 0,
  commonEvent: r.commonEvent ? r.commonEvent(
    await Yt(n, t, e),
    _t
  ) : void 0
}), l = (t) => {
  try {
    return t();
  } catch {
    return Promise.resolve();
  }
}, On = async (t, n, e, r) => Promise.all([
  l(() => Ct(n, t, e, r.actors)),
  l(() => ft(n, t, e, r.enemies)),
  l(() => Nt(n, t, e, r.armors)),
  l(() => Lt(n, t, e, r.weapons)),
  l(() => gt(n, t, e, r.classes)),
  l(() => Gt(n, t, e, r.items)),
  l(() => $t(n, t, e, r.skills)),
  l(() => xt(n, t, e, r.states))
]), D = (t, n, e, r) => {
  const s = t.normalize(n);
  return s.endsWith(`${t.sep}${e}`) ? t.resolve(s, r) : s.endsWith(
    `${t.sep}${e}${t.sep}${r}`
  ) ? s : t.resolve(n, e, r);
}, nn = (t) => !t.includes("."), en = (t, n, e, r, s, o) => {
  if (!nn(s))
    throw new Error(`Invalid file path: ${s}`);
  const m = D(t, n, e, r);
  return t.join(m, `${s}.${o}`);
}, a = (t, n, e, r) => en(
  t,
  n,
  E,
  e,
  r,
  "png"
), Tn = (t, n, e) => a(t, n, R, e), yn = (t, n, e) => a(t, n, F, e), Mn = (t, n, e) => a(t, n, w, e), hn = (t, n, e) => a(t, n, O, e), vn = (t, n, e) => a(t, n, T, e), Cn = (t, n, e) => a(t, n, y, e), pn = (t, n, e) => a(
  t,
  n,
  M,
  e
), Nn = (t, n, e) => a(
  t,
  n,
  h,
  e
), Pn = (t, n, e) => a(t, n, v, e), gn = (t, n, e) => a(t, n, C, e), zn = (t, n, e) => a(
  t,
  n,
  p,
  e
), fn = (t, n, e) => a(t, n, N, e), kn = (t, n, e) => a(
  t,
  n,
  P,
  e
), Gn = (t, n, e) => a(t, n, g, e), Wn = (t, n, e) => a(t, n, z, e), $n = (t, n, e) => a(t, n, f, e), Bn = (t, n, e) => a(t, n, k, e), rn = [
  R,
  F,
  w,
  O
], sn = [
  T,
  y,
  M,
  h,
  v,
  C,
  p,
  N,
  P,
  g,
  z,
  f,
  k
], S = (t, n, e, r, s) => {
  const o = D(t, e, r, s);
  return n.mkdir(o, {
    recursive: !0
  });
}, xn = (t, n, e) => sn.map((r) => S(t, n, e, E, r)), jn = (t, n, e) => rn.map((r) => S(t, n, e, E, r)), Ln = (t, n, e) => [S(t, n, e, _, "")], Un = (t) => t === "" ? !0 : !(t.endsWith("/") || an(t) || cn(t)), on = [
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
], an = (t) => /[.#\\]/.test(t), cn = (t) => t.split("/").some(
  (e) => on.includes(e.toLowerCase())
), Vn = async (t, n, e, r) => {
  const s = D(t, e, E, r);
  return (await n.readdir(s, { withFileTypes: !0 })).filter(ln);
}, I = (t, n) => t.name.endsWith(n), un = (t) => I(t, ".ogg") || I(t, ".m4a"), mn = (t) => I(t, ".png"), ln = (t) => t.isFile() && mn(t), En = (t) => t.isFile() && un(t), Jn = async (t, n, e, r) => {
  const s = D(t, e, Mt, r);
  return (await n.readdir(s, { withFileTypes: !0 })).filter(En);
};
export {
  pn as buildBattleback1Path,
  Nn as buildBattleback2Path,
  Tn as buildBgmPath,
  yn as buildBgsPath,
  Pn as buildCharactersImagePath,
  gn as buildEnemyImagesPath,
  vn as buildFaceImagesPath,
  Mn as buildMePath,
  zn as buildParallacesPath,
  Cn as buildPicturesPath,
  hn as buildSePath,
  kn as buildSideVewEnemiesPath,
  fn as buildSideViewActorsPath,
  Gn as buildSystemImagePath,
  Wn as buildTilesetImagesPath,
  $n as buildTitle1ImagesPath,
  Bn as buildTitle2ImagesPath,
  wn as dispatchHandlers,
  G as ensureActorDataPath,
  W as ensureArmorDataPath,
  $ as ensureClassDataPath,
  J as ensureCommonEventDataPath,
  B as ensureEnemyDataPath,
  x as ensureItemDataPath,
  K as ensureMapInfoDataPath,
  j as ensureSkillDataPath,
  L as ensureStateDataPath,
  Y as ensureSystemDataPath,
  V as ensureTroopDataPath,
  U as ensureWeaponDataPath,
  En as isAudioDirent,
  un as isAudioFileExtension,
  ln as isImageDirent,
  mn as isImageFileExtension,
  qt as isMapFileName,
  Un as isValidAssetPath,
  Jn as listupAudioFiles,
  Vn as listupImageFiles,
  Sn as listupMapFiles,
  jn as makeAudioFolders,
  Ln as makeDataFoldes,
  xn as makeImageFolders,
  dn as mappingAllMapFiles,
  bt as readMapFileFromInfo,
  pt as readRmmzActorData,
  Pt as readRmmzArmorData,
  zt as readRmmzClassData,
  Yt as readRmmzCommonEventData,
  kt as readRmmzEnemyData,
  Wt as readRmmzItemData,
  Ht as readRmmzMapInfoData,
  Bt as readRmmzSkillData,
  jt as readRmmzStateData,
  Fn as readRmmzSystemData,
  Jt as readRmmzTroopData,
  Ut as readRmmzWeaponData,
  Xt as resolveMapFilePath,
  On as writeDataFiles,
  Ct as writeRmmzActorData,
  Nt as writeRmmzArmorData,
  gt as writeRmmzClassData,
  _n as writeRmmzCommonEventData,
  ft as writeRmmzEnemyData,
  Gt as writeRmmzItemData,
  In as writeRmmzMapInfoData,
  $t as writeRmmzSkillData,
  xt as writeRmmzStateData,
  Rn as writeRmmzSystemData,
  An as writeRmmzTroopData,
  Lt as writeRmmzWeaponData
};
//# sourceMappingURL=rpgFolder.es.js.map
