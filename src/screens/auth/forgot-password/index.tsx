import {Text} from '@rneui/base';
import React, {useState} from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {BigButton, Headers} from '../../../components';
import AuthHeaderV1 from '../../../components/customs/AuthHeaderV1';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions} from '../../../redux';
import {isValidEmail, showToastError} from '../../../utils';
import useStyles from './styles';

const ForgotPasswordScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState('');

  const [isCheckValidateEmail, setIsCheckValidateEmail] =
    useState<boolean>(true);

  const styles = useStyles();

  const handleContinue = () => {
    if (isValidEmail(email)) {
      dispatch(AuthActions.handleForgotPassword({email: email}));
      setIsCheckValidateEmail(true);
    } else {
      showToastError(
        'Error, Please enter a valid email address in the correct format.',
      );
      setIsCheckValidateEmail(false);
    }
  };

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
          <View style={styles.Headers}>
            <AuthHeaderV1
              title="Forgot Password"
              subTitle="Enter your email address. We will send an OTP code for verification in the next step."
            />
          </View>

          <View style={styles.formContainer}>
            {isCheckValidateEmail ? (
              <View>
                <Text style={styles.titleInput}>Email</Text>
                <InputCustomV1
                  placeholder="Enter your email address"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
              </View>
            ) : (
              <View style={styles.marginError}>
                <Text style={styles.titleInput}>Email</Text>
                <InputCustomV1
                  placeholder="Enter your email address"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  errorMessage="Please enter a valid email address in the correct format."
                />
              </View>
            )}
          </View>

          <View style={styles.viewBtnLogin}>
            <BigButton
              textButton="Continue"
              onPressButton={() => {
                handleContinue();
              }}
              style={styles.button}
              textStyle={{fontSize: 16}}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
