/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['images.prismic.io'], formats: ['image/avif', 'image/webp'], }, 
}

module.exports = nextConfig
