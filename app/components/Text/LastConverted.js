import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ base, quote, converstionRate, date }) => (
  <Text style={styles.smallText}>
    1 {base} = {converstionRate} {quote} as of{' '}
    {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  converstionRate: PropTypes.number
};

export default LastConverted;
