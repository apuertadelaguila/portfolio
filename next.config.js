
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
};

module.exports = {
  env: {
    REACT_APP_API_BASE_URL: 'alejandropuerta.netlify.app/api',
  },
}