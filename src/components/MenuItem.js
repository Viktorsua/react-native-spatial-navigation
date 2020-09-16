import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import withFocusable from '../withFocusable';
import styles from "../styles";


/* eslint-disable react/prefer-stateless-function */
class MenuItem extends React.PureComponent {
  render() {
    // console.log('Menu item rendered: ', this.props.realFocusKey);

    return (
      <TouchableOpacity
        style={[
          styles.menuItem,
          this.props.focused ? styles.focusedBorder : null,
          {
            // border: '2px solid green',
          }
        ]}
      />
    );
  }
}

MenuItem.propTypes = {
  focused: PropTypes.bool.isRequired,

  // realFocusKey: PropTypes.string.isRequired
};

export default withFocusable()(MenuItem);
