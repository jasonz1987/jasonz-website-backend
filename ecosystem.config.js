module.exports = {
    apps: [
      {
        name: 'jasonz-website-backend', // Your project name
        cwd: '/www/jasonz-website-backend', // Path to your project
        script: 'npm', // For this example we're using npm, could also be yarn
        args: 'start', // Script to start the Strapi server, `start` by default
        env: {
          APP_KEYS: 'O9KD3tJt3r5d7ZV0qFT9YQ==,51rlNaXGKmE3pZzriLPUEQ==,JXY6gRWNMbY04fzpBES/aw==,7pZMwcckAidwhH0WC3szUQ==', // you can find it in your project .env file.
          API_TOKEN_SALT: 'jhG+eZHRDwP4bF/V4AcMYQ==',
          ADMIN_JWT_SECRET: 'd3DyIBwzY1/9LlGIXpPpbQ==',
          JWT_SECRET: 'O6pxQiq1ETj13ULzmbGacQ==',
          NODE_ENV: 'production',
          DATABASE_HOST: 'localhost', // database Endpoint under 'Connectivity & Security' tab
          DATABASE_PORT: '3306',
          DATABASE_NAME: 'jasonz_website', // DB name under 'Configuration' tab
          DATABASE_USERNAME: 'root', // default username
          DATABASE_PASSWORD: 'v!qTT(bKIk.6',
        },
      },
    ],
  };
