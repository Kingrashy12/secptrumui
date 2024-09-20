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
  images: {
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
        protocol: "https",
        pathname: "/img/*",
        port: "",
      },
    ],
  },
};

export default nextConfig;
