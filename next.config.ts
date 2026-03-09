import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
};
export default nextConfig;
