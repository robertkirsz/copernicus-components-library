import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import * as themes from 'library/themes';

const propTypes = {
  theme: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func
};

const ThemeChanger = ({ theme, onChange }) => (
  <Wrapper>
    {Object.keys(themes).map(themeName => (
      <Button key={themeName} isActive={theme.name === themeName} onClick={() => onChange(themeName)}>
        {themeName}
      </Button>
    ))}
  </Wrapper>
);

ThemeChanger.propTypes = propTypes;

export default withTheme(ThemeChanger);

const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10;
`;

const Button = styled.button`
  cursor: pointer;
  ${props => props.isActive && 'text-decoration: underline'};
`;
