import express from "express";

const app = express();
const port = 3000;

// const d = new Date();
// let day = d.getDate();

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: "a weekday",
    advice: "Its time to work hard",
  });
});
app.listen(port, () => {
  console.log(`Server Up and Running ${port}`);
});
