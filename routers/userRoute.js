const express = require("express")
const { signup, login, getAllUser } = require("../controllers/userController")

const route = express()

// route.get('/users', )
route.post('/signup', signup)
route.post('/login', login)

module.exports = route