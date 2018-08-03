/* eslint better/no-ifs: 1 */
/* eslint better/explicit-return: 1 */
/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function dispatchGitHubActions(dispatch) {
  window.setTimeout(() => {
    dispatch({
      type: 'LOAD_GITHUB_USER',
      payload: 'codingarchitect',
    });
  }, 0);
  window.setTimeout(() => {
    dispatch({
      type: 'LOAD_GITHUB_USER',
      payload: 'sonyarouje',
    });
  }, 500);
  window.setTimeout(() => {
    dispatch({
      type: 'LOAD_GITHUB_USER',
      payload: 'staltz',
    });
  }, 1000);
}

const App = ({ dispatch }) => (
  <div>
    <h1>Hello from react!</h1>
    <button onClick={() => dispatch({ type: 'PING' })}>Dispatch Ping</button>
    <button onClick={() => dispatchGitHubActions(dispatch)}>
      Dispatch Load Github User: codingarchitect
    </button>
    <div>Check the console to see if ping was mapped to pong by cycle on Dispatch Ping</div>
  </div>
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
