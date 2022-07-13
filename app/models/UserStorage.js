'use strict'

class UserStorage {
  // #는 변수를 은닉화 해서 외부에서 자유롭게 참조할 수 없도록 함.
  static #users = {
    id: ["london", "roma", "florence"],
    password: ['1234', '5678', '9101112'],
    name: ["현걸", "동연", "현호"]
  };

  static getUsers(...fields) {
    const users = this.#users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})
    console.log(newUsers)
  }
  static getUserInfo(id) {
    const users = this.#users
    const idx = users.id.indexOf(id)
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo
  }
}


module.exports = UserStorage;