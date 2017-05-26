import {curry, values} from 'ramda';

const mapValues = curry((fn, obj) => values(obj).map(fn));

export default mapValues;
