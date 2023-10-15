/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [process.env.NEXT_PUBLIC_DOMAIN]
    },
}

module.exports = nextConfig
