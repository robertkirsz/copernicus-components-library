import * as React from "react";
import styled, { css } from "styled-components";

import ThemeProvider from "./library/components/ThemeProvider";

import ButtonExample from "./examples/ButtonExample";
import CheckboxExample from "./examples/CheckboxExample";
import FormExample from "./examples/FormExample";
import IconsExample from "./examples/IconsExample";
import InputExample from "./examples/InputExample";
import RadioExample from "./examples/RadioExample";
import TypographyExample from "./examples/TypographyExample";

import ThemeChanger from "./demo-components/ThemeChanger";
import Div from "./demo-components/Div";

interface State {
  themeName: string;
}

class App extends React.Component<{}, State> {
  state = {
    themeName: localStorage.getItem("chosenTheme") || "defaultLight"
  };

  handleThemeChange = (themeName: State["themeName"]) => {
    localStorage.setItem("chosenTheme", themeName);
    this.setState({ themeName });
  };

  render() {
    return (
      <ThemeProvider themeName={this.state.themeName}>
        <Wrapper justifyCenter={true}>
          <Div flex={1} column={true} maxWidth={960}>
            <TypographyExample />

            <ButtonExample />

            <Div wraps={true}>
              <CheckboxExample flex={1} />

              <RadioExample flex={1} />
            </Div>

            <IconsExample />

            <InputExample />

            <Div wraps={true}>
              <FormExample flex={1} validateOnSubmit={true} />

              <FormExample flex={1} validateOnBlur={true} />
            </Div>
          </Div>

          <ThemeChanger onChange={this.handleThemeChange} />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

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
