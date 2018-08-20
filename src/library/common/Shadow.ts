import styled from 'styled-components';
import { rgba } from 'polished';

const defaultProps = {
  color: 'black'
};

// prettier-ignore
const Shadow = styled<{ color?: string, hidden?: boolean }, 'div'>('div')`
  height: 26px;

  position: absolute;
  bottom: 0;
  right: 16px;
  left: 16px;

  border-radius: 0 0 100px 100px;
  box-shadow:
    0px 2px 30px 0px ${props => rgba(props.color, 0.5)},
    0px 2px 30px 0px ${props => rgba(props.color, 0.4)};
  
  z-index: -1;
  transition: 0.2s;

  ${props => props.hidden && 'opacity: 0;'}
`;

Shadow.defaultProps = defaultProps;

export default Shadow;
