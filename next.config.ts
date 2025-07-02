import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3845",
        pathname: "/assets/**",
      },
    ],
  },
  eslint: {
    // This option allows you to ignore ESLint errors during the build process.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
