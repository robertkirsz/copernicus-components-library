import * as React from 'react';

import Div from '../demo-components/Div';

import Button from '../library/components/Button';
import { Paragraph } from '../library/components/Typography';
import Plus from '../library/icons/Plus';

import ExampleWrapper from './ExampleWrapper';

const ButtonExample: React.SFC = props => (
  <ExampleWrapper label="Button" {...props}>
    <Div listRight={16} wraps={true}>
      <Div column={true} mBottom={16} listBottom={16}>
        <Paragraph center={true}>Primary</Paragraph>
        
        <Button>Default</Button>
        
        <Button disabled={true}>Disabled</Button>
        
        <Button loading={true}>Loading</Button>
      </Div>

      <Div column={true} mBottom={16} listBottom={16}>
        <Paragraph center={true}>Secondary</Paragraph>
        
        <Button buttonType="secondary">Default</Button>
        
        <Button buttonType="secondary" disabled={true}>
          Disabled
        </Button>
        
        <Button buttonType="secondary" loading={true}>
          Loading
        </Button>
      </Div>

      <Div column={true} mBottom={16} listBottom={16}>
        <Paragraph center={true}>Tertiary</Paragraph>
        
        <Button buttonType="tertiary">Default</Button>
        
        <Button buttonType="tertiary" disabled={true}>
          Disabled
        </Button>
        
        <Button buttonType="tertiary" loading={true}>
          Loading
        </Button>
      </Div>

      <Div column={true} itemsCenter={true} mBottom={16} listBottom={16}>
        <Paragraph center={true}>Circle primary</Paragraph>
        
        <Button circular={true}>
          <Plus />
        </Button>
        
        <Button circular={true} disabled={true}>
          <Plus />
        </Button>
        
        <Button circular={true} loading={true}>
          <Plus />
        </Button>
      </Div>

      <Div column={true} itemsCenter={true} mBottom={16} listBottom={16}>
        <Paragraph center={true}>Circle tertiary</Paragraph>
        
        <Button circular={true} buttonType="tertiary">
          <Plus />
        </Button>
        
        <Button circular={true} buttonType="tertiary" disabled={true}>
          <Plus />
        </Button>
        
        <Button circular={true} buttonType="tertiary" loading={true}>
          <Plus />
        </Button>
      </Div>
    </Div>
  </ExampleWrapper>
);

export default ButtonExample;
