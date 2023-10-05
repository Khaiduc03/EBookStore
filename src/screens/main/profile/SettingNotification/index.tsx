import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import {HeaderCustom} from '../../../../components';
import Switch_custom from '../../../../components/customs/Switch';

const SettingNotification: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROFILE);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5'}}
        title="Notification"
        onPressLeftIcon={handlePressGoback}
      />
      <Text style={styles.testNotify}>Notify me when...</Text>

      <Switch_custom title="There is a new recommendation" />
      <Switch_custom title="There is a new set of books" />
      <Switch_custom title="There is an update from the Author" />
      <Switch_custom title="Discounts available" />
      <Switch_custom title="When I make a purchase" />
      <Switch_custom title="Turn on app system notifications" />
      <Switch_custom title="New tips and services available" />
      <Switch_custom title="Participate in surveys" />
    </View>
  );
};

export default SettingNotification;
