/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  //   serverComponentsExternalPackages: ["mongoose"],
  // },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "www.price4limo.com",
      "www.shofeur.com",
      "static.wixstatic.com",
      "hips.hearstapps.com",
      "www.google.com"
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
