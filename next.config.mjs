import createNextIntlPlugin from "next-intl/plugin"
import { env } from "./.env.mjs"

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: env.runtimeEnv,
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "**",
      }
    ],
  },
}

export default withNextIntl(nextConfig)
