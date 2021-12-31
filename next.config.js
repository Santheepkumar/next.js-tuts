/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["robohash.org"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/users",
        permanent: true,
      },
    ];
  },
};
