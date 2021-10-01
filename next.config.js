module.exports = {
  reactStrictMode: true,
};

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
