import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
    this.toggleCheck = this.toggleCheck.bind(this);
  }
  toggleCheck() {
    const { player } = this.props;
    console.log(player);
    this.setState({
      checked: true,
      player
    });
  }
  render() {
    return (
      <div className="box" onClick={this.toggleCheck}>
      <span className="playerMark">
        { this.state.checked ? this.state.player : '' }
      </span>
      </div>
    );
  }
}

export default Box;