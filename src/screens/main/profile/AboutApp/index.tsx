import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import usestyles from './styles';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {HeaderCustom} from '../../../../components';
import ItemListAbout from './ItemListAbout';

const AboutApp: React.FC = () => {
  const styles = usestyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROFILE);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5'}}
        title="About The App"
        onPressLeftIcon={handlePressGoback}
      />
      <View style={styles.viewTextBig}>
        <Text style={styles.name}>Comic Verse V9.9.9</Text>
      </View>
      <View>
        <ItemListAbout />
      </View>
    </View>
  );
};

export default AboutApp;
