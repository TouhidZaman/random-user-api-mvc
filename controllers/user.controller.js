const fs = require("fs");

module.exports.getAllUser = (req, res) => {
  const limit = req.query.limit;
  fs.readFile("users.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      res.status(501).send({
        message: "Internal Server Error",
      });
    }
    const users = JSON.parse(data).slice(0, limit);
    res.status(200).send(users);
  });
};

module.exports.getRandomUser = (req, res) => {
  fs.readFile("users.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      res.status(501).send({
        message: "Internal Server Error",
      });
    }
    const users = JSON.parse(data);
    const randomUserIndex = Math.floor(Math.random() * users.length);
    res.status(200).send(users[randomUserIndex]);
  });
};
