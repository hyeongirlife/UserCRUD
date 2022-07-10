"use strict"
//ECMAScript의 엄격한 문법규칙을 따르겠다.

const express = require("express")
const router = express.Router()
const ctrl = require("./home.crtl")

router.get("/", ctrl.home)

router.get("/login", ctrl.login)

module.exports = router