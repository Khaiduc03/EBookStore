import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import {FavoritesList} from './components';

const Favorite: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        titleStyle={styles.titleStyle}
        leftIcon={{
          name: 'arrow-back-sharp',
          type: 'ionicon',
          color: styles.leftIconStyle.color,
        }}
        title="Favorites List"
        rightIconRight={{
          name: 'notifications-outline',
          type: 'ionicon',
        }}
      />
      <FavoritesList />
    </View>
  );
};

export default Favorite;
