// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs"
const filename = "/htmls/hiddenObjGame.html"
export default async function api(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8")

  res.write(await fs.readFileSync(filename, "utf-8"))

  res.end()
}
