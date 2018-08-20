import React from 'react';
import Div from 'styled-kit/Div';

import Input from '../library/components/Input';
import ExampleWrapper from './ExampleWrapper';

const InputExample = props => (
  <ExampleWrapper label="Input" {...props}>
    <Div column listTop={16}>
      <Input label="Default" />
      <Input label="With hint visible on focus" hintMessage="This is a hint message!" />
      <Input label="Disabled" disabled />
      <Input label="With fixed label" fixedLabel />
      <Input label="With both label..." placeholder="...and placeholder" />
      <Input label="Number" type="number" />
      <Input label="Custom element (datepicker)" inputElement={<input type="date" />} fixedLabel />
      <Input label="Success" validationStatus="success" validationMessage="Success!" />
      <Input label="Warning" validationStatus="warning" validationMessage="Warning!" />
      <Input label="Error" validationStatus="error" validationMessage="Error!" />
      <Input label="Multiline" multiLine rows={3} />
    </Div>
  </ExampleWrapper>
);

export default InputExample;
