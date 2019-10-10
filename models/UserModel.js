let mongoose = require('mongoose')
let Schema = mongoose.Schema
let userSchema = new Schema({
  name: {type: String, required: true},
  password: String
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;