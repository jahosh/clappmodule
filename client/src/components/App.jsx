import React, { Component } from 'react';
import Box from './Box.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: 0,
      gameActive: false,
      player: null,
      grid: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    };
    this.handlePlayerMove = this.handlePlayerMove.bind(this);
    this.startGame = this.startGame.bind(this);
  }
  handlePlayerMove() {
    if (playerTurn % 2 !== 0 ) {
      this.setState({
        player: 'X'
      });
    } else {
      this.setState({
        player: 'O'
      });
    }
  }
  startGame() {
    if (this.state.gameActive) {
      alert('game already going!');
    }
    this.setState({
      gameActive: true,
      player: 'X'
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center">Tic Tac Toe</h1>
          <div className="text-center">
            <button className="btn btn-primary" onClick={this.startGame}>Start Game!</button>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col col-md-6 col-md-offset-3">
            <p className="text-center">Tic Tac Toe</p>
            { this.state.gameActive ? 
              (<div className="text-center">{`Player ${this.state.player}'s turn`}</div>) : '' }
          </div>
        </div>
        <div className="row">
            <div className="top-grid board text-center">
              <div className="col col-md-4">
                <Box
                  player={this.state.player} 
                  />
              </div>
              <div className="col col-md-4">
                <Box
                  player={this.state.player}
                />
              </div>
              <div className="col col-md-4">
                <Box
                  player={this.state.player}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="middle-grid board text-center">
              <div className="col col-md-4">
                <Box
                  player={this.state.player}
                />
              </div>
              <div className="col col-md-4">
                <Box
                  player={this.state.player}
                />
              </div>
              <div className="col col-md-4">
                <Box
                  player={this.state.player}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="bottom-grid board text-center">
              <div className="col col-md-4">
                <Box
                  player={this.state.player}
                />
              </div>
              <div className="col col-md-4">
                <Box
                  player={this.state.player}
                />
              </div>
              <div className="col col-md-4">
                <Box
                  player={this.state.player}
                />
              </div>
            </div>
          </div>
        </div>
    );
  };
}

export default App;