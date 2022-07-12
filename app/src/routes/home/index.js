"use strict"
//ECMAScript의 엄격한 문법규칙을 따르겠다.

const express = require("express")
const router = express.Router()
const ctrl = require("./home.crtl")

router.get("/", ctrl.output.home)
router.get("/login", ctrl.output.login)
router.post("/login", ctrl.process.login)

module.exports = router