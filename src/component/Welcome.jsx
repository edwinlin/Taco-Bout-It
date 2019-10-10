import React from 'react'

// const divStyle = {
//   color: 'blue',
//   backgroundImage: 'url(' + imgUrl + ')',
// };

const Welcome = (props) => {
  return <div>
  <div id="welcome">Welcome {props.state.user}</div>
  <div id="question">What do you love about tacos?</div>
  </div>
}
export default Welcome