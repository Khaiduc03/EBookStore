import {
  Alert,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Text} from '@rneui/base';
import React from 'react';
import {Headers} from '../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';
import {TextInput} from 'react-native-gesture-handler';

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
        <Headers
          leftIcon={true}
          onPressLeftIcon={() => NavigationService.navigate(routes.SIGN_IN)}
          style={styles.marginHeader}
        />
        <Text style={styles.textTitleFP}>Forgot Password 🔐</Text>
        <Text style={styles.text1}>
          Enter your email address. We will send an OTP code for verification in
          the next step.
        </Text>
        <View>
          <Text style={styles.text2}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity
            style={styles.btnContinue}
            onPress={() => {
              if (isEmailValid()) {
                NavigationService.navigate(routes.SEND_OTP);
              } else {
                // Hiển thị thông báo lỗi nếu email không hợp lệ
                Alert.alert('Error', 'Please enter a valid email address');
              }
            }}>
            <Text style={styles.textContinue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
