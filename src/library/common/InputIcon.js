import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { white } from '../palette';
import { statusType } from '../types';

const propTypes = {
  theme: PropTypes.shape({}),
  status: statusType,
  showArrow: PropTypes.bool,
  isArrowActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};

// prettier-ignore
const InputIcon = styled.span`
  ${({ theme, showArrow, isArrowActive, isDisabled, status }) => css`
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    position: absolute;
    top: 20px;
    right: 12px;

    transition: 0.3s;
    pointer-events: none;

    &::before,
    &::after {
      content: "";

      display: block;
      width: 2px;
      height: 2px;

      position: absolute;
      top: 50%;

      background: ${isDisabled ? theme.Input.disabled.color : status ? white : theme.primaryColor};
      border-radius: 2px;
      opacity: ${status || showArrow ? 1 : 0};

      transition: 0.2s;
    }

    &::before {
      right: 50%;
      transform-origin: right center;
    }

    &::after {
      left: 50%;
      transform-origin: left center;
    }

    /* Dash icon */
    ${showArrow && css`
      &::before {
        width: 12px;
        right: 11px;
        top: ${isArrowActive ? 8 : 16}px;
        transform: rotate(${isArrowActive ? -45 : 45}deg);
      }

      &::after {
        width: 12px;
        left: 12px;
        top: ${isArrowActive ? 8 : 16}px;
        transform: rotate(${isArrowActive ? 45 : -45}deg);
      }
    `}

    /* Check icon */
    ${!isArrowActive && status === 'success' && css`
      &::before {
        width: 10px;
        right: 15px;
        top: 19px;
        transform: rotate(45deg);
      }

      &::after {
        width: 18px;
        left: 8px;
        top: 19px;
        transform: rotate(-45deg);
      }
    `}

    /* Exclamation mark icon */
    ${!isArrowActive && status === 'warning' && css`
      &::before {
        width: 4px;
        height: 4px;
        right: 12px;
        top: 21px;
        border-radius: 50%;
        transform: translateX(50%);
      }

      &::after {
        width: 15px;
        left: 12px;
        top: 14px;
        transform: rotate(-90deg);
      }
    `}

    /* Cross icon */
    ${!isArrowActive && status === 'error' && css`
      &::before {
        width: 23px;
        right: 4px;
        top: 19px;
        transform: rotate(45deg);
      }

      &::after {
        width: 23px;
        left: 4px;
        top: 19px;
        transform: rotate(-45deg);
      }
    `}
  `}
`;

InputIcon.propTypes = propTypes;

export default InputIcon;
