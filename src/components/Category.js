
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles';
import withFocusable from '../withFocusable';
import { ProgramFocusable } from '../components';
import programs from '../API/programs';


class Category extends React.PureComponent {
  constructor(props) {
    super(props);

    this.scrollRef = null;

    this.onProgramFocused = this.onProgramFocused.bind(this);
    this.onProgramArrowPress = this.onProgramArrowPress.bind(this);
  }

  onProgramFocused({x}) {
    this.scrollRef.scrollTo({
      x
    });
  }

  onProgramArrowPress(direction, {categoryIndex, programIndex}) {
    if (direction === 'right' && programIndex === programs.length - 1 && categoryIndex < categories.length - 1) {
      this.props.setFocus(`CATEGORY-${categoryIndex + 1}`);

      return false;
    }

    return true;
  }

  render() {
    // console.log('Category rendered: ', this.props.realFocusKey);

    return (<View style={styles.categoryWrapper}>
      <Text style={styles.categoryTitle}>
        {this.props.title}
      </Text>
      <ScrollView
        horizontal
        ref={(reference) => {
          if (reference) {
            this.scrollRef = reference;
          }
        }}
      >
        {programs.map((program, index) => ((<ProgramFocusable
          {...program}
          focusKey={`PROGRAM-${this.props.realFocusKey}-${index}`}
          onPress={() => this.props.onProgramPress(program)}
          onEnterPress={this.props.onProgramPress}
          key={program.title}
          onBecameFocused={this.onProgramFocused}
          onArrowPress={this.onProgramArrowPress}
          programIndex={index}
          categoryIndex={this.props.categoryIndex}
        />)))}
      </ScrollView>
    </View>);
  }
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  onProgramPress: PropTypes.func.isRequired,
  realFocusKey: PropTypes.string.isRequired,
  categoryIndex: PropTypes.number.isRequired,
  setFocus: PropTypes.func.isRequired
};

export default withFocusable()(Category);
