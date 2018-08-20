import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import * as themes from '../../themes';

interface ThemeProviderProps {
  themeName: string;
}

const defaultProps: ThemeProviderProps = {
  themeName: 'defaultLight'
};

const ThemeProvider: React.SFC<ThemeProviderProps> = props => (
  <StyledThemeProvider theme={themes[props.themeName]}>{React.Children.only(props.children)}</StyledThemeProvider>
);

ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
