const User = require('../models/UserModel.js')

const UserController = {

  getUser(req, res, next){
    User.findOne({name: req.body.name}, (err, name)=>{
      if (err) console.log(err)
      if (name) console.log('Name has been taken', name)
      else next()
    })
  },
  
  loginUser(req, res, next){
    User.findOne({name: req.body.name}, (err, foundUser)=>{
      if (err) console.log(err)
      if ( foundUser && foundUser.password === req.body.password ) {
        console.log('foundUser Found', foundUser, req.body.name ,req.body.password)
        res.end(JSON.stringify({isLoggedIn:true, signUp: false, user: foundUser.name}))
        next()
      // } else if (foundUser && foundUser.password !== req.){
      } else {
        res.status(400).send("Incorrect Login Credentials")
        res.end()
      }
    })

  },

  createUser(req, res, next){
    // console.log("BODY", JSON.stringify(req.body), "QUERY", req.query)
    if(req.body.name && req.body.password){
      const newUser = new User(req.body)
      newUser.save( (err, user) => {
        if(err) return res.status(418).send(err)
      })
      res.end(JSON.stringify({isLoggedIn:true, signUp: false, user: newUser.name}))
      next()
    } else {
      res.status(400).end("FILL IN NAME")
      next()
    }
  },

}

module.exports = UserController;