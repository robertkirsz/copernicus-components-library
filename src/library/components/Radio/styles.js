import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { withValidationStatus } from 'library/utils';
import StaticRipple from 'library/common/StaticRipple';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: baseline;
`;

export const InputWrapper = styled.div`
  flex: none;
  position: relative;
  padding: 8px;
  border-radius: 50%;
  color: ${props => props.theme.Radio.focus.borderColor};

  /* Hover state */
  &:hover {
    ${StaticRipple} {
      background: ${props => rgba(withValidationStatus('Radio.borderColor')(props), 0.2)};
      opacity: 1;
    }
  }
`;

export const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  width: 26px;
  height: 26px;

  position: relative;

  border: 2px solid ${withValidationStatus('Radio.borderColor')};
  border-radius: 50%;

  transition: background-color 0.3s, border-color 0.3s;

  &::after {
    content: '';

    display: block;
    width: 24px;
    height: 24px;

    position: absolute;

    border-radius: 50%;

    transform: scale(0);
    transition: 0.3s;
  }
`;

// prettier-ignore
export const Label = styled.label`
  padding-left: 2px;

  position: relative;
  top: 2px;

  font: inherit;
  user-select: none;
  cursor: pointer;

  ${props => props.disabled && `
    color: ${props.theme.Radio.disabled.color};
    cursor: not-allowed;
  `}
`;

// prettier-ignore
export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 1;

  ${({ theme }) => css`
    /* Focus state */
    &:enabled:focus {
      + ${Icon} {
        border-color: ${theme.Radio.focus.borderColor};
      }

      ~ ${StaticRipple} {
        background: ${rgba(theme.Radio.focus.borderColor, 0.2)};
        opacity: 1;
      }
    }

    /* Checked state */
    &:checked {
      + ${Icon} {
        border-color: ${theme.Radio.checked.borderColor};

        &::after {
          background-color: ${theme.Radio.checked.backgroundColor};
          transform: scale(1);
        }
      }

      ~ ${StaticRipple} {
        background: ${rgba(theme.Radio.checked.borderColor, 0.2)};
      }
    }

    /* Disabled state */
    &:disabled {
      cursor: not-allowed;

      + ${Icon} {
        background-color: ${theme.Radio.disabled.backgroundColor};
        border-color: ${theme.Radio.disabled.borderColor};
      }

      ~ ${StaticRipple} {
        display: none;
      }
    }
  `}
`;
