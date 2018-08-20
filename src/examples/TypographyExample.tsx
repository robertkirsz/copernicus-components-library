import * as React from 'react';
import Div from 'styled-kit/Div';

import { ExtraLargeHeader, LargeHeader, SmallHeader, ExtraSmallHeader, Subtitle, Paragraph, Hyperlink, Small } from '../library/components/Typography';

import ExampleWrapper from './ExampleWrapper';

const TypographyExample: React.SFC = (props: any) => (
  <ExampleWrapper label="Typography" {...props}>
    <Div column listTop={16}>
      <ExtraLargeHeader>Header XL</ExtraLargeHeader>
      <LargeHeader>Header Large</LargeHeader>
      <SmallHeader>Header Small</SmallHeader>
      <ExtraSmallHeader>Header Extra Small</ExtraSmallHeader>
      <Subtitle>Subtitle</Subtitle>
      <Paragraph>Body text</Paragraph>
      <Hyperlink>Hyperlink</Hyperlink>
      <Small>Small text</Small>
    </Div>
  </ExampleWrapper>
);

export default TypographyExample;
