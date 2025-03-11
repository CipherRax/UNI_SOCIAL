import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js image optimization
  },
};

module.exports = nextConfig;

