import {Text} from '@rneui/base';
import {CheckBox} from '@rneui/themed';
import React from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AuthHeader, Headers, InputCustom} from '../../../components';
import {routes} from '../../../constants';
import {NavigationService} from '../../../navigation';
import {showToastError, showToastSuccess} from '../../../utils';
import useStyles from './styles';

const CreateNewPassword: React.FC = () => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const isPasswordMatch = () => {
    if ((password && confirmPassword) === '' || password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleCheckbox = () => setChecked(!checked);

  const styles = useStyles();

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <Headers
            leftIcon={true}
            onPressLeftIcon={() => NavigationService.navigate(routes.SEND_OTP)}
          />
          <AuthHeader
            title="Create New Password 🔐"
            subTitle="Enter your new password. If you forget it, then you have to do forgot password."
          />
          <View>
            <Text style={styles.text2}>Password</Text>
            <InputCustom
              onChangeText={text => setPassword(text)}
              value={password}
              secure
            />
          </View>
          <View>
            <Text style={styles.text2}>Confirm Password</Text>
            <InputCustom
              onChangeText={text => setConfirmPassword(text)}
              value={confirmPassword}
              secure
            />
          </View>
          <View style={styles.viewRow}>
            <View style={styles.checkBox}>
              <CheckBox checked={checked} onIconPress={toggleCheckbox} />
            </View>

            <Text style={styles.textRM}>Remember me</Text>
          </View>
          <View style={styles.viewBottom}>
            <TouchableOpacity
              style={styles.btnContinue}
              onPress={() => {
                if (isPasswordMatch()) {
                  showToastSuccess('Success, Account created successfully!');
                } else {
                  showToastError('Error, Passwords do not match!');
                }
              }}>
              <Text style={styles.textContinue}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateNewPassword;
