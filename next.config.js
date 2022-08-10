const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Webpack 5 is enabled by default
  // You can still use webpack 4 while upgrading to the latest version of Next.js by adding the "webpack5: false" flag
  presets: ["next/babel"],
  plugins: ["@babel/plugin-proposal-do-expressions"],
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
