"use strict"

const id = document.querySelector("#id")
const name = document.querySelector("#name")
const password = document.querySelector("#password")
const registerButton = document.querySelector("#button")
const confirmPassword = document.querySelector("#confirm-password")

registerButton.addEventListener("click", register)

function register() {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  }
  console.log("stringifyreq", JSON.stringify(req))
  console.log("req", req)

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  }).then(res => res.json())
    .then(res => {
      if (res.success) {
        location.href = "/"
        alert(res.message)
      } else {
        alert(res.message)
      }
    })
    .catch(err => {
      console.log(err)
    })
}
