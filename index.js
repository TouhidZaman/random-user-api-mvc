const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); // required to use .env file

const userRoute = require("./routes/v1/user.route");

const port = process.env.PORT || 5000;

// Application Level Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to random user API server",
    author: {
      name: "Muhammad Touhiduzzaman",
      email: "touhid4bd@gmail.com",
      url: "https://touhid-zaman.web.app",
    },
  });
});

app.get("/api/v1/", (req, res) => {
  res.status(200).send({
    message: "Welcome to random user API V1 server",
    apiVersion: "v1",
    author: {
      name: "Muhammad Touhiduzzaman",
      email: "touhid4bd@gmail.com",
      url: "https://touhid-zaman.web.app",
    },
  });
});

app.all("*", (req, res) => {
  res.status(404).send({
    message: "No route found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
