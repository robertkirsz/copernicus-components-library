import * as React from 'react';

import Div from '../demo-components/Div';

import Input from '../library/components/Input';

import ExampleWrapper from './ExampleWrapper';

const InputExample: React.SFC = props => (
  <ExampleWrapper label="Input" {...props}>
    <Div column listTop={16}>
      <Input label="Default" />
      
      <Input label="Disabled" disabled />
      
      <Input label="Success" validationStatus="success" validationMessage="Success!" />
      
      <Input label="Warning" validationStatus="warning" validationMessage="Warning!" />
      
      <Input label="Error" validationStatus="error" validationMessage="Error!" />
    </Div>
  </ExampleWrapper>
);

export default InputExample;
