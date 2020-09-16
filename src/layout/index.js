/* eslint-disable react/no-multi-comp */
import React from "react";
import PropTypes from "prop-types";
import throttle from "lodash/throttle";
import { View } from "react-native";
import styles from "../styles";
import withFocusable from "../withFocusable";
import MenuFocusable from "./Menu";
import ContentFocusable from "../content";

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onWheel = this.onWheel.bind(this);
    this.throttledWheelHandler = throttle(
      this.throttledWheelHandler.bind(this),
      500,
      { trailing: false }
    );
  }

  componentDidMount() {
    window.addEventListener("wheel", this.onWheel, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.onWheel);
  }

  onWheel(event) {
    event.preventDefault();
    this.throttledWheelHandler(event);
  }

  throttledWheelHandler(event) {
    event.preventDefault();
    const { deltaY, deltaX } = event;
    const { navigateByDirection } = this.props;

    if (deltaY > 1) {
      navigateByDirection("down");
    } else if (deltaY < 0) {
      navigateByDirection("up");
    } else if (deltaX > 1) {
      navigateByDirection("right");
    } else if (deltaX < 1) {
      navigateByDirection("left");
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <MenuFocusable focusKey={"MENU"} />
        <ContentFocusable focusKey={"CONTENT"} />
      </View>
    );
  }
}

Layout.propTypes = {
  navigateByDirection: PropTypes.func.isRequired,
};

export default withFocusable()(Layout);
