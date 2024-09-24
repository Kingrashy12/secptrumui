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
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
