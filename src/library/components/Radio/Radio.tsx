import * as React from "react";

import withRipple from "../../common/Ripple";
import StaticRipple from "../../common/StaticRipple";

import { Wrapper, InputWrapper, Input, Label, Icon } from "./styles";

const RippledInputWrapper = withRipple(InputWrapper, {
  duration: "0.5s",
  scale: 0.4
});

interface Props {
  id?: string;
  value?: string | number;
  disabled?: boolean;
  style?: object;
  wrapperProps?: object;
  validationStatus?: string;
  validationMessage?: React.ReactNode;
}

const Radio: React.SFC<Props> = props => {
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
        <Input type="radio" disabled={disabled} {...rest} />

        <Icon validationStatus={validationStatus} />

        <StaticRipple />
      </RippledInputWrapper>

      <Label htmlFor={props.id} disabled={disabled}>
        {children}
      </Label>
    </Wrapper>
  );
};

export default Radio;
