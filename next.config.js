
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://alejandropuerta.netlify.app/:path*',
        },
      ]
    },
    reactStrictMode: true,
    env: {
      apiUrl="alejandropuerta.netlify.app/api"
    },
};
