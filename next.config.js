/** @format */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withRoutes = require('nextjs-routes/config')();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}',
        },
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
        '@mui/styles': {
            transform: '@mui/styles/{{member}}',
        },
        '@mui/lab': {
            transform: '@mui/lab/{{member}}',
        },
    },
    onDemandEntries: {
        // Period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 600 * 1000,
        // Number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 15,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles/sass')],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                path: false,
                worker_threads: false,
            };
        }

        // https://react-svgr.com/docs/next/#usage

        return config;
    },
};

module.exports = withBundleAnalyzer(withRoutes(nextConfig));
