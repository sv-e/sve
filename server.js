const express = require("express");
const path = require("path");

const app = express();

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./api/db.json");
const middlewares = jsonServer.defaults({
  static: "./build"
});

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

app.get("*", (req, res) => {
  let url = path.join(__dirname, "../client/build", "index.html");
  if (!url.startsWith("/app/")) // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

server.listen(PORT, () => {
  console.log(">>>>> Server is running");
});