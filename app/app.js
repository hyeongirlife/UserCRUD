// //express를 사용해야 하는 이유
// const http = require("http")
// const app = http.createServer((req, res) => {
//   //요청 바디를 content-type을 text/html, 캐릭터셋을 utf-8로 변경 해 달라.
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
//   console.log(req.url)
//   if (req.url === "/") {
//     res.end("여기는 루트 입니다.")
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 입니다.")
//   }
// })
"use strict"

const express = require("express")
const app = express()
const dotenv = require("dotenv")
const morgan = require("morgan")
dotenv.config();

// const bodyparser = require("body-parser")
const PORT = process.env.PORT || 8080
const home = require("./src/routes/home")
const accessLogStream = require("./src/config/log")



// url을 "/"으로 이동하게 되면 home 메소드를 실행하게 된다.
app.use(express.static(`${__dirname}/src/public`))
app.use(express.json())
app.use(morgan('common', { stream: accessLogStream }))
// app.use(express.urlencoded({ extended: true }))
app.use("/", home)

//앱 세팅
app.set("views", "./src/views")
app.set("view engine", "ejs")


// app.get("/", (req, res) => {
//   res.render("home/index")
// })

// app.get("/login", (req, res) => {
//   res.render("home/login")
// })

module.exports = app;
