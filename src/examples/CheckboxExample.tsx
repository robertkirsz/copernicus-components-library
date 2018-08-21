import * as React from 'react';

import Div from '../demo-components/Div';

import Checkbox from '../library/components/Checkbox';

import ExampleWrapper from './ExampleWrapper';

// TODO: this shouldn't be needed, this component only passes the props further down. Need to see how to handle that.
interface Props {
  flex?: any;
}

const CheckboxExample: React.SFC<Props> = props => (
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
