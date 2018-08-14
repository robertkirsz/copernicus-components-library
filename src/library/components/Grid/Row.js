import styled from 'styled-components';

import { screenSize } from '../../styles';

// prettier-ignore
const Row = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;

  padding: 0 8px;
  margin: 0 -4px;
  ${screenSize.mediumUp`margin: 0 -6px;`}
  ${screenSize.largeUp`margin: 0 -8px;`}
  ${screenSize.extraLargeUp`margin: 0 -12px;`}

  box-sizing: content-box;
`;

export default Row;
