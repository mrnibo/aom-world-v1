/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/matchHistory',
          destination: 'https://www.aom.gg/api/matchHistory', // External API URL
        },
        {
          source: '/api/getRecentMatchHistory',
          destination: 'https://athens-live-api.worldsedgelink.com/community/leaderboard/getRecentMatchHistory', // External API URL
        },
      ];
    },
  };
  
  export default nextConfig;
  