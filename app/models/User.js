"use strict"
const UserStorage = require("../models/UserStorage")

class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const body = this.body
    const { id, password } = UserStorage.getUserInfo(body.id)
    // console.log(id, password)

    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true, message: "성공적으로 로그인 되었습니다." }
      }
      return { success: false, message: "비밀번호가 틀렸습니다." }
    }
    return { success: false, message: "존재하지 않는 아이디 입니다." }
  }
}

module.exports = User