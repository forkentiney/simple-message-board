const { Pool } = require('pg');

const host = process.env.DATABASE_URL;
const user = process.env.DATABASE_USER;
const database = process.env.DATABASE_NAME;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.DATABASE_PORT;

module.exports = new Pool({
	connectionString: `postgresql://${user}:${password}@${host}:${port}/${database}`
});
