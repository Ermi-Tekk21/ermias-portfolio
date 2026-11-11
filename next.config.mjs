/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*)\\.vercel\\.app',
          },
        ],
        destination: 'https://ermias.pro.et/:path*',
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
