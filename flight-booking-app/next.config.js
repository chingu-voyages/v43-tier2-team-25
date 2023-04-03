/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  'via.placeholder.com',
        port: '',
        pathname: '/600/**',
      },
    ],
  },
}
