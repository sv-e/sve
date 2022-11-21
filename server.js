// const express = require("express");
// const path = require("path");

// const app = express();

// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("./api/db.json");
// const middlewares = jsonServer.defaults({
//   static: "./build"
// });

// const PORT = process.env.PORT || 3001;

// server.use(middlewares);
// server.use(router);

// app.use(express.static(path.join(__dirname, "client/build")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.resolve(__dirname + "/client/build/index.html"));
// });

// server.listen(PORT, () => {
//   console.log(">>>>> Server is running");
// });

const jsonServer = require("json-server");
const app = jsonServer.create();
const path = require("path");
const express = require("express");
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;

app.use("./api/db.json", middlewares, router);
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
