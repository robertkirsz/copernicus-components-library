import _get from 'lodash.get';

import { statusColors } from 'library/palette';

// Returns validation styles if they're present in the props, or a default component's styles
export const withValidationStatus = path => props =>
  props.validationStatus ? statusColors[props.validationStatus] : _get(props.theme, path, '');

// Helper function for getting Button props based on its type
export const getButtonStyles = (path, rootStyles) => props =>
  _get(rootStyles ? props.theme.Button : props.theme.Button[props.buttonType], path, '');
