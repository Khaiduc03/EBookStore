import React from 'react';
import {View} from 'react-native';
import {HeaderCustom, TabViewItem} from '../../../../components';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import Contact_us from './Contact_us';
import FAQ from './FAQ';
import useStyles from './styles';

const HelpCenter: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Help Center"
        onPressLeftIcon={handlePressGoback}
      />
      <TabViewItem
        tabStyle={styles.tabStyle}
        title1={'FAQ'}
        title2={'Contact_us'}
        screen1={<FAQ />}
        screen2={<Contact_us />}
        viewStyle={{height: 800}}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

export default HelpCenter;