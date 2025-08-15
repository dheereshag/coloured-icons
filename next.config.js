/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable the React Compiler for automatic memoization and performance optimizations
    reactCompiler: true,
  },
};

export default nextConfig;
