/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/Raiza-Thalles" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Raiza-Thalles/" : "",
};

module.exports = nextConfig;
