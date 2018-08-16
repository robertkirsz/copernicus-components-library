// Usage examples

// Normal component:
// const Div = ({ innerRef, ...props }) => <div {...props} ref={innerRef} />
// const RippledDiv = withRipple(Div)

// styled-component:
// const styledDiv = styled.div``
// const RippledStyledDiv = withRipple(styledDiv)

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const defaultOptions = {
  rippleBoundary: '0',
  duration: '0.7s',
  scale: 0.7
};

const withRipple = (WrappedComponent, customOptions) => {
  const options = { ...defaultOptions, ...customOptions };

  return class WithRipple extends PureComponent {
    static propTypes = {
      disabled: PropTypes.bool,
      color: PropTypes.string,
      forwardedRef: PropTypes.object,
      onMouseDown: PropTypes.func,
      children: PropTypes.node
    };

    static defaultProps = {
      color: 'currentColor',
      onMouseDown: () => {}
    };

    state = {
      showRipples: false,
      ripples: [],
      style: {},
      borderRadius: 'inherit'
    };

    wrappedComponentRef = React.createRef();

    handleMouseDown = event => {
      if (this.props.disabled) return;

      const node = this.wrappedComponentRef.current;
      const { left, top } = node.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const rippleSize = Math.min(node.offsetHeight, node.offsetWidth, 100) * options.scale;

      const newRipple = {
        id: Date.now(),
        style: {
          width: rippleSize,
          height: rippleSize,
          left: x - rippleSize / 2,
          top: y - rippleSize / 2
        }
      };

      const computedStyles = window.getComputedStyle(node, null);
      const initialPosition = computedStyles.getPropertyValue('position');
      const borderRadius = computedStyles.getPropertyValue('border-radius');

      this.setState({
        showRipples: true,
        ripples: [...this.state.ripples, newRipple],
        style: !initialPosition || initialPosition === 'static' ? { position: 'relative' } : this.state.style,
        borderRadius: borderRadius || this.state.borderRadius
      });
    };

    handleRippleAnimationEnd = id => event => {
      const ripples = this.state.ripples.filter(ripple => ripple.id !== id);
      const showRipples = ripples.length > 0;

      this.setState({ ripples, showRipples, style: showRipples ? this.state.style : {} });
    };

    render() {
      const { children, color, ...props } = this.props;
      const { showRipples, ripples, borderRadius, style } = this.state;

      return (
        <WrappedComponent
          {...props}
          innerRef={this.wrappedComponentRef}
          style={{ ...props.style, ...style }}
          onMouseDown={this.handleMouseDown}
        >
          {showRipples && (
            <RippleWrapper borderRadius={borderRadius} rippleBoundary={options.rippleBoundary}>
              {ripples.map(ripple => (
                <Ripple
                  key={ripple.id}
                  style={ripple.style}
                  color={color}
                  duration={options.duration}
                  onAnimationEnd={this.handleRippleAnimationEnd(ripple.id)}
                />
              ))}
            </RippleWrapper>
          )}
          {children}
        </WrappedComponent>
      );
    }
  };
};

export default withRipple;

const ripple = keyframes`
  to {
    transform: scale(16);
    opacity: 0;
  }
`;

// prettier-ignore
const RippleWrapper = styled.div`
  position: absolute;

  ${({ rippleBoundary }) => css`
    top: ${rippleBoundary};
    left: ${rippleBoundary};
    bottom: ${rippleBoundary};
    right: ${rippleBoundary};
  `}

  border-radius: ${props => props.borderRadius};
  overflow: hidden;
  pointer-events: none;

  /* Safari fix for "border-radius" + "overflow: hidden" */
  -webkit-mask-image: -webkit-radial-gradient(white, black);
`;

RippleWrapper.defaultProps = {
  rippleBoundary: defaultOptions.rippleBoundary,
  borderRadius: 'inherit'
};

const Ripple = styled.div`
  position: absolute;
  background: ${props => props.color};
  border-radius: 50%;
  opacity: 0.2;

  animation-name: ${ripple};
  animation-duration: ${props => props.duration};
`;

Ripple.defaultProps = {
  color: 'currentColor',
  duration: defaultOptions.duration
};
