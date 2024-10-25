const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const loginmodel = require("./models/login-singup");
// const mongoose = require('mongoose');
// const pagespath=path.join(__dirname , './pages')imp[log path]

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbConfig = require("./db");
const roomsroute = require("./routes/roomsroute");
const adminRoutes = require("./routes/adminRoutes")


app.use(express.urlencoded({ extended: false }));

app.use("/api/room", roomsroute);
app.use("/api/admin", adminRoutes)
// app.set("views", pagespath)imp[log path]

// app.get("/", (_req, res) => {
//   res.status(200).json({
//     status: "success",
//   });

//   // //login api
//   // app.get("/", (_req, res) => {
//   //   res.render("Login");
//   // });
//   // app.get("/signup", (_req, res) => {
//   //   res.render("signup");
//   // });

// });
require("dotenv").config;
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
