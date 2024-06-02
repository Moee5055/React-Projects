/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: `/id/**`,
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/products/**",
      },
      {
        protocol: "https",
        hostname: "forkify-api.herokuapp.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "http",
        hostname: "forkify-api.herokuapp.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
