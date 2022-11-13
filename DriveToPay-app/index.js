import express from "express";
import bodyParser from "body-parser";

var app = express();
app.use(express.static("src"));
app.use(express.static("../DrivetoPay-contracts/build/contracts"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var services = [];
app.get("/", function (req, res) {
  res.render("index");
});

//businesscreate page get req
app.get("/BusinessCreate", function (req, res) {
  //alert("here");
  //res.send("you whats good");
  res.render("BusinessCreate");
});

//userpage get rep
app.get("/UserPage", function (req, res) {
  res.render("UserPage");
});

//OnlyBusinessPage
app.get("/OnlyBusinessPage", function (req, res) {
  res.render("OnlyBusinessPage", { servicesList: services });
});

app.post("/BusinessCreate", function (req, res) {
  const service = req.body.service;
  const data = {
    name: req.body.nameb,
    service: req.body.service,
    price: req.body.price,
  };
  services.push(data);
  res.redirect("OnlyBusinessPage");
});

app.listen(3001, function () {
  console.log("app listening on port 3001!");
});
