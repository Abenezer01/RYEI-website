/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // You can remove the 'experimental' block unless you are on a very old version of Next.js 13
  env: {
    // If you want to make the API key available globally without process.env.NEXT_PUBLIC_ prefix
    // (Though using .env file is generally better)
    // GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  }
}

module.exports = nextConfig;