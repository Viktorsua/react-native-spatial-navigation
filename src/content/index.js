import React from "react";
import { View } from "react-native";
import styles from "../styles";
import withFocusable from "../withFocusable";
import { Active, CategoriesFocusable } from '../components';

const KEY_ENTER = 'enter';
const B_KEY = 66;

class Content extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentProgram: null,
      blockNavigationOut: false,
    };

    this.onPressKey = this.onPressKey.bind(this);
    this.onProgramPress = this.onProgramPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onPressKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onPressKey);
  }

  onPressKey(event) {
    if (event.keyCode === B_KEY) {
      const { blockNavigationOut: blocked } = this.state;

      console.warn(
        `blockNavigationOut: ${!blocked}. Press B to ${
          blocked ? "block" : "unblock "
        }`
      );
      this.setState((prevState) => ({
        blockNavigationOut: !prevState.blockNavigationOut,
      }));
    }
  }

  onProgramPress(programProps, { pressedKeys } = {}) {
    if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
      return;
    }
    this.setState({
      currentProgram: programProps,
    });
  }

  render() {
    const { blockNavigationOut } = this.state;

    // console.log('content rendered: ', this.props.realFocusKey);

    return (
      <View style={styles.content}>
        <Active program={this.state.currentProgram} />
        <CategoriesFocusable
          focusKey={"CATEGORIES"}
          onProgramPress={this.onProgramPress}
          blockNavigationOut={blockNavigationOut}
        />
      </View>
    );
  }
}

Content.propTypes = {
  // realFocusKey: PropTypes.string.isRequired
};

export default withFocusable()(Content);
