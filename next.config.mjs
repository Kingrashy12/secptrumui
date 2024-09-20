/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // compiler: {
  //   styledComponents: {
  //     displayName: true,
  //     namespace: "Sui",
  //     fileName: false,
  //   },
  // },
  experimental: {
    optimizePackageImports: ["react-icons", "styled-components"],
  },
};

export default nextConfig;
