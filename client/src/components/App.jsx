import React from 'react';
import Box from './Box.jsx';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Tic Tac Toe</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col col-md-6 col-md-offset-3">
          <p className="text-center">Tic Tac Toe</p>
        </div>
      </div>
      <div className="row">
        <div className="top-grid board text-center">
          <div className="col col-md-4">
            <Box />
          </div>
          <div className="col col-md-4">
            <Box />
          </div>
          <div className="col col-md-4">
            <Box />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="middle-grid board text-center">
          <div className="col col-md-4">
            <Box />
          </div>
          <div className="col col-md-4">
            <Box />
          </div>
          <div className="col col-md-4">
            <Box />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="bottom-grid board text-center">
          <div className="col col-md-4">
            <Box />
          </div>
          <div className="col col-md-4">
            <Box />
          </div>
          <div className="col col-md-4">
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;