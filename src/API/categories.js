import shuffle from 'lodash/shuffle';

const categories = shuffle([{
  title: 'Featured'
}, {
  title: 'Cool'
}, {
  title: 'Decent'
}]);

export default categories;
