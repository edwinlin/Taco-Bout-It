import React, { Component } from "react";
import s from "./app.component.css";
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
      isLoggedIn: false,
      signUp: false,
    }
  }
  

  render() {
    if(this.state.signUp){
      return <div>
      <LoginComponent />
      <ColoredLine color="blue"/>
      <SignUpComponent/>
    </div> 
    }
    if(this.state.isLoggedIn){
      return <div>
      <WelcomeComponent />
      <PreferencesComponent />
      <ChartsComponent />
      </div>;  
    } else {
      return <div>
        <LoginComponent />
        <button onClick={()=>this.setState({signUp:true})}>Sign Up</button>
      </div>
    }
  }
}
export default App;
