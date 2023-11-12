import React from 'react';
import { View } from 'react-native';
import { HeaderCustom } from '../../../../components';
import { NavigationService } from '../../../../navigation';
import { FavoritesList } from './components';
import useStyles from './styles';

const Favorite: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        titleStyle={styles.titleStyle}
        onPressLeftIcon={handlePressGoback}
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
