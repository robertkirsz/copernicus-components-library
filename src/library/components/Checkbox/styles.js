import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { withValidationStatus } from '../../utils';
import StaticRipple from '../../common/StaticRipple';
import { ShortLine, LongLine } from './CheckedIcon';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: baseline;
`;

export const InputWrapper = styled.div`
  flex: none;
  position: relative;
  padding: 8px;
  border-radius: 50%;
  color: ${props => props.theme.Checkbox.focus.borderColor};

  /* Hover state */
  &:hover {
    ${StaticRipple} {
      background: ${props => rgba(withValidationStatus('Checkbox', 'borderColor')(props), 0.2)};
      opacity: 1;
    }
  }
`;

export const Box = styled.div`
  flex: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  width: 26px;
  height: 26px;

  position: relative;

  border: 2px solid ${withValidationStatus('Checkbox', 'borderColor')};
  border-radius: 2px;
  pointer-events: none;

  transition: background-color 0.3s, border-color 0.3s;
`;

// prettier-ignore
export const Label = styled.label`
  padding-left: 2px;

  position: relative;
  top: 2px;

  font: inherit;
  user-select: none;
  cursor: pointer;

  ${props => props.disabled && css`
    color: ${props.theme.Checkbox.disabled.color};
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
      + ${Box} {
        border-color: ${theme.Checkbox.focus.borderColor};
      }

      ~ ${StaticRipple} {
        background: ${rgba(theme.Checkbox.focus.borderColor, 0.2)};
        opacity: 1;
      }
    }

    /* Checked state */
    &:checked {
      + ${Box} {
        background-color: ${theme.Checkbox.checked.backgroundColor};
        border-color: ${theme.Checkbox.checked.borderColor};

        ${ShortLine} {
          width: 7px;
          transition: width 0.05s 0.2s;
        }

        ${LongLine} {
          width: 15px;
          transition: width 0.15s 0.225s;
        }
      }

      ~ ${StaticRipple} {
        background: ${rgba(theme.Checkbox.checked.borderColor, 0.2)};
      }
    }

    /* Disabled state */
    &:disabled {
      cursor: not-allowed;

      + ${Box} {
        background-color: ${theme.Checkbox.disabled.backgroundColor};
        border-color: ${theme.Checkbox.disabled.borderColor};
      }

      ~ ${StaticRipple} {
        display: none;
      }
    }
  `}
`;
