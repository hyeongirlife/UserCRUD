"use strict"
//ECMAScript의 엄격한 문법규칙을 따르겠다.

const express = require("express")
const router = express.Router()
const ctrl = require("./home.crtl")

router.get("/", ctrl.output.home)
router.get("/login", ctrl.output.login)
router.get("/register", ctrl.output.register)

router.post("/login", ctrl.process.login)
router.post("/register", ctrl.output.register)

module.exports = router