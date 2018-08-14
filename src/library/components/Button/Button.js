import React from 'react';
import PropTypes from 'prop-types';

import { blueEndeavour } from 'library/palette';

import withRipple from 'library/common/Ripple';
import Shadow from 'library/common/Shadow';
import DotsSpinner from 'library/common/DotsSpinner';

import { Button as NormalButton, LinkButton, Content, Label } from './styles';

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
      <Content buttonType={buttonType} disabled={isDisabled}>
        <Label>
          {loading && <DotsSpinner />}
          {!loading && icon}
          {!loading && children}
        </Label>
      </Content>

      {showShadow && <Shadow color={blueEndeavour} />}
    </Component>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withRipple(Button, { rippleBoundary: '-2px' });
