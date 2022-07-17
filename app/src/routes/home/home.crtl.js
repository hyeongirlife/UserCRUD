"use strict"
const User = require('../../models/User')
const logger = require("../../config/logger")

// const users = {
//   id: ["london", "roma", "florence"],
//   password: ['1234', '5678', '9101112']
// }
const output = {
  home: (req, res) => {
    logger.info(`GET/304, "홈 화면으로 이동"`)
    res.render("home/index")
  }
  ,
  login: (req, res) => {
    logger.info(`GET/login 304, "로그인 화면으로 이동"`)
    res.render("home/login")
  },
  register: (req, res) => {
    logger.info(`GET/register 304, "회원가입 화면으로 이동"`)
    res.render("home/register")
  }
}
const process = {
  login: async (req, res) => {
    //user 인스턴스 생성
    const user = new User(req.body);
    const response = await user.login()
    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200
    }
    log(response, url)
    console.log(response)
    return res.status(url.status).json(response)
  },
  register: async (req, res) => {
    const user = new User(req.body)
    const response = await user.register()
    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201
    }
    log(response, url)
    return res.status(url.status).json(response)
  },
}
const log = (response, url) => {
  if (response.err) {v 
    logger.error(
      `${url.method} ${url.path} ${url.status} Response : ${response.success}, ${response.err}"`
    )
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status}  Response: ${response.success}, ${response.message || ""}"`
    )
  }
}
module.exports = { output, process }