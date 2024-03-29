/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return[
      {
        source:'/login',
        destination:'/auth/login'
      },
      {
        source:'/register',
        destination:'/auth/register'
      },
      {
        source:'/about',
        destination:'/about'
      },
      {
        source:'/example',
        destination:'/example'
      },
    ]
  },
}

module.exports = nextConfig
