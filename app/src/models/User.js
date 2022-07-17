"use strict"
const UserStorage = require("./UserStorage")

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body
    //비동기로 login()를 실행시켜 변수를 모두 받아올 때 까지 사용
    try {
      const user = await UserStorage.getUserInfo(client.id)

      console.log("user###", user)

      if (user) {
        if (user.id === client.id && user.password === client.password) {
          return { success: true }
        }
        return { success: false, message: "비밀번호가 틀렸습니다." }
      }
      return { success: false, message: "존재하지 않는 아이디입니다." }
    } catch (err) {
      return { success: false, err }
    }
  }
  async register() {
    const client = this.body
    try {
      const response = await UserStorage.save(client);
      return response
    }
    catch (err) {
      return { success: false, err }
    }
  }
}

module.exports = User