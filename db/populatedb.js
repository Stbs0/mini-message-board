const { Client } = require("pg");
require('dotenv').config()
const SQL = `
CREATE TABLE messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, text VARCHAR(255), author VARCHAR(30), added DATE NOT NULL DEFAULT CURRENT_DATE);

INSERT INTO messages (text, author) VALUES
    ('Hi there!', 'Amando'),
    ('Hello World!', 'Charles'),
    ('Greetings!', 'Katherine');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
     process.env.PG
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();