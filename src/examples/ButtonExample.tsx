import * as React from 'react';
import Div from 'styled-kit/Div';

import Button from '../library/components/Button';
import { Paragraph } from '../library/components/Typography';

import ExampleWrapper from './ExampleWrapper';

const ButtonExample = (props: any) => (
  <ExampleWrapper label="Button" {...props}>
    <Div listRight={16} wraps>
      <Div column mBottom={16} listBottom={16}>
        <Paragraph center>Primary</Paragraph>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </Div>

      <Div column mBottom={16} listBottom={16}>
        <Paragraph center>Secondary</Paragraph>
        <Button buttonType="secondary">Default</Button>
        <Button buttonType="secondary" disabled>
          Disabled
        </Button>
        <Button buttonType="secondary" loading>
          Loading
        </Button>
      </Div>

      <Div column mBottom={16} listBottom={16}>
        <Paragraph center>Tertiary</Paragraph>
        <Button buttonType="tertiary">Default</Button>
        <Button buttonType="tertiary" disabled>
          Disabled
        </Button>
        <Button buttonType="tertiary" loading>
          Loading
        </Button>
      </Div>
    </Div>
  </ExampleWrapper>
);

export default ButtonExample;
