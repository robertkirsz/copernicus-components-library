import styled, { css } from 'styled-components';

// prettier-ignore
const getInputStyles = props => css`
  width: 100%;

  ${props.iconIsVisible && 'padding-right: 48px;'};

  background: none;
  outline: none;
  border: none;
  border-radius: 2px;

  color: ${props.isDisabled ? props.theme.Input.disabled.color : props.isActive ? props.theme.Input.focus.color : props.theme.Input.color};
  font-size: ${props.theme.Input.fontSize}px;
  font-weight: ${props.theme.Input.fontWeight};
  font-family: ${props.theme.Main.fontFamily};

  transition: color 0.3s;
  -webkit-appearance: none;

  &::-ms-clear {
    display: none;
  }

  &::placeholder {
    color: ${props.theme.Input.placeholder.color};
    opacity: ${props.theme.Input.placeholder.opacity};
  }
`;

// prettier-ignore
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  ${props => props.isDisabled && 'cursor: not-allowed;'}

  input {
    ${getInputStyles};
    padding: 20px 16px 0;
  }

  textarea {
    ${getInputStyles};
    padding: 32px 16px 0;
  }
`;

// prettier-ignore
export const ChildrenWrapper = styled.div`
  flex: none;
  margin-left: 16px;
`;

export const StyledInput = styled.input``;

export const StyledTextArea = styled.textarea``;
