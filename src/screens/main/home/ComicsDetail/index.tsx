import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ComicsNew} from '../Home/components';
import Search from '../Search';
import {TabViewItem} from '../../../../components';
import useStyles from './styles';
import {Episodes, Preview} from './Components';

const ComicsDetail = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TabViewItem screen1={<Episodes />} screen2={<Preview />} />
    </View>
  );
};
export default ComicsDetail;
