module.exports = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  },
  images: {
    domains: [
      'res.cloudinary.com'
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}
