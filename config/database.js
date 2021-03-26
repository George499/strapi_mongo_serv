module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb://admin:admin@cluster0-shard-00-00.ixl4y.mongodb.net:27017,cluster0-shard-00-01.ixl4y.mongodb.net:27017,cluster0-shard-00-02.ixl4y.mongodb.net:27017/nextjs_serv?ssl=true&replicaSet=atlas-wd2p8o-shard-0&authSource=admin&retryWrites=true&w=majority",
        // host: env("DATABASE_HOST", "cluster0.ixl4y.mongodb.net"),
        // srv: env.bool("DATABASE_SRV", true),
        // port: env.int("DATABASE_PORT", 27017),
        // database: env("DATABASE_NAME", "nextjs_serv"),
        // username: env("DATABASE_USERNAME", "admin"),
        // password: env("DATABASE_PASSWORD", "admin"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
        tlsInsecure: true,
      },
    },
  },
});
