/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true,
      namespace: "Sui",
      fileName: false,
    },
  },
};

export default nextConfig;
