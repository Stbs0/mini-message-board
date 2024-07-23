const express = require("express");
const app = express();
const homeRouter = require("./routers/homeRouter");
const newMessagesRouter = require("./routers/newMessagesrouter");
const path = require("path");
const db = require("./db/queries");
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const messages = await db.getAllUSers();
  console.log(messages);
  res.render("index", { messages });
});
app.get("/:user", async (req, res) => {
  const { user } = req.params;
  const message = await db.getUser(user);
  console.log(message);
  res.render("message", { message: message[0] });
});
app.get("/new", (req, res) => {
  res.render("form");
});
app.post("/new", (req, res) => {
  const { message, author } = req.body;
  console.log("first");
  messages.push({ user: author, text: message, added: new Date() });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
