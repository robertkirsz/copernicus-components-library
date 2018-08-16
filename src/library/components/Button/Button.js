import React from 'react';
import PropTypes from 'prop-types';

import { blueEndeavour } from 'library/palette';

import withRipple from 'library/common/Ripple';
import Shadow from 'library/common/Shadow';
import DotsSpinner from 'library/common/DotsSpinner';

import { Button as NormalButton, LinkButton, Content, Label } from './styles';

const RippledContent = withRipple(Content, { rippleBoundary: '-2px' });

const propTypes = {
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.node,
  children: PropTypes.node,
  href: PropTypes.string
};

const defaultProps = {
  buttonType: 'primary'
};

const Button = ({ children, loading, disabled, icon, buttonType, ...props }) => {
  const isDisabled = disabled || loading;
  const Component = props.href ? LinkButton : NormalButton;
  const showShadow = buttonType === 'primary' && !disabled && !loading;

  return (
    <Component buttonType={buttonType} disabled={isDisabled} {...props}>
      <RippledContent buttonType={buttonType} disabled={isDisabled}>
        {loading && <DotsSpinner layer />}

        <Label style={{ opacity: loading && 0 }}>
          {icon}
          {children}
        </Label>
      </RippledContent>

      <Shadow color={blueEndeavour} hidden={!showShadow} />
    </Component>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
