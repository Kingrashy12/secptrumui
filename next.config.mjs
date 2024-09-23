/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
