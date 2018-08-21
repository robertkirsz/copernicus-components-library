import { statusColors } from '../palette';

// Returns validation styles if they're present in the props, or a default component's styles
const getValidationStatus = (componentName: string, property: string) => props =>
  (props.validationStatus ? statusColors[props.validationStatus] : props.theme[componentName][property]);

export default getValidationStatus;
