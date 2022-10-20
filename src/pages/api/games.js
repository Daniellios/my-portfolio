// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs"
const filename = "/htmls/HiddenObjGame.html"
export default async function api(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8")
  await res.write(fs.readFileSync(filename, "utf-8"))

  res.end()
}