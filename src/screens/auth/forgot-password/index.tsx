import {Text} from '@rneui/base';
import React from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AuthHeader, Headers, InputCustom} from '../../../components';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {CustomToastBottom} from '../../../utils';
import useStyles from './styles';
import {AuthActions} from '../../../redux';

const ForgotPassword: React.FC = () => {
  // const [email, setEmail] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState<{
    email: string;
  }>({
    email: '',
  });

  const isEmailValid = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.email);
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
            <InputCustom
              onChangeText={text => setEmail({email: text})}
              value={email.email}
            />
          </View>
          <View style={styles.viewBottom}>
            <TouchableOpacity
              style={styles.btnContinue}
              onPress={() => {
                if (isEmailValid()) {
                  // Kiểm tra xem email có hợp lệ hay không
                  dispatch(AuthActions.handleForgotPassword(email));
                } else {
                  // Hiển thị thông báo lỗi nếu email không hợp lệ
                  CustomToastBottom(
                    'Error, Please enter a valid email address',
                  );
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
