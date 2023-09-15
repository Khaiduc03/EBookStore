import {
  Keyboard,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from '@rneui/base';
import React from 'react';
import {AuthHeader, Headers, InputCustom} from '../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';
import {showToastError, showToastSuccess} from '../../../utils';
import {CheckBox} from '@rneui/themed';

const CreateNewPassword: React.FC = () => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const isPasswordMatch = () => {
    return password === confirmPassword;
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
            onPressLeftIcon={() =>
              NavigationService.navigate(routes.FORGOT_PASSWORD)
            }
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
