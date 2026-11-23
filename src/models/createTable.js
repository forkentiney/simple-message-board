#! /usr/bin/env node

const { Client } = require('pg');

const host = process.env.DATABASE_URL;
const user = process.env.DATABASE_USER;
const database = process.env.DATABASE_NAME;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.DATABASE_PORT;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name VARCHAR ( 255 ),
	message VARCHAR ( 255 ),
	added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`;

async function main() {
	console.log("Creating tables...");
	const client = new Client({
		connectionString: `postgresql://${user}:${password}@${host}:${port}/${database}`,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("Tables created");
};

main();
