const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/**
 * @type {import('next').NextConfig}
 */
const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  cleanDistDir: true,
  async rewrites() {
    return [
      {
        source: "/htmls/HiddenObjGame.html",
        destination: "/htmls/HiddenObjGame.html",
      },
      {
        source: "/my-portfolio-blue-pi.vercel.app/htmls/MahjongGame.html",
        destination: "/htmls/MahjongGame.html",
      },
    ];
  },
  images: {
    domains: ["i.ibb.co"],
  },
});
