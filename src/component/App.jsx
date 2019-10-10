import React, { Component } from "react";
import WelcomeComponent from './Welcome.jsx'
import PreferencesComponent from './Preferences.jsx'
import ChartsComponent from './Charts.jsx'
import LoginComponent from './Login.jsx'
import { ColoredLine } from './Login.jsx'
import SignUpComponent from './SignUp.jsx'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: "",
      isLoggedIn: false,
      signUp: false,
      logName: "",
      logPass: "",
      signName: "",
      signPass: ""
    }
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handlePassInput = this.handlePassInput.bind(this)
    this.handleSignNameInput = this.handleSignNameInput.bind(this)
    this.handleSignPassInput = this.handleSignPassInput.bind(this)
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }
  handleNameInput(event){
    this.setState({logName:event.target.value})
  }
  handlePassInput(event){
    this.setState({logPass:event.target.value})
  }
  handleSignNameInput(event){
    this.setState({signName:event.target.value})
  }
  handleSignPassInput(event){
    this.setState({signPass:event.target.value})
  }
  handleFormSubmit(event){
    event.preventDefault()
    // this.setState()
  }
  handleLoginSubmit(event){
    event.preventDefault()
    if(this.state.logName !== ""){
      fetch('http://localhost:3000/checkLogin', {
        method: 'post',
        body: JSON.stringify({ name:this.state.logName, password: this.state.logPass}),
        headers: { 'Content-type': 'application/json' }
      })
      .then(res=>res.json())
      .then(data=> {
        this.setState(data)
        })
      .catch(err=>alert("Wrong Credentials, Sucka"))
    }else{
      alert("No Tacos For You: Name Required")
    }
    this.setState({logName:"", logPass:""})
  }
  handleSignUpSubmit(event){
    event.preventDefault()
    if(this.state.signName !== ""){
      fetch('http://localhost:3000/add', {
        method: 'post',
        body: JSON.stringify({ name:this.state.signName, password: this.state.signPass}),
        headers: { 'Content-type': 'application/json' }
      })
      .then(res=>res.json())
      .then(data=> {
        this.setState(data)
        })
      // .catch(err=>alert("Username taken, probz"))
    }else{
      alert("No Tacos For You: Name Required")
    }
    this.setState({signName:"", signPass:""})
  }

  render() {
    if(this.state.isLoggedIn){
      return <div>
      <WelcomeComponent state={this.state}/>
        <div id="second_row">
          <PreferencesComponent state={this.state}/>
          <ChartsComponent />
        </div>
      </div>;  
    } else if(this.state.signUp){
      return <div>
      <LoginComponent state={this.state} handleNameInput={this.handleNameInput} handlePassInput={this.handlePassInput} handleLoginSubmit={this.handleLoginSubmit} />
      <ColoredLine color="blue"/>
      <SignUpComponent state={this.state} handleNameInput={this.handleSignNameInput} handlePassInput={this.handleSignPassInput} handleSignUpSubmit={this.handleSignUpSubmit}/>
    </div> 
    } else {
      return <div>
        <LoginComponent state={this.state} handleNameInput={this.handleNameInput} handlePassInput={this.handlePassInput} handleLoginSubmit={this.handleLoginSubmit}/>
        <button onClick={()=>this.setState({signUp:true})}>Sign Up</button>
      </div>
    }
  }
}
export default App;
