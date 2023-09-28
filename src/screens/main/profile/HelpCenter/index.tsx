import {View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {HeaderCustom, TabViewItem} from '../../../../components';
import FAQ from './FAQ';
import Contact_us from './Contact_us';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const HelpCenter: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROFILE);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'chevron-left', type: 'font-awesome-5'}}
        title="Help Center"
        onPressLeftIcon={handlePressGoback}
      />
      <TabViewItem
        title1={'FAQ'}
        title2={'Contact US'}
        screen1={<FAQ />}
        screen2={<Contact_us />}
        viewStyle={{height: 1000}}
      />
    </View>
  );
};

export default HelpCenter;
