import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {HeaderCustom, TabViewItem} from '../../../../components';
import HistoryScreen from './History';
import FavoriteSreen from './Favorite';
import {NavigationService} from '../../../../navigation';

const HistoryandFavorite: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="History and Favorite"
        onPressLeftIcon={handlePressGoback}
      />
      <TabViewItem
        tabStyle={styles.tabStyle}
        title1={'History'}
        title2={'Favorites'}
        screen1={<HistoryScreen />}
        screen2={<FavoriteSreen />}
        viewStyle={{height: 800}}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

export default HistoryandFavorite;
