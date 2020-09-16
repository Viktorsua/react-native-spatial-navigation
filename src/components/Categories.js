
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView} from 'react-native';
import styles from '../styles';
import withFocusable from '../withFocusable';
import { CategoryFocusable } from '../components';
import categories from '../API/categories';


class Categories extends React.PureComponent {
  constructor(props) {
    super(props);

    this.scrollRef = null;

    this.onCategoryFocused = this.onCategoryFocused.bind(this);
  }

  onCategoryFocused({y}) {
    this.scrollRef.scrollTo({
      y
    });
  }

  render() {
    // console.log('Categories rendered: ', this.props.realFocusKey);

    return (<ScrollView
      ref={(reference) => {
        if (reference) {
          this.scrollRef = reference;
        }
      }}
      style={styles.categoriesWrapper}
    >
      {categories.map((category, index) => (<CategoryFocusable
        focusKey={`CATEGORY-${index}`}
        {...category}
        onProgramPress={this.props.onProgramPress}
        key={category.title}
        onBecameFocused={this.onCategoryFocused}
        categoryIndex={index}

        // preferredChildFocusKey={`PROGRAM-CATEGORY-${index}-${programs.length - 1}`}
      />))}
    </ScrollView>);
  }
}

Categories.propTypes = {
  onProgramPress: PropTypes.func.isRequired,
  realFocusKey: PropTypes.string.isRequired
};

export default withFocusable()(Categories);
