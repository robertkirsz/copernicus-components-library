import * as React from 'react';
import styled from 'styled-components';

import Div from '../demo-components/Div';

import { SmallHeader } from '../library/components/Typography';

interface ExampleWrapperProps {
  label?: string;
  style?: object;
};

const ExampleWrapper: React.SFC<ExampleWrapperProps> = ({ label, children, ...props }) => (
  <Div column {...props}>
    <SmallHeader style={{ marginBottom: 16 }}>{label}</SmallHeader>
    {children}
  </Div>
);

const StyledExampleWrapper = styled(ExampleWrapper)`
  position: relative;
  margin: 8px;
  padding: 8px;
  border: 1px solid #999;
  border-radius: 4px;
`;

export default StyledExampleWrapper;
