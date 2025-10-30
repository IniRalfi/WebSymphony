import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
    // Increase timeout for slow image loading
    minimumCacheTTL: 60,
    // Add image optimization settings
    formats: ["image/webp", "image/avif"],
    // Increase timeout (in seconds)
    dangerouslyAllowSVG: false,
  },
  // Add experimental features for better image handling
  experimental: {
    // Increase fetch timeout
    proxyTimeout: 30000, // 30 seconds
  },
}

export default nextConfig
