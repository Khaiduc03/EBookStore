import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Text} from '@rneui/base';
import React from 'react';
import {AuthHeader, Headers, InputCustom} from '../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';
import {showToastError} from '../../../utils';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const isEmailValid = () => {
    // Kiểm tra xem giá trị nhập vào có phải là một địa chỉ email hợp lệ hay không
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const styles = useStyles();

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <Headers
            leftIcon={true}
            onPressLeftIcon={() => NavigationService.navigate(routes.SIGN_IN)}
          />
          <AuthHeader
            title="Forgot Password 🔐"
            subTitle="Enter your email address. We will send an OTP code for verification in the next step."
          />
          <View>
            <Text style={styles.textEmail}>Email</Text>
            <InputCustom onChangeText={text => setEmail(text)} value={email} />
          </View>
          <View style={styles.viewBottom}>
            <TouchableOpacity
              style={styles.btnContinue}
              onPress={() => {
                if (isEmailValid()) {
                  NavigationService.navigate(routes.SEND_OTP);
                } else {
                  // Hiển thị thông báo lỗi nếu email không hợp lệ
                  showToastError('Error, Please enter a valid email address');
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

export default ForgotPassword;
