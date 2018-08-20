import React from 'react';
import PropTypes from 'prop-types';

import { statusType } from '../../types';
import withRipple from '../../common/Ripple';
import StaticRipple from '../../common/StaticRipple';
import ValidationMessage from '../../common/ValidationMessage';
import CheckedIcon from './CheckedIcon';

import { Wrapper, InputWrapper, Input, Box, Label } from './styles';

const RippledInputWrapper = withRipple(InputWrapper, { duration: '0.5s', scale: 0.4 });

const propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.shape({}),
  wrapperProps: PropTypes.shape({}),
  validationStatus: statusType,
  validationMessage: PropTypes.node,
  children: PropTypes.node
};

const Checkbox = ({ disabled, style, wrapperProps, validationMessage, validationStatus, children, ...props }) => (
  <Wrapper style={style} {...wrapperProps}>
    <RippledInputWrapper validationStatus={validationStatus}>
      <Input type="checkbox" disabled={disabled} {...props} />

      <Box validationStatus={validationStatus}>
        <CheckedIcon />
      </Box>

      <StaticRipple />
    </RippledInputWrapper>

    <Label htmlFor={props.id} disabled={disabled}>
      {children}

      <ValidationMessage show={Boolean(validationMessage)} status={validationStatus}>
        {validationMessage}
      </ValidationMessage>
    </Label>
  </Wrapper>
);

Checkbox.propTypes = propTypes;

export default Checkbox;
