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

const ForgotPassword: React.FC = () => {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <StatusBar />
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
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity
            style={styles.btnContinue}
            onPress={() => NavigationService.navigate(routes.SEND_OTP)}>
            <Text style={styles.textContinue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
