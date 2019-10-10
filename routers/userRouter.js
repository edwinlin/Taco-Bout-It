const express = require('express');
const userController = require('../controllers/UserController.js')
const userRouter = express.Router()

userRouter.post('/add', userController.getUser, userController.createUser, (req, res)=>{
  // console.log("REQ", req.body)
})

userRouter.post('/checkLogin', userController.loginUser, (req, res)=>{
  // console.log("REQ", req.body)
})



module.exports = userRouter