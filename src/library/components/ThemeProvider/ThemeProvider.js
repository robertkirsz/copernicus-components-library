import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import * as themes from 'library/themes';

const propTypes = {
  themeName: PropTypes.oneOf(Object.keys(themes)),
  children: PropTypes.node
};

const defaultProps = {
  themeName: 'defaultLight'
};

const ThemeProvider = ({ themeName, children }) => (
  <StyledThemeProvider theme={themes[themeName]}>{Children.only(children)}</StyledThemeProvider>
);

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
