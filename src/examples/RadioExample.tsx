import * as React from 'react';

import Radio, { RadioGroup } from '../library/components/Radio';
import { Paragraph } from '../library/components/Typography';

import ExampleWrapper from './ExampleWrapper';

// TODO: this shouldn't be needed, this component only passes the props further down. Need to see how to handle that.
interface Props {
  flex?: any;
}

const RadioExample: React.SFC<Props> = props => (
  <ExampleWrapper label="Radio" {...props}>
    <Paragraph>Generic radio group</Paragraph>

    <RadioGroup name="radio_group_1">
      <Radio value="radio_1">Default</Radio>

      <Radio value="radio_2">
        Radio with a long label so we can see how it looks like. Again, radio with a long label so we can see how it
        looks like.
      </Radio>

      <Radio value="radio_3" disabled>
        Disabled
      </Radio>
    </RadioGroup>

    <Paragraph>Radio group with validation</Paragraph>

    <RadioGroup name="radio_group_2" validationStatus="warning" validationMessage="Warning message">
      <Radio value="radio_4">Warning 1</Radio>

      <Radio value="radio_5">Warning 2</Radio>
    </RadioGroup>

    <Paragraph>Horizontal radio group</Paragraph>

    <RadioGroup name="radio_horizontal" isHorizontal>
      <Radio value="radio_6">Horizontal 1</Radio>

      <Radio value="radio_7">Horizontal 2</Radio>
    </RadioGroup>
  </ExampleWrapper>
);

export default RadioExample;
