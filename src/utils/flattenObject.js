/* @flow */

import {chain, map, toPairs, fromPairs} from 'ramda';

const flattenObj = (obj: Object) => {
  const flatten = (object: Object) =>
    chain(
      ([k, v]: [any, any]) => {
        if (typeof v === 'object') {
          return map(([k_, v_]) => [`${k}.${k_}`, v_], flatten(v));
        }
        return [[k, v]];
      },
      toPairs(object),
    );

  return fromPairs(flatten(obj));
};

export default flattenObj;
