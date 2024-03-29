import styled, { css } from 'styled-components';

import { statusColors } from '../palette';

// prettier-ignore
const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 65px;

  position: relative;

  border: 1px solid;
  border-bottom: 2px solid;
  border-radius: 2px 2px 0 0;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.63;
  white-space: nowrap;

  transition: all 0.3s, border-radius ${({ isOptionsListOpened }) => (isOptionsListOpened ? '0' : '.3s .1s')};

  /* Theming */
  ${({ theme, isActive, isDisabled, validationStatus, isOptionsListOpened }) => css`
    /* Default state */
    background-color: ${theme.Input.backgroundColor};
    border-color: ${theme.Input.borderColor};

    /* Hover state */
    ${!validationStatus && css`
      &:hover {
        background-color: ${theme.Input.hover.backgroundColor};
        border-color: ${theme.Input.hover.borderColor};
      }
    `}

    ${isActive && css`
      border-bottom-color: ${theme.Input.focus.borderBottomColor};
    `}

    /* Validation status colors */
    ${validationStatus && css`
      border-bottom-color: ${statusColors[validationStatus]};
    `}

    /* Disabled state */
    ${isDisabled && css`
      pointer-events: none;
      background-color: ${theme.Input.disabled.backgroundColor};
      border-color: ${theme.Input.disabled.borderColor};
    `}

    ${isOptionsListOpened && css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  `}
`;

export default InputWrapper;
