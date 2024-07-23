const pool = require("./pool");
const getAllUSers = async () => {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
};
const saveUSer = async (author, text) => {
  await pool.query("INSERT INTO messages (text, author) VALUES ($2,$1);", [
    author,
    text,
  ]);
};
const getUser = async (author) => {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE author = $1;",
    [author],
  );
  return rows;
};
module.exports = {
  getAllUSers,
  saveUSer,
  getUser,
};
