/* @flow */

import * as phenomicReducers from 'phenomic/lib/redux/modules';
import {combineReducers} from 'redux';
import createStore from 'phenomic/lib/redux/createStore';

const store = createStore(
  combineReducers(phenomicReducers),
  typeof window !== 'undefined' ? window.__INITIAL_STATE__ : {}, // eslint-disable-line no-underscore-dangle
);

export default store;
