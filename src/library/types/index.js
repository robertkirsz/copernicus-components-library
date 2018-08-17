import { string, shape, oneOf } from 'prop-types';

import { statusColors } from '../palette';

export const statusType = oneOf(Object.keys(statusColors));

export const countryType = shape({
  name: string,
  code: string,
  prefix: string,
  flag: string,
  mask: string
});

export const refType = shape({
  current: shape({})
});
