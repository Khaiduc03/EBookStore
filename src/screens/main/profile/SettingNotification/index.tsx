import React from 'react';
import {Text, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import Switch_custom from '../../../../components/customs/Switch';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';

const SettingsNotification: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
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

export default SettingsNotification;
