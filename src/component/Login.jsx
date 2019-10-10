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

const Login = () => {
  return <div>
    <form>
      <label>
        Login:
        <input type="text" name="name" />
        Password:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
}
export default Login
export { ColoredLine }