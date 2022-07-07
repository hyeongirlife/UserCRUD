const express = require("express")
const router = express.Router()
const cookieParser = require("cookie-parser")
const { User } = require("./models")
const PORT = 4000
const url = require("url")
// require("dotenv").config()
const morgan = require("morgan")
const { Server } = require('http')
const logger = morgan("dev")


const app = express()

app.use(logger)
//form-data를 해석하는 라이브러리
app.use(express.urlencoded({ extended: true }))
//컴퓨터가 읽을 수 있는 json 파일로 변환하는 과정
app.use(express.json())
app.use(cookieParser())

app.use("/login", express.static("login.html"))
app.use("/main", express.static("main.html"))

app.get("/", async (req, res) => {
  res.sendFile(__dirname + '/login.html')
})
app.get(`/main`, async (req, res) => {
  console.log(req.query)
  const username = document.querySelector("li")
  username = req.query.username
})

app.post("/login", async (req, res) => {
  console.log(req.body);
  const userPassword = req.body.userpw
  const userId = req.body.userid
  try {
    const result = await User.findOne({
      where: {
        username: userId
      }
    })
    console.log("result####", result.dataValues)
    if (result.dataValues) {
      return res.redirect(`/main?username=${userId}&password=${userPassword}`)
      // return res.redirect(url, format({
      //   pathname: "/main",
      //   query: {
      //     "username": userId,
      //     "password": userPassword
      //   }
      // }))
      // console.log("res####", res)
    } else {
      res.redirect("/")
    }
  } catch (err) {
    console.log("에러###", err)
  }
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

