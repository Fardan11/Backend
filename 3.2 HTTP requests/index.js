import express, { raw } from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello </h1>");
});

app.get("/About", (req, res) => {
  res.send("<h1>Im Fardan </h1>");
});

app.get("/Contact", (req, res) => {
  res.send("<h1>Number... </h1>");
});
app.listen(port, () => {
  console.log(`Server started on port   ${port}`);
});
