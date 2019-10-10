const User = require('../models/UserModel.js')

const UserController = {

  getUser(req, res, next){
    User.findOne({name: req.body.name}, (err, name)=>{
      if (err) console.log(err)
      if (name) console.log('Name has been taken')
      else next()
    })
  },
  
  createUser(req, res, next){
    // console.log("BODY", JSON.stringify(req.body), "QUERY", req.query)
    if(req.body.name){
      const newUser = new User(req.body)
      newUser.save( (err, user) => {
        if(err) return res.status(418).send(err)
      })
      res.end(JSON.stringify(newUser))
      next()
    } else {
      res.end("FILL IN NAME")
      next()
    }
  },

}

module.exports = UserController;