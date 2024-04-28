const config = {
    postgres: {
      host: "ep-delicate-thunder-a4g418u0-pooler.us-east-1.aws.neon.tech",
      user: "default",
      password: "iYg3Zfn4GyoD",
      database: "verceldb",
      ssl: {
        rejectUnauthorized: false // Importante para conexões SSL
      }
    }
  };
  
  module.exports = config;
  