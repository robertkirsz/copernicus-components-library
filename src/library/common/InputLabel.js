import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { statusColors } from '../palette';

// prettier-ignore
const InputLabel = styled.label`
  ${({ theme, status, isDisabled, iconIsVisible, isActive, isStatic, offsetLeft, validationStatus }) => css`
    display: inline-flex;
    width: ${iconIsVisible && !isActive ? 'calc(100% - 36px)' : '100%'};
    padding: ${offsetLeft ? `0 16px 0 ${offsetLeft + 16}px` : '0 16px'};

    position: absolute;
    top: ${theme.InputLabel.top}px;
    left: 0;

    font-size: ${theme.InputLabel.fontSize}px;
    line-height: ${theme.InputLabel.lineHeight}px;
    font-weight: ${theme.InputLabel.fontWeight};
    color: ${isDisabled ? theme.Input.disabled.color : status ? statusColors[validationStatus] : theme.InputLabel.color};
    white-space: nowrap;
    text-overflow: ellipsis;
    pointer-events: none;

    overflow: hidden;
    transition: all 0.2s ease, top 0.2s ease-out, padding 0.2s ease-in;

    ${isActive && css`
      top: ${theme.InputLabel.active.top}px;

      color: ${props => props.validationStatus ? statusColors[validationStatus] : theme.InputLabel.active.color};
      font-size: ${theme.InputLabel.active.fontSize}px;
      line-height: ${theme.InputLabel.active.lineHeight}px;

      transition: all 0.2s ease, top 0.2s ease-in, padding 0.2s ease-out;
    `}

    ${isStatic && css`
      position: relative;
      top: 0;

      color: ${props => props.validationStatus ? statusColors[validationStatus] : theme.InputLabel.active.color};
      font-size: ${theme.InputLabel.active.fontSize}px;
      line-height: ${theme.InputLabel.active.lineHeight}px;
    `}
  `}
`;

InputLabel.propTypes = {
  iconIsVisible: PropTypes.bool,
  isStatic: PropTypes.bool,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  offsetLeft: PropTypes.number,
  status: PropTypes.string,
  theme: PropTypes.shape({})
};

export default InputLabel;
