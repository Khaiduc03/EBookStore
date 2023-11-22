import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {BigButton, HeaderCustom, Switch_custom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {useAppDispatch} from '../../../../hooks';
import {UserAction} from '../../../../redux/reducer/user.reducer';
const Security: React.FC = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Security"
        onPressLeftIcon={handlePressGoback}
      />

      <Switch_custom title="Save Password" />
      <Switch_custom title="Log in with fingerprint" />
      <Switch_custom title="SMS authenticator" />
      <Switch_custom title="Google Authenticator" />

      <View style={styles.viewButton}>
        <BigButton textButton="Save" />
      </View>

      <TouchableOpacity
        onPress={() =>
          dispatch(
            UserAction.postFollow('96c99a18-cf45-430e-9e21-96e0fad286d2'),
          )
        }
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#000',
        }}>
        <Text>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Security;
