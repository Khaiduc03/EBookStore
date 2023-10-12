import React from 'react';
import {Text, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
import {ItemListAbout} from './components';

const AboutApp: React.FC = () => {
  const styles = useStyles();
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
