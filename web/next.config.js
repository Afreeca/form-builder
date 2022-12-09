/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    formBuilderApi: process.env.FORM_BUILDER_API
  }
}

module.exports = nextConfig
