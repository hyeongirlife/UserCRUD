const express = require("express")
const router = express.Router()
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

