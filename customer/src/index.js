const express = require("express");
require("dotenv").config();
const { PORT } = require("./config");
const { databaseConnection } = require("./database");
const expressApp = require("./express-app");

const StartServer = async () => {
  const app = express();

  await databaseConnection();

  await expressApp(app);

  app.get("/", (req, res) => {
    res.send("hellowww");
  });

  app
    .listen(PORT, () => {
      console.log(`Customer listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
