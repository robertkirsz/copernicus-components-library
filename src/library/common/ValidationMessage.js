import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { statusColors } from 'library/palette';
import { statusType } from 'library/types';
import HeightTransition from 'library/common/HeightTransition';

export default class ValidationMessage extends PureComponent {
  static propTypes = {
    show: PropTypes.bool,
    status: statusType,
    children: PropTypes.node
  };

  // We keep children in props so that we can use them during exit animation even when they're gone
  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.children && nextProps.children !== prevState.children) {
      return { children: nextProps.children };
    }

    return null;
  };

  state = { children: this.props.children };

  render() {
    const { show, children, ...props } = this.props;

    return (
      <HeightTransition isActive={show}>
        <Message {...props}>{this.state.children}</Message>
      </HeightTransition>
    );
  }
}

// prettier-ignore
const Message = styled.span`
  ${props => css`
    font-size: ${props.theme.ValidationMessage.fontSize}px;
    font-weight: ${props.theme.ValidationMessage.fontWeight};
    color: ${statusColors[props.status]};
  `}
`;
