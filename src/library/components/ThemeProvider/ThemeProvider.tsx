import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import * as themes from '../../themes';

interface CarouselProps {
  themeName?: string;
}

const defaultProps = {
  themeName: 'defaultLight'
};

const ThemeProvider: React.SFC<CarouselProps> = props => (
  <StyledThemeProvider theme={themes[props.themeName]}>{React.Children.only(props.children)}</StyledThemeProvider>
);

ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
