import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["192.168.1.4"],
  },

  webpack: (config) => {
    config.ignoreWarnings = [
      (warning: { message: string | string[] }) =>
        warning.message.includes("DialogContent requires a DialogTitle"),
    ];
    return config;
  },
};

export default withNextIntl(nextConfig);
