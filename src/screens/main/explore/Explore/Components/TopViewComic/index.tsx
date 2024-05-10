import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';

import TopViewList from './components/TopViewList';
import {HeaderCustom} from '../../../../../../components';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';

const TopViewComic = () => {
  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCH);
  };
  const handlePressBack = () => {
    NavigationService.goBack();
  };
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIconStyle={styles.leftIcon}
        leftIcon={{
          name: 'arrow-back',
          type: 'ionicon',
          color: styles.leftIcon.color,
          size: styles.leftIcon.fontSize,
        }}
        title="Trending Now"
        rightIconRight={{name: 'search', size: styles.rightLeftIcon.fontSize}}
        onPressLeftIcon={handlePressBack}
        onPressRightIconRight={handlePressSearch}
      />
      <TopViewList />
    </View>
  );
};

export default TopViewComic;
