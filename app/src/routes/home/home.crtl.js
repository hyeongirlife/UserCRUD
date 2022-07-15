"use strict"
const User = require('../../../models/User')

// const users = {
//   id: ["london", "roma", "florence"],
//   password: ['1234', '5678', '9101112']
// }
const output = {
  home: (req, res) => {
    res.render("home/index")
  }
  ,
  login: (req, res) => {
    res.render("home/login")
  },
  register: (req, res) => {
    res.render("home/register")
  }
}
const process = {
  login: async (req, res) => {
    //user 인스턴스 생성
    const user = new User(req.body);
    const response = await user.login()
    console.log(response)
    return res.json(response)
  },
  register: async (req, res) => {
    const user = new User(req.body)
    const response = await user.register()
    return res.json(response)
  },
}

module.exports = { output, process }