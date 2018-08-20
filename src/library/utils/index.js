import { statusColors } from '../palette';

// Returns validation styles if they're present in the props, or a default component's styles
export const withValidationStatus = (componentName, property) => props =>
  (props.validationStatus ? statusColors[props.validationStatus] : props.theme[componentName][property]);
