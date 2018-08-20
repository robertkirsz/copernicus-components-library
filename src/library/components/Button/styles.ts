import styled, { css } from 'styled-components';

import getButtonStyles from '../../utils/getButtonStyles';

// prettier-ignore
export const Wrapper = styled.button`
  flex: none;
  display: inline-block;

  min-width: 216px;
  height: 48px;
  padding: 0;
  
  position: relative;

  background-color: ${getButtonStyles('backgroundColor')};
  border: 2px solid ${getButtonStyles('borderColor')};
  border-radius: 100px;
  outline: none;

  box-shadow: ${getButtonStyles('boxShadow')};

  color: ${getButtonStyles('color')};
  font-family: Nunito, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  -webkit-tap-highlight-color: transparent;

  transition:
    background-color 0.3s,
    border-color 0.3s,
    box-shadow 0.3s,
    color 0.3s;

  /* Focus state */
  ${props => !props.disabled && css`
    &:hover {
      background-color: ${getButtonStyles('backgroundColor', 'hover')};
      border-color: ${getButtonStyles('borderColor', 'hover')};
      color: ${getButtonStyles('color', 'hover')};
      box-shadow: none;
    }
    
    &:focus {
      background-color: ${getButtonStyles('backgroundColor', 'focus')};
      border-color: ${getButtonStyles('borderColor', 'focus')};
      color: ${getButtonStyles('color', 'focus')};
      box-shadow: none;
    }
  `}
`;

// prettier-ignore
export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 12px 16px;

  user-select: none;

  transition: opacity 0.3s;
`;
