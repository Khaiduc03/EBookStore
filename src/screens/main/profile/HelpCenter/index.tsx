import React from 'react';
import {View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import TabViewItemV1 from '../../../../components/customs/TabViewItemV1';
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
      <TabViewItemV1
        title1={'FAQ'}
        title2={'Contact_us'}
        screen1={<FAQ />}
        screen2={<Contact_us />}
        tabStyle={styles.tabStyle}
        viewStyle={styles.viewStyle}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

export default HelpCenter;
