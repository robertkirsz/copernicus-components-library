import * as React from "react";

import Div from "../demo-components/Div";

import { white, blueEndeavour } from "../library/palette";

import ArrowDownDash from "../library/icons/ArrowDownDash";
import ArrowDownSmall from "../library/icons/ArrowDownSmall";
import Arrows from "../library/icons/Arrows";
import ArrowUpSmall from "../library/icons/ArrowUpSmall";
import Card from "../library/icons/Card";
import Chat from "../library/icons/Chat";
import CircleMinus from "../library/icons/CircleMinus";
import CirclePlus from "../library/icons/CirclePlus";
import Close from "../library/icons/Close";
import CloseCircle from "../library/icons/CloseCircle";
import CloseCircleSmall from "../library/icons/CloseCircleSmall";
import CloseSmall from "../library/icons/CloseSmall";
import Document from "../library/icons/Document";
import DoorsArrowIn from "../library/icons/DoorsArrowIn";
import DoorsArrowOut from "../library/icons/DoorsArrowOut";
import EmojiSmileSmall from "../library/icons/EmojiSmileSmall";
import Gear from "../library/icons/Gear";
import Glass from "../library/icons/Glass";
import Hamburger from "../library/icons/Hamburger";
import Home from "../library/icons/Home";
import InfoSmall from "../library/icons/InfoSmall";
import List from "../library/icons/List";
import Lock from "../library/icons/Lock";
import MagicWand from "../library/icons/MagicWand";
import Microphone from "../library/icons/Microphone";
import Minus from "../library/icons/Minus";
import MinusSmall from "../library/icons/MinusSmall";
import More from "../library/icons/More";
import PaperclipSmall from "../library/icons/PaperclipSmall";
import Pencil from "../library/icons/Pencil";
import PiggyBank from "../library/icons/PiggyBank";
import Plane from "../library/icons/Plane";
import Plus from "../library/icons/Plus";
import PlusSmall from "../library/icons/PlusSmall";
import SlidersVertical from "../library/icons/SlidersVertical";
import TrashSmall from "../library/icons/TrashSmall";
import Trash from "../library/icons/Trash";
import Umbrella from "../library/icons/Umbrella";
import User from "../library/icons/User";
import Wallet from "../library/icons/Wallet";
import World from "../library/icons/World";

import ExampleWrapper from "./ExampleWrapper";

interface State {
  fill: string;
}

class IconsExample extends React.Component<{}, State> {
  state = {
    fill: "#201C17"
  };

  handleColorChange = color => event => {
    this.setState({ fill: color });
  };

  render() {
    return (
      <ExampleWrapper
        label="Icons"
        style={{ background: this.state.fill === white && "#ddd", transition: 'background 0.3s' }}
        {...this.props}
      >
        <Div absolute={true} listLeft={true} style={{ top: 8, right: 8 }}>
          <button onClick={this.handleColorChange("#201C17")}>Black</button>
          <button onClick={this.handleColorChange(blueEndeavour)}>Blue</button>
          <button onClick={this.handleColorChange(white)}>White</button>
        </Div>

        <IconsWrapper wraps={true}>
          <PiggyBank fill={this.state.fill} />
          <Wallet fill={this.state.fill} />
          <Umbrella fill={this.state.fill} />
          <Lock fill={this.state.fill} />
          <MagicWand fill={this.state.fill} />
          <Microphone fill={this.state.fill} />
          <Arrows fill={this.state.fill} />
          <Gear fill={this.state.fill} />
          <SlidersVertical fill={this.state.fill} />
          <Close fill={this.state.fill} />
          <Glass fill={this.state.fill} />
          <Home fill={this.state.fill} />
          <Plane fill={this.state.fill} />
          <Card fill={this.state.fill} />
          <User fill={this.state.fill} />
          <World fill={this.state.fill} />
          <Document fill={this.state.fill} />
          <Hamburger fill={this.state.fill} />
          <List fill={this.state.fill} />
          <Chat fill={this.state.fill} />
          <CloseCircle fill={this.state.fill} />
          <CloseCircleSmall fill={this.state.fill} />
          <DoorsArrowIn fill={this.state.fill} />
          <DoorsArrowOut fill={this.state.fill} />
          <Plus fill={this.state.fill} />
          <PlusSmall fill={this.state.fill} />
          <Minus fill={this.state.fill} />
          <MinusSmall fill={this.state.fill} />
          <InfoSmall fill={this.state.fill} />
          <ArrowUpSmall fill={this.state.fill} />
          <ArrowDownDash fill={this.state.fill} />
          <EmojiSmileSmall fill={this.state.fill} />
          <PaperclipSmall fill={this.state.fill} />
          <CloseSmall fill={this.state.fill} />
          <CirclePlus fill={this.state.fill} />
          <CircleMinus fill={this.state.fill} />
          <Trash fill={this.state.fill} />
          <TrashSmall fill={this.state.fill} />
          <More fill={this.state.fill} />
          <ArrowDownSmall fill={this.state.fill} />
          <Pencil fill={this.state.fill} />
        </IconsWrapper>
      </ExampleWrapper>
    );
  }
}

export default IconsExample;

const IconsWrapper = Div.extend`
  > * {
    margin: 16px;
  }
`;
