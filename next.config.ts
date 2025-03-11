import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/REPO_NAME", // Replace with your actual repository name
  assetPrefix: "/REPO_NAME", // Needed to load assets correctly
};

module.exports = nextConfig;

