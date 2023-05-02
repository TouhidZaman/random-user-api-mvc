const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); // required to use .env file

const port = process.env.PORT || 5000;

// Application Level Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({
    status: 200,
    message: "Welcome to random user API server",
    author: {
      name: "Muhammad Touhiduzzaman",
      email: "touhid4bd@gmail.com",
      url: "https://touhid-zaman.web.app",
    },
  });
});

app.all("*", (req, res) => {
  res.status(404).send({
    status: 404,
    message: "No route found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
