import type { NextConfig } from "next";

// Fully static site — exported to out/ and served from Firebase Hosting (global CDN).
const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
