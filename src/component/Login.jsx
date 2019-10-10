import React from 'react'

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);

const Login = (props) => {
  return <div>
    <form onSubmit={props.handleLoginSubmit}>
      <label>
        Login:
        <input type="text" name="name" value={props.state.logName} onChange={props.handleNameInput} />
        Password:
        <input type="text" name="password" value={props.state.logPass} onChange={props.handlePassInput} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
}
export default Login
export { ColoredLine }