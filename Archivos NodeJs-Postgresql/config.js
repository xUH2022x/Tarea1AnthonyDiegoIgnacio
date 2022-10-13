const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'kashin.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'ogiobcjy',
    password: env.DB_PASSWORD || 'WWfd-Va-uOPNDXMkpZzyIqYsa-guB_qx',
    database: env.DB_NAME || 'ogiobcjy',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;