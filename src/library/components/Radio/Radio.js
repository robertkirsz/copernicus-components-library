import React from 'react';
import PropTypes from 'prop-types';

import { statusType } from '../../types';
import withRipple from '../..//common/Ripple';
import StaticRipple from '../..//common/StaticRipple';

import { Wrapper, InputWrapper, Input, Label, Icon } from './styles';

const RippledInputWrapper = withRipple(InputWrapper, { duration: '0.5s', scale: 0.4 });

const propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.shape({}),
  wrapperProps: PropTypes.shape({}),
  validationStatus: statusType,
  validationMessage: PropTypes.node,
  children: PropTypes.node
};

const Radio = ({ disabled, style, wrapperProps, validationMessage, validationStatus, children, ...props }) => (
  <Wrapper style={style} {...wrapperProps}>
    <RippledInputWrapper validationStatus={validationStatus}>
      <Input type="radio" disabled={disabled} {...props} />

      <Icon validationStatus={validationStatus} />

      <StaticRipple />
    </RippledInputWrapper>

    <Label htmlFor={props.id} disabled={disabled}>
      {children}
    </Label>
  </Wrapper>
);

Radio.propTypes = propTypes;

export default Radio;
