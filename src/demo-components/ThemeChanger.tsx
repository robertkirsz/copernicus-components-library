import * as React from 'react';
import styled, { withTheme } from 'styled-components';

import * as themes from '../library/themes';

interface ThemeChangerProps {
  className?: string;
  theme: { name: string };
  onChange: (themeName: string) => void
};

const ThemeChanger: React.SFC<ThemeChangerProps> = ({ theme, onChange, ...props }) => (
  <div {...props}>
    {Object.keys(themes).map(themeName => (
      <Button key={themeName} isActive={theme.name === themeName} onClick={() => onChange(themeName)}>
        {themeName}
      </Button>
    ))}
  </div>
);

const StyledThemeChanger = styled(ThemeChanger)`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10;
`;

export default withTheme(StyledThemeChanger);

const Button = styled<{ isActive: boolean }, 'button'>('button')`
  cursor: pointer;
  ${props => props.isActive && 'text-decoration: underline'};
`;
