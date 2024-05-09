import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello </h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/fardan", (req, res) => {
  //something with data
  res.sendStatus(200);
});

app.patch("/user/fardan", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/fardan", (req, res) => {
  //delete code
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port   ${port}`);
});
