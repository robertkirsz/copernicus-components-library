import * as React from 'react';
import styled, { css } from 'styled-components';
// import { hot } from 'react-hot-loader';

import ThemeProvider from './library/components/ThemeProvider';

import ButtonExample from './examples/ButtonExample';
import CheckboxExample from './examples/CheckboxExample';
import FormExample from './examples/FormExample';
import InputExample from './examples/InputExample';
import RadioExample from './examples/RadioExample';
import TypographyExample from './examples/TypographyExample';

import ThemeChanger from './demo-components/ThemeChanger';
import Div from './demo-components/Div';

interface AppState {
  password: string;
  loggedIn: boolean;
  themeName: string;
}

class App extends React.Component<{}, AppState> {
  state = {
    password: '',
    loggedIn: Boolean(sessionStorage.getItem('loggedIn')),
    themeName: localStorage.getItem('chosenTheme') || 'defaultLight'
  };

  handleThemeChange = (themeName: AppState['themeName']) => {
    localStorage.setItem('chosenTheme', themeName);
    this.setState({ themeName });
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ password: event.target.value });

  handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.password === 'kopernik') {
      sessionStorage.setItem('loggedIn', 'true');
      this.setState({ loggedIn: true });
    }
  };

  renderComponentExamples = () => (
    <Wrapper justifyCenter={true}>
      <Div flex={1} column={true} maxWidth={960}>
        <TypographyExample />
        
        <ButtonExample />
        
        <Div wraps={true}>
          <CheckboxExample flex={1} />
          
          <RadioExample flex={1} />
        </Div>
        
        <InputExample />
        
        <Div wraps={true}>
          <FormExample flex={1} validateOnSubmit={true} />
          
          <FormExample flex={1} validateOnBlur={true} />
        </Div>
      </Div>

      <ThemeChanger onChange={this.handleThemeChange} />
    </Wrapper>
  );

  renderPasswordScreen = () => (
    <Div height="100%" justifyCenter={true} itemsCenter={true}>
      <form onSubmit={this.handleLogin}>
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          autoFocus={true}
        />
        <button style={{ marginLeft: 8 }}>Login</button>
      </form>
    </Div>
  );

  render() {
    return (
      <ThemeProvider themeName={this.state.themeName}>
        {this.state.loggedIn ? this.renderComponentExamples() : this.renderPasswordScreen()}
      </ThemeProvider>
    );
  }
}

// export default hot(module)(App);
export default App;

// prettier-ignore
const Wrapper = styled(Div)`
  padding: 20px;
  transition: background 0.3s;

  /* NOTE: We need this so that we can easily apply pseudo-element-shadows using negative z-index */
  position: relative;
  z-index: 1;

  ${({ theme }) => css`
    background: ${theme.Main.background};
    color: ${theme.Main.color};
  `}
`;
