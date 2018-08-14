import React from 'react';
import PropTypes from 'prop-types';
import Div from 'styled-kit/Div';

import { SmallHeader } from 'library/components/Typography';

const propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
};

const ExampleWrapper = ({ label, children, ...props }) => (
  <Wrapper column {...props}>
    <SmallHeader style={{ marginBottom: 16 }}>{label}</SmallHeader>
    {children}
  </Wrapper>
);

ExampleWrapper.propTypes = propTypes;

export default ExampleWrapper;

const Wrapper = Div.extend`
  margin: 8px;
  padding: 8px;
  border: 1px solid #999;
  border-radius: 4px;
`;
