const getButtonStyles = (property: string, modifier?: string) => props => {
  const styles = props.theme.Button;

  if (props.disabled) {
    return styles[props.buttonType].disabled[property];
  }

  if (modifier) {
    return styles[props.buttonType][modifier][property];
  }

  return styles[props.buttonType][property];
};

export default getButtonStyles;
