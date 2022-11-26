const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
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

  i18n: {
    locales: ["ru-Ru", "en-US"],
    defaultLocale: "ru-Ru",
  },
};

module.exports = nextConfig;
