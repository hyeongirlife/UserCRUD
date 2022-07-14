"use strict"
const UserStorage = require("./UserStorage")

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body
    const {id,password} = await UserStorage.getUserInfo(client.id)

    // console.log(id, password)

      if (id) {
        if (id === client.id && password === client.password) {
          return { success: true, message: "성공적으로 로그인 되었습니다." }
        }
        return { success: false, message: "비밀번호가 틀렸습니다." }
      }
      return { success: false, message: "존재하지 않는 아이디 입니다." }
  }
  register() {
    const client = this.body
    const response = UserStorage.save(client);
    return response

  }
}

module.exports = User