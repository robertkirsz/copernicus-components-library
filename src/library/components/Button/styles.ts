import styled, { css } from 'styled-components';
import { get } from 'lodash';

import Shadow from '../../common/Shadow';

// Helper function for getting Button props based on its type
export const getButtonStyles = (path: string, rootStyles?: boolean) => props =>
  get(rootStyles ? props.theme.Button : props.theme.Button[props.buttonType], path, '');

// prettier-ignore
export const Content = styled.span`
  display: block;
  min-width: ${getButtonStyles('minWidth', true)}px;
  height: ${getButtonStyles('height', true)}px;

  position: relative;

  background-color: ${props => getButtonStyles(props.disabled ? 'disabled.backgroundColor' : 'backgroundColor')};

  border-width: 2px;
  border-style: solid;
  border-color: ${props => getButtonStyles(props.disabled ? 'disabled.borderColor' : 'borderColor')};
  border-radius: inherit;

  color: ${props => getButtonStyles(props.disabled ? 'disabled.color' : 'color')};
  font-family: ${getButtonStyles('fontFamily', true)};
  font-size: ${getButtonStyles('fontSize', true)}px;
  font-weight: ${getButtonStyles('fontWeight', true)};

  transition: background-color 0.3s, border-color 0.3s;
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

  transition: opacity 0.3s;

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
