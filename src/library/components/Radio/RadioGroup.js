import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { statusType } from '../../types';
import ValidationMessage from '../../common/ValidationMessage';

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  isHorizontal: PropTypes.bool,
  children: PropTypes.node,
  validationMessage: PropTypes.node,
  validationStatus: statusType
};

const defaultProps = {
  name: 'radiogroup',
  isHorizontal: false
};

const RadioGroup = ({ name, children, label, validationStatus, validationMessage, isHorizontal, ...props }) => (
  <Wrapper {...props}>
    <RadiosWrapper isHorizontal={isHorizontal}>
      {Children.toArray(children).map((child, index) =>
        cloneElement(child, { key: index, id: `${name}-${child.props.value}`, name })
      )}
    </RadiosWrapper>

    <ValidationMessage show={Boolean(validationMessage)} status={validationStatus} style={{ marginLeft: 44 }}>
      {validationMessage}
    </ValidationMessage>
  </Wrapper>
);

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;

export default RadioGroup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// prettier-ignore
const RadiosWrapper = styled.div`
  display: flex;
  ${({ isHorizontal }) => `flex-direction: ${isHorizontal ? 'row' : 'column'};`}
`;
