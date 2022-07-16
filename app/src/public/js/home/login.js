"use strict"

const id = document.querySelector("#id")
const password = document.querySelector("#password")
const loginButton = document.querySelector("#button")

loginButton.addEventListener("click", login)

function login() {
  if (!id.value) return alert("아이디를 입력하세요")
  if (!password.value) return alert("비밀번호를 입력해주세요")
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
      console.log(res)
      if (res.success) {
        location.href = "/"
      } else {
        if (res.err) return alert(res.err);
        alert(res.message);
      }
    })
    .catch(err => {
      console.log(err)

    })
}
