const app = require("../app")
const https = require("https")
const fs = require("fs")
const logger = require("../src/config/logger")

const PORT = process.env.PORT || 8080

let server;

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(PORT, function () {
    logger.info(`HTTPS SERVER LISTENING ON https://localhost:${HTTPS_PORT}`);
  });
} else {
  server = app.listen(PORT, () =>
    logger.info(`현재 HTTP로 서버가 실행 중입니다 보안에 유의하세요`)
  );
}
module.exports = server;


// app.listen(PORT, () => {
//   logger.info(`${PORT}번 포트에서 server is open`)
// })
