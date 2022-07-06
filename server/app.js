const express = require("express")
const router = express.Router()
const cookieParser = require("cookie-parser")
const User = require("./models")
require("dotenv").config()

const app = express()

//form-data를 해석하는 라이브러리
app.use(express.urlencoded({ extended: true }))
//컴퓨터가 읽을 수 있는 json 파일로 변환하는 과정
app.use(express.json())
app.use(cookieParser())

app.use("/login", express.static("login.html"))
app.use("/main", express.static("main.html"))

app.post("/login", async (req, res) => {
  console.log(req.body);
  const userPassword = req.body.userpw
  const userId = req.body.userid
  const result = await User.findOne({
    where: userId
  })
  console.log("result####", result)
  return res.redirect("/login");
})

app.listen(8080, () => console.log("http://localhost:8080"))

