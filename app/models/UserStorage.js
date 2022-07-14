'use strict'
const fs = require("fs").promises;

class UserStorage {
  // #는 변수를 은닉화 해서 외부에서 자유롭게 참조할 수 없도록 함.
  //은닉화 메소드는 클래스 맨 위로 올리는 것이 코드 컨벤션!
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id)
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo
  }

  static getUsers(...fields) {
    // const users = this.#users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})
    console.log(newUsers)
  }
  static getUserInfo(id) {
    // const users = this.#users
    return fs.readFile("./src/database/user.json")
      .then(data => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.err)

    // , (err, data) => {
  }




  static save(userInfo) {
    //기존에 db에 있는 정보인지 확인
    // const users = this.#users
    users.id.push(userInfo.id)
    users.name.push(userInfo.name)
    users.password.push(userInfo.password)
    console.log(users);
    return { success: true }
  }
}


module.exports = UserStorage;