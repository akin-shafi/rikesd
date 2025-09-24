/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co", "cdn.sanity.io"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
