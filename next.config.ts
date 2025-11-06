import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Use Next 16's static export output mode (replaces `next export`)
  output: "export",
  // If you need any image or other config, add here
  // images: { unoptimized: true }, // example if using next/image in export mode
};

export default nextConfig;
