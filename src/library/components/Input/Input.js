import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

import { blueEndeavour, greyMischka, statusColors } from 'library/palette';
import { statusType } from 'library/types';
import InputWrapper from 'library/common/InputWrapper';
import ValidationMessage from 'library/common/ValidationMessage';
import InputIcon from 'library/common/InputIcon';
import InputLabel from 'library/common/InputLabel';
import Shadow from 'library/common/Shadow';

import { Wrapper, StyledTextArea, StyledInput, ChildrenWrapper } from './styles';

export default class Input extends PureComponent {
  static propTypes = {
    // HTML props
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    multiLine: PropTypes.bool,
    rows: PropTypes.number,
    // Component-specific props
    readOnly: PropTypes.bool,
    fixedLabel: PropTypes.bool,
    label: PropTypes.node,
    inputElement: PropTypes.node,
    hintMessage: PropTypes.node,
    // Validation
    validationStatus: statusType,
    validationMessage: PropTypes.node,
    // Event handlers
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    // Custom props and styles
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    labelStyle: PropTypes.shape({}),
    labelProps: PropTypes.shape({}),
    inputStyle: PropTypes.shape({}),
    wrapperProps: PropTypes.shape({})
  };

  static defaultProps = {
    type: 'text',
    rows: 1,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {}
  };

  childrenWrapperRef = createRef();

  state = {
    hasValue: !!this.props.value,
    hasFocus: false,
    childrenWrapperWidth: null
  };

  componentDidMount() {
    if (!this.props.children) return;

    const childrenWrapperWidth = this.childrenWrapperRef.current.clientWidth;

    if (childrenWrapperWidth > 0) this.setState({ childrenWrapperWidth: childrenWrapperWidth + 16 });
  }

  handleChange = event => {
    this.setState({ hasValue: !!event.target.value });
    this.props.onChange(event);
  };

  handleFocus = event => {
    this.setState({ hasFocus: true });
    this.props.onFocus(event);
  };

  handleBlur = event => {
    this.setState({ hasFocus: false });
    this.props.onBlur(event);
  };

  render() {
    const {
      type,
      multiLine,
      label,
      fixedLabel,
      inputElement,
      hintMessage,
      validationStatus,
      validationMessage,
      className,
      style,
      labelStyle,
      labelProps,
      inputStyle,
      wrapperProps,
      children,
      ...props
    } = this.props;

    const { hasValue, hasFocus, childrenWrapperWidth } = this.state;

    const showValidationMessage = !hasFocus && Boolean(validationMessage);
    const showHintMessage = hasFocus && Boolean(hintMessage);
    const _validationStatus = (!hasFocus && !showHintMessage && validationStatus) || null;
    const iconIsVisible = Boolean(validationStatus);
    const InputComponent = multiLine ? StyledTextArea : StyledInput;
    const hasCustomInput = Boolean(inputElement);
    const showShadow = !props.disabled;
    const labelIsActive = Boolean(
      props.value || hasValue || (hasFocus && !props.readOnly) || fixedLabel || props.placeholder
    );
    const shadowColor = labelIsActive
      ? blueEndeavour
      : showValidationMessage
        ? statusColors[_validationStatus]
        : greyMischka;

    return (
      <Wrapper
        isDisabled={props.disabled}
        iconIsVisible={iconIsVisible}
        style={style}
        className={className}
        isActive={labelIsActive}
        {...wrapperProps}
      >
        <InputWrapper validationStatus={_validationStatus} isActive={labelIsActive} isDisabled={props.disabled}>
          {children && <ChildrenWrapper innerRef={this.childrenWrapperRef}>{children}</ChildrenWrapper>}

          <InputLabel
            htmlFor={this.props.id}
            isActive={labelIsActive}
            status={_validationStatus}
            isDisabled={props.disabled}
            style={labelStyle}
            iconIsVisible={iconIsVisible}
            offsetLeft={childrenWrapperWidth}
            {...labelProps}
          >
            {label}
          </InputLabel>

          {!hasCustomInput && (
            <InputComponent
              {...props}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              style={inputStyle}
              iconIsVisible={iconIsVisible}
              type={type}
            />
          )}

          {hasCustomInput &&
            React.cloneElement(inputElement, {
              ...props,
              onChange: this.handleChange,
              onFocus: this.handleFocus,
              onBlur: this.handleBlur,
              style: inputStyle
            })}

          <InputIcon status={_validationStatus} isDisabled={props.disabled} />

          {showShadow && <Shadow color={shadowColor} />}
        </InputWrapper>

        <ValidationMessage show={showHintMessage || showValidationMessage} status={_validationStatus}>
          {showHintMessage ? hintMessage : showValidationMessage ? validationMessage : ''}
        </ValidationMessage>
      </Wrapper>
    );
  }
}
