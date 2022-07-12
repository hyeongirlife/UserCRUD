"use strict"

const id = document.querySelector("#id")
const password = document.querySelector("#password")
const loginButton = document.querySelector("button")

loginButton.addEventListener("click", login)

function login() {
  const req = {
    id: id.value,
    password: password.value
  }
  console.log("stringifyreq", JSON.stringify(req))
  console.log("req", req)
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  }).then(res => res.json())
    .then(res => {
      if (res.success) {
        location.href = "/"
        alert("성공적으로 로그인 되었습니다.")
      } else {
        alert("아이디 및 비밀번호를 다시 확인 해 주세요")
      }
    })
    .catch(err => {
      console.log(err)
    })
}
