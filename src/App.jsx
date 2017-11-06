import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = ({ dispatch }) => (
  <div>
    <h1>Hello from react!</h1>
    <button onClick={() => dispatch({ type: 'PING' })}>Dispatch Ping</button>
    <button onClick={() => dispatch({ type: 'LOAD_GITHUB_USER', payload: 'codingarchitect' })}>Dispatch Load Github User: codingarchitect</button>
    <button onClick={() => dispatch({ type: 'LOAD_GITHUB_USER', payload: 'codingarchitect2' })}>Dispatch Load Github User: codingarchitect2</button>
    <div>Check the console to see if ping was mapped to pong by cycle on Dispatch Ping</div>
  </div>
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
