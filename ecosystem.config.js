module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [{
      name      : 'mobilink',
      script    : 'bin/www.js',
      env: {
        NODE_ENV: 'development'
      },
      env_staging : {
        NODE_ENV: 'staging'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production: {
      key: '/Users/ssasoft/.ssh/id_rsa_gcp',
      user: 'deployer',
      host: '35.229.86.235',
      ref: 'origin/master',
      repo: 'https://github.com/aftabaig/mobilink_server.git',
      path: '/home/deployer/mobilink_server',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
