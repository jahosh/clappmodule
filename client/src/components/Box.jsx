import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }
  render() {
    return (
      <div className="box">
      box here
      </div>
    );
  }
}

export default Box;