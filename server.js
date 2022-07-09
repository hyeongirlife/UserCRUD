const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(bodyparser.json())

let routes = require("./routes/user")
routes(app)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is working!`)
})
