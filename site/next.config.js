/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site imports theme files from outside the site/ directory.
  // Next.js restricts transpilation to files within the project root by default,
  // so we point the root one level up to include themes/ and src/.
  experimental: {},
  transpilePackages: [],
}

module.exports = nextConfig
