import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the dev site via your LAN IP (e.g. http://192.168.x.x:3000).
  // Update the IP if yours changes — run `npm run dev` to see the Network URL.
  allowedDevOrigins: ["192.168.1.165"],
};

export default nextConfig;
