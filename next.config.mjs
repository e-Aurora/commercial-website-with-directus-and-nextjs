const nextConfig = {
    images: {
      remotePatterns: [
      //protocol, hostname and port should be from your Directus URL
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8055',
          pathname: '/assets/**',
        },
      ],
    },
  };
  
  export default nextConfig;