const fs = require("fs")
const appRoot = require("app-root-path")

const accessLogStream = fs.createWriteStream(
  //app.js의 루트경로는 __dirname으로 가져옴.
  `${appRoot}/log/access.log`,
  { flags: 'a' }
)

module.exports = accessLogStream