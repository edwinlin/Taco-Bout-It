import React from 'react';
import PropTypes from 'prop-types';
import checkboxes from './checkboxes.js';
import Checkbox from './Checkbox.jsx';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    console.log(this.state)
    //   fetch('http://localhost:3000/checkLogin', {
    //     method: 'post',
    //     body: JSON.stringify({ name:this.state.logName, password: this.state.logPass}),
    //     headers: { 'Content-type': 'application/json' }
    //   })
    //   .then(res=>res.json())
    //   .then(data=> {
    //     this.setState(data)
    //     })

  }


  render() {
    return (
      <div id="checkboxes">
        {
          checkboxes.map(item => (
            <label key={item.key}>
              {item.name}
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
            </label>
          ))
        }
      </div>
    );
  }
}

export default CheckboxContainer;
