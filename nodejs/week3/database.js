const knex = require("knex")({
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "1234",
      database: process.env.DB_NAME || "hyf_node_week3_warmup",
      multipleStatements: false,
    },
  })
 module.exports = knex;