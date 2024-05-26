import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/article-1", (req, res) => {
  res.render("article-1.ejs");
});

app.get("/article-2", (req, res) => {
  res.render("article-2.ejs");
});
app.get("/article-3", (req, res) => {
  res.render("article-3.ejs");
});
app.get("/article-4", (req, res) => {
  res.render("article-4.ejs");
});

app.listen(port, (req, res) => {
  console.log(`Server running on port: ${port}`);
});
