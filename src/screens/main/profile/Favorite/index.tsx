import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';

const Favorite: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Your Favorite"
        onPressLeftIcon={handlePressGoback}
      />
      <Text style={styles.text}>Favorite this here !!</Text>
      <Icon name="book" type="font-awesome" size={12} />
    </View>
  );
};

export default Favorite;
