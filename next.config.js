import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable the React Compiler for automatic memoization and performance optimizations
    reactCompiler: true,
  },
  // Ensure TS "@" alias works at runtime (Webpack resolver)
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    // Add common extensions just in case
    config.resolve.extensions = config.resolve.extensions || [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".mjs",
      ".json",
    ];
    return config;
  },
};

export default nextConfig;
