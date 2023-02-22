// var http = require("http");

// const httpServer = http.createServer(handleServer);


// function handleServer(req, res) {
  
// }

// module.exports = httpServer;
const express = require("express");

const app = express();

app.get("/welcome", (req, res) => {
  res.send("Welcome to Dominos!");
  res.sendStatus(200);
});

app.get("/contact", (req, res) => {
  res.json({
    phone: "18602100000",
    email: "guestcaredominos@jublfood.com",
  });
  res.sendStatus(200);
});

app.listen(8081, () => {
  console.log("Listening to port 8081");
});
