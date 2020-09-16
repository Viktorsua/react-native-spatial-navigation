
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import withFocusable from '../withFocusable';

class Program extends React.PureComponent {
  render() {
    // console.log('Program rendered: ', this.props.realFocusKey);

    const {color, onPress, focused, title} = this.props;

    const style = {
      backgroundColor: color
    };

    return (<TouchableOpacity
      onPress={onPress}
      style={styles.programWrapper}
    >
      <View style={[style, styles.program, focused ? styles.focusedBorder : null]} />
      <Text style={styles.programTitle}>
        {title}
      </Text>
    </TouchableOpacity>);
  }
}

Program.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired

  // realFocusKey: PropTypes.string.isRequired
};

export default withFocusable()(Program);
