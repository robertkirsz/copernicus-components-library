import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { white } from 'library/palette';
import { statusType } from 'library/types';

// prettier-ignore
const InputLabel = styled.label`
  ${({ theme, status, isDisabled, iconIsVisible, isActive, isStatic, offsetLeft }) => css`
    display: inline-flex;
    width: ${iconIsVisible && !isActive ? 'calc(100% - 36px)' : '100%'};
    padding: ${offsetLeft ? `0 16px 0 ${offsetLeft + 16}px` : '0 16px'};

    position: absolute;
    top: ${theme.InputLabel.top}px;
    left: 0;

    font-size: ${theme.InputLabel.fontSize}px;
    line-height: ${theme.InputLabel.lineHeight}px;
    font-weight: ${theme.InputLabel.fontWeight};
    color: ${isDisabled ? theme.Input.disabled.color : status ? white : theme.InputLabel.color};
    white-space: nowrap;
    text-overflow: ellipsis;
    pointer-events: none;

    overflow: hidden;
    transition: all 0.2s ease, top 0.2s ease-out, padding 0.2s ease-in;

    ${isActive && css`
      top: ${theme.InputLabel.active.top}px;

      color: ${theme.InputLabel.active.color};
      font-size: ${theme.InputLabel.active.fontSize}px;
      line-height: ${theme.InputLabel.active.lineHeight}px;

      opacity: ${theme.InputLabel.active.opacity};
      transition: all 0.2s ease, top 0.2s ease-in, padding 0.2s ease-out;
    `}

    ${isStatic && css`
      position: relative;
      top: 0;

      color: ${theme.InputLabel.active.color};
      font-size: ${theme.InputLabel.active.fontSize}px;
      line-height: ${theme.InputLabel.active.lineHeight}px;

      opacity: ${theme.InputLabel.active.opacity};
    `}
  `}
`;

InputLabel.propTypes = {
  iconIsVisible: PropTypes.bool,
  isStatic: PropTypes.bool,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  offsetLeft: PropTypes.number,
  status: statusType,
  theme: PropTypes.shape({})
};

export default InputLabel;
