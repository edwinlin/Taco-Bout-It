const express = require('express');
const app = express();
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res)=>{
//   res.sendFile(__dirname + '/build/index.html')
// })

// app.use('/anything', express.static(path.resolve(__dirname, './build/main.js')));
// technical challenge. Placing my index.html in the same folder as my bundle when my index.html is calling my bundle. 
// An error occurred asking for a route to the bundle, and it sort of worked by serving the bundle through the route, but not all the times.

if(process.env.NODE_ENV !== 'development'){
  app.use('/', express.static(path.resolve(__dirname)));
} 


app.listen(3000, function() {
  console.log('listening on 3000')
})