/* eslint better/no-ifs: 1 */
/* eslint better/explicit-return: 1 */
/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = ({ dispatch }) => (
  <div>
    <h1>Hello from react!</h1>
    <button onClick={() => dispatch({ type: 'PING' })}>Dispatch Ping</button>
    <button onClick={() => {
      dispatch({ type: 'LOAD_GITHUB_USER', payload: 'codingarchitect' });
      dispatch({ type: 'LOAD_GITHUB_USER', payload: 'sonyarouje' });
      dispatch({ type: 'LOAD_GITHUB_USER', payload: 'staltz' });
    }}
    >Dispatch Load Github User: codingarchitect</button>
    <div>Check the console to see if ping was mapped to pong by cycle on Dispatch Ping</div>
  </div>
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
