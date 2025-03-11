import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/UNI_SOCIAL", // Replace with your actual repo name
  assetPrefix: "/UNI_SOCIAL", // Needed to load assets correctly
};

module.exports = nextConfig;

