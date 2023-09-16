import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {ComicsNew} from '../Home/components';
import Search from '../Search';
import {HeaderCustom, TabViewItem} from '../../../../components';
import useStyles from './styles';
import {Episodes, HeaderDetail, Preview} from './Components';
import {NavigationService} from '../../../../navigation';

const ComicsDetail = () => {
  const styles = useStyles();
  const handlePressBack = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        viewStyle={styles.headerStyle}
        onPressLeftIcon={handlePressBack}
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        rightIconleft={{name: 'bookmark-outline', type: 'ionicon'}}
        rightIconMiddle={{name: 'document-outline', type: 'ionicon'}}
        rightIconRight={{name: 'paper-plane-outline', type: 'ionicon'}}
      />

      <HeaderDetail />
      <TabViewItem screen1={<Episodes />} screen2={<Preview />} />
    </View>
  );
};
export default ComicsDetail;
