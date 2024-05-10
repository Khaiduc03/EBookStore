import React from 'react';
import {Text, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {ItemListAbout} from './components';
import useStyles from './styles';

const AboutApp: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="About this app"
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
