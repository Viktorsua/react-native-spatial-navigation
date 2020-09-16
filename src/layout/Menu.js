import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import withFocusable from '../withFocusable';
import styles from "../styles";
import { MenuItemFocusable } from '../components';

const RETURN_KEY = 8;

class Menu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onPressKey = this.onPressKey.bind(this);
  }

  componentDidMount() {
    this.props.setFocus();

    window.addEventListener("keydown", this.onPressKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onPressKey);
  }

  onPressKey(event) {
    if (event.keyCode === RETURN_KEY) {
      this.props.setFocus();
    }
  }

  render() {
    // console.log('Menu rendered: ', this.props.realFocusKey);

    return (
      <View
        style={[
          styles.menu,
          this.props.hasFocusedChild ? styles.menuFocused : null,
        ]}
      >
        <MenuItemFocusable focusKey={"MENU-1"} />
        <MenuItemFocusable focusKey={"MENU-2"} />
        <MenuItemFocusable focusKey={"MENU-3"} />
        <MenuItemFocusable focusKey={"MENU-4"} />
        <MenuItemFocusable focusKey={"MENU-5"} />
        <MenuItemFocusable focusKey={"MENU-6"} />
      </View>
    );
  }
}

Menu.propTypes = {
  setFocus: PropTypes.func.isRequired,
  hasFocusedChild: PropTypes.bool.isRequired,

  // realFocusKey: PropTypes.string.isRequired
};

export default withFocusable({ trackChildren: true })(Menu);
