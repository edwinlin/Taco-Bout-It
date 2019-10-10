import React from 'react'
import CheckboxContainer from './CheckboxContainer.jsx'
const Preferences = (props) => {
  return <div>
    <CheckboxContainer state={props.state}/>
  </div>
}
export default Preferences