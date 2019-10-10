const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const userController = require('./controllers/UserController.js')
const db = require("./database/MongoDB");
var cors = require('cors')
const userRouter = require('./routers/userRouter.js')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)


// technical challenge. Placing my index.html in the same folder as my bundle when my index.html is calling my bundle. 
// An error occurred asking for a route to the bundle, and it sort of worked by serving the bundle through the route, but not all the times.

// serve bundle.js along with index.html
if(process.env.NODE_ENV !== 'development'){
  app.use('/', express.static(path.resolve(__dirname)));
} 




app.listen(3000, function() {
  console.log('listening on 3000')
})