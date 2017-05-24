/* @flow */

import {curry, values} from 'ramda';

const mapValues = curry((fn: (value: mixed) => mixed, obj: Object) =>
  values(obj).map(fn),
);

export default mapValues;
