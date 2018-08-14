import React from 'react';
import Div from 'styled-kit/Div';

import Checkbox from 'library/components/Checkbox';

import ExampleWrapper from './ExampleWrapper';

const CheckboxExample = props => (
  <ExampleWrapper label="Checkbox" {...props}>
    <Div column itemsStart listBottom>
      <Checkbox id="checkbox_default">Default</Checkbox>

      <Checkbox id="checkbox_disabled" disabled>
        Disabled
      </Checkbox>

      <Checkbox id="checkbox_warning" validationStatus="warning" validationMessage="Warning message">
        Warning state with a long label so we can see how it looks like. Again, a long text so we can see how it looks
        like.
      </Checkbox>

      <Checkbox id="checkbox_error" validationStatus="error" validationMessage="Error message">
        Error state
      </Checkbox>
    </Div>
  </ExampleWrapper>
);

export default CheckboxExample;
