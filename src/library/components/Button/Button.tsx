import * as React from 'react';

import { blueEndeavour } from '../../palette';

import withRipple from '../../common/Ripple';
import Shadow from '../../common/Shadow';
import DotsSpinner from '../../common/DotsSpinner';

import { Button as NormalButton, LinkButton, Content, Label } from './styles';

const RippledContent = withRipple(Content, { rippleBoundary: '-2px' });

interface ButtonProps {
  buttonType?: string,
  disabled?: boolean,
  loading?: boolean,
  icon?: React.ReactNode,
  href?: string
};

const defaultProps = {
  buttonType: 'primary'
};

const Button: React.SFC<ButtonProps> = ({ children, loading, disabled, icon, buttonType, ...props }) => {
  const isDisabled = disabled || loading;
  const Component = props.href ? LinkButton : NormalButton;
  const showShadow = buttonType === 'primary' && !disabled && !loading;

  return (
    <Component buttonType={buttonType} disabled={isDisabled} {...props}>
      <RippledContent buttonType={buttonType} disabled={isDisabled}>
        {loading && <DotsSpinner layer={true} />}

        <Label style={{ opacity: loading && 0 }}>
          {icon}
          {children}
        </Label>
      </RippledContent>

      <Shadow color={blueEndeavour} hidden={!showShadow} />
    </Component>
  );
};

Button.defaultProps = defaultProps;

export default Button;
