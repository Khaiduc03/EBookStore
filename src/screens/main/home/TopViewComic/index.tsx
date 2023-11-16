import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import TopViewList from './components/TopViewList';

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
        title="Explore by Genre"
        rightIconRight={{name: 'search', size: styles.rightLeftIcon.fontSize}}
        onPressLeftIcon={handlePressBack}
        onPressRightIconRight={handlePressSearch}
      />
      <TopViewList />
    </View>
  );
};

export default TopViewComic;
