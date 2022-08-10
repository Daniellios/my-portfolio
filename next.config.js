const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/htmls/HiddenObjGame.html",
        destination: "/pages/api/games.js",
      },
      {
        source: "/my-portfolio-blue-pi.vercel.app/htmls/MahjongGame.html",
        destination: "/htmls/MahjongGame.html",
      },
    ]
  },
}

module.exports = nextConfig
