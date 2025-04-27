// apps/dev-server/src/api/server.ts
import express from "express";

export const middleware = express();

middleware.use("/static/games/", express.static("./games"));
middleware.get("/api/gameList", (_, res) => {
  // games/以下のディレクトリ一覧を返す実装
  res.json({ list: ["dummy"] });
});
