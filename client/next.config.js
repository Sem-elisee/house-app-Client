/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Pour résoudre le problème sur le serveur, utilisez la version ES5 de recharts
        if (isServer) {
          config.resolve.alias['recharts'] = 'recharts/es5';
        }
    
        return config;
      },
}

module.exports = nextConfig
