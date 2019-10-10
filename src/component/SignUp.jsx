import React from 'react'
class SignUp extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   name: "",
    //   pass: ""
    // }
  }
  render(){
    return <div>
      Sign Up
      <form onSubmit={this.props.handleSignUpSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.props.state.signName} onChange={this.props.handleNameInput} />
          Password:
          <input type="text" name="password" value={this.props.state.signPass} onChange={this.props.handlePassInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  }
}

export default SignUp