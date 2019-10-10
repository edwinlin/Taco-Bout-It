import React from 'react'
// const User = require('../models/UserModel.js')
// import User from '.../models/UserModel.js'
class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      pass: ""
    }
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this)
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handlePassInput = this.handlePassInput.bind(this)
  }
  handleSignUpSubmit(event){
    event.preventDefault()
    if(this.state.name !== ""){
      fetch('http://localhost:3000/add', {
        method: 'post',
        body: JSON.stringify({ name:this.state.name, password: this.state.pass}),
        headers: { 'Content-type': 'application/json' }
      })
      .then(res=>res.json())
      .then(data=>console.log("received back",data))
    }else{
      alert("No Tacos For You: Name Required")
    }
    this.setState({name:"", pass:""})
  }
  handleNameInput(event){
    this.setState({name:event.target.value})
  }
  handlePassInput(event){
    this.setState({pass:event.target.value})
  }
  render(){
    return <div>
      Sign Up
      <form onSubmit={this.handleSignUpSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameInput} />
          Password:
          <input type="text" name="name" value={this.state.pass} onChange={this.handlePassInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  }
}

export default SignUp