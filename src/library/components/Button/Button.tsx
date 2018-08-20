import * as React from 'react';

import withRipple from '../../common/Ripple';
import DotsSpinner from '../../common/DotsSpinner';

import { Wrapper, Label } from './styles';

interface ButtonProps {
  buttonType?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const defaultProps: Partial<ButtonProps> = {
  buttonType: 'primary'
};

const Button: React.SFC<ButtonProps> = props => {
  const { children, loading, disabled, icon, buttonType, ...rest } = props;
  const isDisabled = disabled || loading;

  return (
    <Wrapper buttonType={buttonType} disabled={isDisabled} {...rest}>
      {loading && <DotsSpinner layer={true} />}

      <Label style={{ opacity: loading && 0 }}>
        {icon}
        {children}
      </Label>
    </Wrapper>
  );
};

Button.defaultProps = defaultProps;

export default withRipple(Button, { rippleBoundary: '-2px' });
