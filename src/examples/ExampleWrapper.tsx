import * as React from 'react';
import Div from 'styled-kit/Div';

import { SmallHeader } from '../library/components/Typography';

interface ExampleWrapperProps {
  label?: string;
};

const ExampleWrapper: React.SFC<ExampleWrapperProps> = ({ label, children, ...props }) => (
  <Wrapper column {...props}>
    <SmallHeader style={{ marginBottom: 16 }}>{label}</SmallHeader>
    {children}
  </Wrapper>
);

export default ExampleWrapper;

const Wrapper = Div.extend`
  margin: 8px;
  padding: 8px;
  border: 1px solid #999;
  border-radius: 4px;
`;
