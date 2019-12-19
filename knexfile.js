module.exports = {
  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
