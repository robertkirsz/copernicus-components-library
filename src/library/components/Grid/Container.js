import styled from 'styled-components';

import { screenSize } from '../../styles';

// prettier-ignore
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1332px;

  margin: 0 auto;
  padding: 0 4px;
  ${screenSize.mediumUp`padding: 0 6px;`}
  ${screenSize.largeUp`padding: 0 8px;`}
  ${screenSize.extraLargeUp`padding: 0 12px;`}

  box-sizing: content-box;
`;

export default Container;
