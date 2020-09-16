import React from 'react';
import PropTypes from 'prop-types';
import {View, Text } from 'react-native';
import styles from '../styles';

class Active extends React.PureComponent {
  render() {
    const {program} = this.props;

    const style = {
      backgroundColor: program ? program.color : 'grey'
    };

    return (<View style={styles.activeWrapper}>
      <View style={[style, styles.activeProgram]} />
      <Text style={styles.activeProgramTitle}>
        {program ? program.title : 'No Program'}
      </Text>
    </View>);
  }
}

Active.propTypes = {
  program: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  })
};

Active.defaultProps = {
  program: null
};

export default Active;
