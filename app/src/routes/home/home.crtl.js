"use strict"
const User = require('../../../models/User')
const UserStorage = require("../../../models/UserStorage")

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
}
const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login()
    console.log(req)
    return res.json(response)
  }
}

module.exports = { output, process }