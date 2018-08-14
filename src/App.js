import React, { Component } from 'react';
import styled, { injectGlobal, css } from 'styled-components';
import Div from 'styled-kit/Div';
import { hot } from 'react-hot-loader';

import ThemeProvider from 'library/components/ThemeProvider';

import ButtonExample from 'examples/ButtonExample';
import CheckboxExample from 'examples/CheckboxExample';
import FormExample from 'examples/FormExample';
import InputExample from 'examples/InputExample';
import RadioExample from 'examples/RadioExample';
import TypographyExample from 'examples/TypographyExample';

import ThemeChanger from './demo-components/ThemeChanger';

class App extends Component {
  state = {
    password: '',
    loggedIn: Boolean(sessionStorage.getItem('loggedIn')),
    themeName: localStorage.getItem('chosenTheme') || 'defaultLight'
  };

  handleThemeChange = themeName => {
    localStorage.setItem('chosenTheme', themeName);
    this.setState({ themeName });
  };

  handlePasswordChange = event => this.setState({ password: event.target.value });

  handleLogin = event => {
    event.preventDefault();

    if (this.state.password === 'kopernik') {
      sessionStorage.setItem('loggedIn', true);
      this.setState({ loggedIn: true });
    }
  };

  renderComponentExamples = () => (
    <Wrapper justifyCenter>
      <Div flex={1} column maxWidth={960}>
        <TypographyExample />

        <ButtonExample />

        <Div wraps>
          <CheckboxExample flex={1} />
          <RadioExample flex={1} />
        </Div>

        <InputExample />

        <Div wraps>
          <FormExample flex={1} validateOnSubmit />
          <FormExample flex={1} validateOnBlur />
        </Div>
      </Div>

      <ThemeChanger onChange={this.handleThemeChange} />
    </Wrapper>
  );

  renderPasswordScreen = () => (
    <Div height="100%" justifyCenter itemsCenter>
      <form onSubmit={this.handleLogin}>
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          autoFocus
        />
        <button style={{ marginLeft: 8 }}>Login</button>
      </form>
    </Div>
  );

  render = () => (
    <ThemeProvider themeName={this.state.themeName}>
      {this.state.loggedIn ? this.renderComponentExamples() : this.renderPasswordScreen()}
    </ThemeProvider>
  );
}

export default hot(module)(App);

injectGlobal`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font: 16px "Open Sans", sans-serif;
    box-sizing: border-box;
  }

  * {
    /* TODO: Probably should apply this explicitly to each component */
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
`;

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
