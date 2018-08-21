import * as React from "react";

import withRipple from "../../common/Ripple";
import StaticRipple from "../../common/StaticRipple";
import ValidationMessage from "../../common/ValidationMessage";

import { ShortLine, LongLine } from "./CheckedIcon";

import { Wrapper, InputWrapper, Input, Box, Label } from "./styles";

const RippledInputWrapper = withRipple(InputWrapper, {
  duration: "0.5s",
  scale: 0.4
});

interface CheckboxProps {
  id: string;
  disabled?: boolean;
  style?: object;
  wrapperProps?: object;
  validationStatus?: string;
  validationMessage?: React.ReactNode;
}

const Checkbox: React.SFC<CheckboxProps> = props => {
  const {
    disabled,
    style,
    wrapperProps,
    validationMessage,
    validationStatus,
    children,
    ...rest
  } = props;

  return (
    <Wrapper style={style} {...wrapperProps}>
      <RippledInputWrapper validationStatus={validationStatus}>
        <Input type="checkbox" disabled={disabled} {...rest} />

        <Box validationStatus={validationStatus}>
          <ShortLine />
          <LongLine />
        </Box>

        <StaticRipple />
      </RippledInputWrapper>

      <Label htmlFor={props.id} disabled={disabled}>
        {children}

        <ValidationMessage
          show={Boolean(validationMessage)}
          status={validationStatus}
        >
          {validationMessage}
        </ValidationMessage>
      </Label>
    </Wrapper>
  );
};

export default Checkbox;
