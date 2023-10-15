import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Text} from '@rneui/base';
import React from 'react';
import {AuthHeader, Headers} from '../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';
import {TextInput} from 'react-native-gesture-handler';
import {showToastError} from '../../../utils';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {AuthActions, SendOTPPayload, getAuthUserProfile} from '../../../redux';

const SendOTP: React.FC = () => {
  const styles = useStyles();

  const [pin1, setPin1] = React.useState('');
  const [pin2, setPin2] = React.useState('');
  const [pin3, setPin3] = React.useState('');
  const [pin4, setPin4] = React.useState('');

  const dispatch = useAppDispatch();

  const {email} = useAppSelector(getAuthUserProfile);

  const pin1Ref = React.useRef<TextInput>(null);
  const pin2Ref = React.useRef<TextInput>(null);
  const pin3Ref = React.useRef<TextInput>(null);
  const pin4Ref = React.useRef<TextInput>(null);

  const [countdown, setCountdown] = React.useState<number>(60);
  const [isCounting, setIsCounting] = React.useState<boolean>(true);

  const [textColor, setTextColor] = React.useState(styles.textinitial.color);
  const [resendText, setResendText] = React.useState<string>(
    'Send OTP code after ',
  );

  const validateOTP = () => {
    if (pin1 === '' || pin2 === '' || pin3 === '' || pin4 === '') {
      showToastError('Error, OTP must not be left blank');
    } else {
      dispatch(
        AuthActions.handleVerifyOTP({
          email: email || '',
          otp: pin1 + pin2 + pin3 + pin4,
        }),
      );
    }
  };

  React.useEffect(() => {
    let id: NodeJS.Timeout | null = null;
    if (isCounting && countdown > 0) {
      id = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setIsCounting(false);
      if (id) {
        clearInterval(id);
      }
      setResendText('Send OTP code ');
      setTextColor(styles.text5.color);
    }

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [isCounting, countdown]);

  const startCountdown = () => {
    dispatch(
      AuthActions.handleSendOTP({
        email: email || '',
      }),
    );
    setIsCounting(true);
    setCountdown(60);
    setResendText('Send OTP code after ');
  };

  const handlePin1Change = (text: string) => {
    if (/^\d*$/.test(text)) {
      setPin1(text);
      if (text !== '') {
        pin2Ref.current?.focus();
      } else {
        setPin1(text);
        pin1Ref.current?.focus();
      }
    }
  };

  const handlePin2Change = (text: string) => {
    if (/^\d*$/.test(text)) {
      setPin2(text);
      if (text !== '') {
        pin3Ref.current?.focus();
      } else {
        setPin2(text);
        pin1Ref.current?.focus();
      }
    }
  };

  const handlePin3Change = (text: string) => {
    if (/^\d*$/.test(text)) {
      setPin3(text);
      if (text !== '') {
        pin4Ref.current?.focus();
      } else {
        setPin3(text);
        pin2Ref.current?.focus();
      }
    }
  };

  const handlePin4Change = (text: string) => {
    if (/^\d*$/.test(text)) {
      setPin4(text);
      if (text === '') {
        setPin4(text);
        pin3Ref.current?.focus();
      }
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
            onPressLeftIcon={() =>
              NavigationService.navigate(routes.FORGOT_PASSWORD)
            }
          />
          <AuthHeader
            title="OTP Verification"
            subTitle="We have sent the OTP verification code to your email address. Check your email and enter the code below."
          />
          <View style={styles.viewCenter}>
            <View style={styles.viewRow}>
              <TextInput
                style={styles.textOTP}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={handlePin1Change}
                value={pin1}
                ref={pin1Ref}
              />
              <TextInput
                style={styles.textOTP}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={handlePin2Change}
                value={pin2}
                ref={pin2Ref}
              />
              <TextInput
                style={styles.textOTP}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={handlePin3Change}
                value={pin3}
                ref={pin3Ref}
              />
              <TextInput
                style={styles.textOTP}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={handlePin4Change}
                value={pin4}
                ref={pin4Ref}
              />
            </View>
            <Text style={styles.text3}>Didn’t receive email?</Text>
            <TouchableOpacity
              style={styles.viewCenter}
              onPress={() => {
                if (isCounting) {
                  // Đang đếm ngược, không làm gì cả
                } else {
                  // Bắt đầu một bộ đếm ngược mới
                  startCountdown();
                  setTextColor(styles.text6.color);
                }
              }}>
              <Text style={[styles.textCT, {color: textColor}]}>
                {!isCounting && <>{resendText}</>}
                {isCounting && countdown > 0 && (
                  <>
                    {resendText}
                    <Text style={styles.text5}>{`${countdown} `}</Text>
                    <Text style={styles.text4}>s</Text>
                  </>
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBottom}>
            <TouchableOpacity style={styles.btnContinue} onPress={validateOTP}>
              <Text style={styles.textContinue}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SendOTP;
