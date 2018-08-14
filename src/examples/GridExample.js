import React from 'react';
import styled from 'styled-components';

import Container from 'library/components/Grid/Container';
import Row from 'library/components/Grid/Row';
import Col from 'library/components/Grid/Col';

const GridExample = props => (
  <Container style={{ background: 'rgba(200, 0, 0, 0.2)' }}{...props}>
    <Row>
      <Col small={12} medium={4} large={3} extraLarge={3}>
        <Item>Small 12 Medium 4 Large 3</Item>
      </Col>

      <Col small={12} medium={4} large={3} extraLarge={3}>
        <Item>Small 12 Medium 4 Large 3</Item>
      </Col>

      <Col small={12} medium={4} large={3} extraLarge={3}>
        <Item>Small 12 Medium 4 Large 3</Item>
      </Col>

      <Col small={12} medium={12} large={3} extraLarge={3}>
        <Item>Small 12 Medium 12 Large 3</Item>
      </Col>
    </Row>
  </Container>
);

export default GridExample;

// prettier-ignore
const Item = styled.div`
  padding: 8px 8px 16px;
  background: rgba(255, 99, 71, 0.7);
  border: 2px solid tomato;
  width: 100%;
  color: white;
  box-sizing: border-box;
`
