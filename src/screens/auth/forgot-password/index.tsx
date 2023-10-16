import {Text} from '@rneui/base';
import React from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AuthHeader, Headers} from '../../../components';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions} from '../../../redux';
import {CustomToastBottom} from '../../../utils';
import useStyles from './styles';

const ForgotPassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState('');

  const isEmailValid = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
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
            <InputCustomV1
              placeholder="Enter your email"
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.viewBottom}>
            <TouchableOpacity
              style={styles.btnContinue}
              onPress={() => {
                if (isEmailValid()) {
                  dispatch(AuthActions.handleForgotPassword({email: email}));
                } else {
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
