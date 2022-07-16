'use strict'
const { promiseImpl } = require('ejs');
const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    // mysql은 promise를 지원하지 않기 때문에 promise 객체를 생성 후 그 안에서
    // mysql을 실행 시켜야 한다.
    //실행이 오래걸리는 작업은 promise를 사용하여 함수가 하나의 일만 하도록 함
    const query = "SELECT *  FROM users WHERE id = ?"
    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, data) => {
        if (err) reject(err)
        //else 사용하지 않으면 resolve만 응답함
        else resolve(data[0])
      })
    })
  }



  static async save(userInfo) {
    const query = "INSERT INTO users(id,name,password) VALUES (?,?,?)"
    return new Promise((resolve, reject) => {
      db.query(query, [userInfo.id, userInfo.name, userInfo.password], (err) => {
        if (err) reject(err)
        else resolve({ success: true })
      })
    })
  }
}


module.exports = UserStorage;