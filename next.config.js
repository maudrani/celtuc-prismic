/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: true,
      // Enabled by default.
      cssProp: true,
      // Not supported yet.
      minify: false,
      // Not supported yet.
      transpileTemplateLiterals: false,
      // Not supported yet.
      pure: false,
    },
  },
};

module.exports = nextConfig;
