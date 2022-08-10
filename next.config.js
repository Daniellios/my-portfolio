const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/my-portfolio-blue-pi.vercel.app/htmls/HiddenObjGame.html",
        destination: "/htmls/HiddenObjGame.html",
      },
      {
        source: "/my-portfolio-blue-pi.vercel.app/htmls/MahjongGame.html",
        destination: "/htmls/MahjongGame.html",
      },
    ]
  },
}

module.exports = nextConfig
