import styled, { css } from 'styled-components';

import Shadow from 'library/common/Shadow';
import { getButtonStyles } from 'library/utils';

// prettier-ignore
export const Content = styled.span`
  display: block;
  min-width: ${getButtonStyles('minWidth', true)}px;
  height: ${getButtonStyles('height', true)}px;

  position: relative;

  background-color: ${getButtonStyles('backgroundColor')};
  border: 2px solid ${getButtonStyles('borderColor')};
  border-radius: inherit;

  color: ${getButtonStyles('color')};
  font-family: ${getButtonStyles('fontFamily', true)};
  font-size: ${getButtonStyles('fontSize', true)}px;
  font-weight: ${getButtonStyles('fontWeight', true)};

  transition: background-color 0.3s;

  ${props => props.disabled && css`
    background: ${getButtonStyles('disabled.background')};
    border-color: transparent;
    color: ${getButtonStyles('disabled.color')};
  `}
`;

// prettier-ignore
export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: ${getButtonStyles('padding', true)};

  position: relative;
  user-select: none;
  z-index: 1;

  /* Icon */
  > svg {
    display: inline-block;
    margin-right: 8px;

    width: 1.3em;
    height: 1.3em;
  }
`;

// prettier-ignore
export const Button = styled.button`
  flex: none;
  display: inline-block;

  padding: 0;

  background: none;
  border: none;
  outline: none;
  border-radius: ${getButtonStyles('borderRadius', true)}px;

  position: relative;

  font-family: inherit;
  font-size: inherit;
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  transition: 0.2s;

  ${props => props.disabled && 'cursor: not-allowed;'}

  /* Focus state */
  ${props => !props.disabled && css`
    &:focus {
      ${Content} {
        background-color: ${getButtonStyles('focus.backgroundColor')};
      }
    }
  `}

  /* Active state */
  ${props => !props.disabled && props.buttonType === 'primary' && css`
    &:active {
      transform: translateY(2px);

      ${Shadow} {
        transform: scale(0.9);
      }
    }
  `}
`;

// prettier-ignore
export const LinkButton = Button.withComponent('a').extend`
  text-decoration: none;
`;
