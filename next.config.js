/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // No remote patterns — every asset lives under /public/images/.
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
