import _get from 'lodash.get';

import { statusColors } from '../palette';

// Returns validation styles if they're present in the props, or a default component's styles
export const withValidationStatus = path => props =>
  (props.validationStatus ? statusColors[props.validationStatus] : _get(props.theme, path, ''));
