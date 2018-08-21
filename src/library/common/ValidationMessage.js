import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { statusColors } from "../palette";
import { statusType } from "../types";
import HeightTransition from "../common/HeightTransition";

export default class ValidationMessage extends PureComponent {
  static propTypes = {
    show: PropTypes.bool,
    status: statusType,
    children: PropTypes.node
  };

  static getDerivedStateFromProps = (props, state) => {
    let children = state.children;
    let status = state.status;

    if (props.children && props.children !== children) {
      children = props.children;
    }

    if (props.status && props.status !== status) {
      status = props.status;
    }

    return { children, status };
  };

  // We keep children and status in the state so that we
  // can use them during exit animation even when they're gone
  state = {
    status: this.props.status,
    children: this.props.children
  };

  render() {
    const { show, ...props } = this.props;

    return (
      <HeightTransition isActive={show}>
        <Message {...props} {...this.state} />
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
