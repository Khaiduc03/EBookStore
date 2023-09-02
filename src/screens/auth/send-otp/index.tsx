import {
  Keyboard,
  StatusBar,
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

const SendOTP = () => {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <Headers
          leftIcon={true}
          onPressLeftIcon={() =>
            NavigationService.navigate(routes.FORGOT_PASSWORD)
          }
          style={styles.marginHeader}
        />
        <View style={styles.viewCenter}>
          <Text style={styles.textTitleOTPV}>OTP Verification</Text>
        </View>
        <Text style={styles.text1}>
          We have sent the OTP verification code to your email address. Check
          your email and enter the code below.
        </Text>
        <View style={styles.viewCenter}>
          <View style={styles.viewRow}>
            <TextInput style={styles.textOTP} keyboardType="number-pad" />
            <TextInput style={styles.textOTP} keyboardType="number-pad" />
            <TextInput style={styles.textOTP} keyboardType="number-pad" />
            <TextInput style={styles.textOTP} keyboardType="number-pad" />
          </View>
          <Text style={styles.text3}>Didn’t receive email?</Text>
          <Text style={styles.text4}>
            You can resend code in <Text style={styles.text5}>55</Text> s
          </Text>
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity style={styles.btnContinue}>
            <Text style={styles.textContinue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SendOTP;
