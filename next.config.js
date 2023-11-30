/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "cdn.sanity.io"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/about",
  //       permanent: true,
  //     },
  //     {
  //       source: "/",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
