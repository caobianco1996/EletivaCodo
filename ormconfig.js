const required = ["DB_HOST", "DB_USERNAME", "DB_PASSWORD", "DB_DATABASE"];
const missing = required.filter((name) => !process.env[name]);
if (missing.length) {
  throw new Error(`Missing database environment variables: ${missing.join(", ")}`);
}

module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/entities/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
    entitiesDir: "./src/entities"
  }
};
