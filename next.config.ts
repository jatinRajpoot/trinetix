import type { NextConfig } from "next";

// Firebase App Hosting needs server mode (no `output: "export"`).
// Keep `export` only for Docker/nginx static builds.
// `FIREBASE_APP_HOSTING` is set during App Hosting builds.
const isFirebaseAppHosting = !!process.env.FIREBASE_APP_HOSTING;

const nextConfig: NextConfig = {
  ...(isFirebaseAppHosting ? { output: "standalone" } : { output: "export" }),
  images: {
    // `export` needs unoptimized; App Hosting can use optimized images
    unoptimized: !isFirebaseAppHosting,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
