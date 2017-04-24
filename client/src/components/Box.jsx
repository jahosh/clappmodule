import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.toggleCheck = this.toggleCheck.bind(this);
  }
  toggleCheck() {
    this.setState({
      checked: true
    });
  }
  render() {
    return (
      <div className="box" onClick={this.toggleCheck}>
      <span className="playerMark">
        { this.state.checked ? 'X' : '' }
      </span>
      </div>
    );
  }
}

export default Box;