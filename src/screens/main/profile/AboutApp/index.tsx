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
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="About The App"
        onPressLeftIcon={handlePressGoback}
      />
      <View style={styles.viewTextBig}>
        <Text style={styles.name}>COMIC VERSE</Text>
      </View>
      <View style={styles.listContent}>
        <ItemListAbout />
      </View>
    </View>
  );
};

export default AboutApp;
