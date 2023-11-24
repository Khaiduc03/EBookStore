import {View, Text, Alert} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {BigButton, HeaderCustom, Switch_custom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
const Security: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  const AlerSave = () => {
    Alert.alert('Save');
  };
  const handleSave = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to save changes?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Save',
          onPress: () => {
            AlerSave();
          },
        },
      ],
      {cancelable: false},
    );
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
        <BigButton textButton="Save" onPressButton={handleSave} />
      </View>
    </View>
  );
};

export default Security;
