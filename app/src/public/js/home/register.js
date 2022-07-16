"use strict"

const id = document.querySelector("#id")
const username = document.querySelector("#name")
const password = document.querySelector("#password")
const registerButton = document.querySelector("#button")
const confirmPassword = document.querySelector("#confirm-password")

registerButton.addEventListener("click", register)

function register() {
  if (!id) {
    return alert("아이디를 입력하십시오")
  }
  if (password.value !== confirmPassword.value) {
    return alert("비밀번호가 일치하지 않습니다.")
  }
  const req = {
    id: id.value,
    name: username.value,
    password: password.value,
  }
  console.log("stringifyreq", JSON.stringify(req))
  console.log("req", req)

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        location.href = "/login"
      } else {
        if (res.err) return alert(res.err)
        alert(res.message)
      }
    })
    .catch(err => console.log(err))

}
