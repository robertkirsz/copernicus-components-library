import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { screenSize } from '../../styles';

const getSize = size => css`
  flex-basis: ${(100 / 12) * size}%;
  max-width: ${(100 / 12) * size}%;
`;

// prettier-ignore
const Col = styled.div`
  flex: 1 0 0;
  max-width: 100%;
  padding-left: 4px;
  padding-right: 4px;

  box-sizing: content-box;

  ${props => css`
    ${props.small === true && 'flex-basis: 100%;'}
    ${Number.isInteger(props.small) ? getSize(props.small) : ''}
    ${Number.isInteger(props.offset) ? `margin-left: ${100 / 12 * props.offset}%;` : ''}
    ${Number.isInteger(props.offsetSmall) ? `margin-left: ${100 / 12 * props.offsetSmall}%;` : ''}
  `}

  ${screenSize.mediumUp`
    padding-left: 6px;
    padding-right: 6px;
    ${props => Number.isInteger(props.medium) && getSize(props.medium)}
    ${props => Number.isInteger(props.offsetMedium) && `margin-left: ${100 / 12 * props.offsetMedium}%;`}
  `}

  ${screenSize.largeUp`
    padding-left: 8px;
    padding-right: 8px;
    ${props => Number.isInteger(props.large) && getSize(props.large)}
    ${props => Number.isInteger(props.offsetLarge) && `margin-left: ${100 / 12 * props.offsetLarge}%;`}
  `}

  ${screenSize.extraLargeUp`
    padding-left: 12px;
    padding-right: 12px;
    ${props => Number.isInteger(props.extraLarge) && getSize(props.extraLarge)}
    ${props => Number.isInteger(props.offsetExtraLarge) && `margin-left: ${100 / 12 * props.offsetExtraLarge}%;`}
  `}
`;

Col.propTypes = {
  small: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  medium: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  large: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  extraLarge: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  offset: PropTypes.number,
  offsetSmall: PropTypes.number,
  offsetMedium: PropTypes.number,
  offsetLarge: PropTypes.number,
  offsetExtraLarge: PropTypes.number
};

export default Col;
