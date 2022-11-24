/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    onDemandEntries: {
        // Period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 600 * 1000,
        // Number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 15,
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        const updatedConfig = config;
        if (!isServer) {
            updatedConfig.resolve.fallback = {
                ...updatedConfig.resolve.fallback,
                fs: false,
            };
        }

        return updatedConfig;
    },
};

module.exports = nextConfig;
