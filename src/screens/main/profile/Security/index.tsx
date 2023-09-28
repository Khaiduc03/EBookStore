import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {BigButton, HeaderCustom, Switch_custom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
const Security: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROFILE);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5'}}
        title="Security"
        onPressLeftIcon={handlePressGoback}
      />

      <Switch_custom title="Save Password" />
      <Switch_custom title="Log in with fingerprint" />
      <Switch_custom title="SMS authenticator" />
      <Switch_custom title="Google Authenticator" />

      <View style={styles.viewButton}>
        <BigButton textButton="Change Password" />
      </View>
    </View>
  );
};

export default Security;
