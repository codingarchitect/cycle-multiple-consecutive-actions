/* eslint fp/no-unused-expression: 1 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createCycleMiddleware, combineCycles } from 'redux-cycles';
import { run } from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import { timeDriver } from '@cycle/time';

import cycle1 from './cycle1';
import cycle2 from './cycle2';

const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver, makeStateDriver } = cycleMiddleware;

const store = createStore(combineReducers(
  { dummy: state => state || {} }),
  {},
  applyMiddleware(cycleMiddleware));

function attachCycle(cycle) {
  return run(combineCycles(cycle, cycle1, cycle2), {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver(),
    Time: timeDriver,
    HTTP: makeHTTPDriver(),
  });
}

function main(sources) {
  const pong$ = sources.ACTION
    .filter(action => action.type === 'PING')
    .mapTo({ type: 'PONG' })
    .debug();

  return {
    ACTION: pong$,
  };
}

attachCycle(main);

export default store;
