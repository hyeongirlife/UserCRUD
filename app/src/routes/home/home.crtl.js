"use strict"
const User = require('../../models/User')
const logger = require("../../config/logger")

// const users = {
//   id: ["london", "roma", "florence"],
//   password: ['1234', '5678', '9101112']
// }
const output = {
  home: (req, res) => {
    logger.info(`GET/200, "홈 화면으로 이동"`)
    res.render("home/index")
  }
  ,
  login: (req, res) => {
    logger.info(`GET/login 200, "로그인 화면으로 이동"`)
    res.render("home/login")
  },
  register: (req, res) => {
    logger.info(`GET/register 200, "회원가입 화면으로 이동"`)
    res.render("home/register")
  }
}
const process = {
  login: async (req, res) => {
    //user 인스턴스 생성
    const user = new User(req.body);
    const response = await user.login()
    if (response.err) {
      logger.error(
        `POST /login 200 Response : "success: ${response.success}, ${response.err}"`
      )
    } else {
      logger.info(
        `POST /login 200 Response : "success: ${response.success}, msg: ${response.message}"`
      )
    }
    console.log(response)
    return res.json(response)
  },
  register: async (req, res) => {
    const user = new User(req.body)
    const response = await user.register()
    if (response.err) {
      logger.error(
        `POST /register 200 Response : "success: ${response.success},${response.err}"`
      )
    } else {
      logger.info(
        `POST /register 200 Response : "success: ${response.success}, msg: ${response.message}"`
      )
    }
    return res.json(response)
  },
}

module.exports = { output, process }