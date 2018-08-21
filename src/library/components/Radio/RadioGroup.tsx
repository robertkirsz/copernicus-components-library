import * as React from "react";
import styled from "styled-components";

import ValidationMessage from "../../common/ValidationMessage";

interface Props {
  name?: string;
  label?: React.ReactNode;
  isHorizontal?: boolean;
  validationMessage?: React.ReactNode;
  validationStatus?: string;
}

const defaultProps: Partial<Props> = {
  name: "radiogroup"
};

const RadioGroup: React.SFC<Props> = props => {
  const {
    name,
    children,
    label,
    validationStatus,
    validationMessage,
    isHorizontal,
    ...rest
  } = props;

  return (
    <Wrapper {...rest}>
      <RadiosWrapper isHorizontal={isHorizontal}>
        {React.Children.toArray(children).map((child: any, index: number) =>
          React.cloneElement(child, {
            key: index,
            id: `${name}-${child.props.value}`,
            name
          })
        )}
      </RadiosWrapper>

      <ValidationMessage
        show={Boolean(validationMessage)}
        status={validationStatus}
        style={{ marginLeft: 44 }}
      >
        {validationMessage}
      </ValidationMessage>
    </Wrapper>
  );
};

RadioGroup.defaultProps = defaultProps;

export default RadioGroup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadiosWrapper = styled<{ isHorizontal?: boolean }, 'div'>('div')`
  display: flex;
  flex-direction: ${props => props.isHorizontal ? "row" : "column"};
`;
