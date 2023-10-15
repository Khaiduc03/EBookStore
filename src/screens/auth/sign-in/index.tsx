import React, {FunctionComponent} from 'react';

import {Text} from '@rneui/base';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CheckBox} from '@rneui/themed';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {GoogleIcon} from '../../../assets/icons';
import {BigButton, SmallButton} from '../../../components';
import Header from '../../../components/customs/Headers';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions} from '../../../redux/reducer';
import {AlertActions} from '../../../redux/reducer/alert.reducer';
import useStyles from './styles';
import {JsonImages} from '../../../assets';

const SignIn: FunctionComponent = () => {
  const styles = useStyles();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    });
  };

  const toggleCheckbox = () => setChecked(!checked);

  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const [checked, setChecked] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleSignIn = async () => {
    dispatch(
      AuthActions.handleLogin({
        email: credentials.email,
        password: credentials.password,
        device_token: '1234567890',
      }),
    );
  };

  const onPress = () => {
    dispatch(
      AlertActions.setDataAlert({
        title: 'LOGIN SUCCESS',
        description: 'Are you sure you want to logout? ',
        imageTitle: JsonImages.cat,
        isAccept: true,
        isCancel: true,

        onAccept: () => {
          console.log('hio');
        },
      }),
    );
  };

  const handleGoogle = async () => {
    dispatch(
      AuthActions.handleLoginGoogle({
        device_token: '1234567890',
      }),
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <View style={styles.view1}>
            <View style={{width: '40%'}}>
              <Header
                leftIcon={true}
                onPressLeftIcon={() => {
                  Keyboard.dismiss();
                  if (NavigationService.canGoBack()) {
                    NavigationService.goBack();
                    return;
                  }
                  NavigationService.navigate(routes.LOBBY);
                }}
              />
            </View>

            <View style={{width: '20%'}}>
              <Text style={styles.title}>Login 🔐</Text>
            </View>
            <View style={{width: '40%'}} />
          </View>

          <View style={styles.body}>
            <View style={[styles.viewCenter, {marginTop: 12}]}>
              <Text style={styles.introduction}>
                Please enter your email and password to sign in.
              </Text>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.titleInput}>Email</Text>
              <InputCustomV1
                placeholder="Enter your email"
                value={credentials.email}
                onChangeText={text =>
                  setCredentials({...credentials, email: text})
                }
              />
              <Text style={styles.titleInput}>Password</Text>
              <InputCustomV1
                placeholder="Enter your password"
                secure={true}
                value={credentials.password}
                onChangeText={text =>
                  setCredentials({...credentials, password: text})
                }
              />
              <View style={styles.checkbox}>
                <CheckBox
                  checked={checked}
                  textStyle={styles.textCheckbox}
                  onPress={toggleCheckbox}
                  title={'Remember me'}
                />
              </View>
              <View style={styles.textView}>
                <TouchableOpacity
                  onPress={() =>
                    NavigationService.navigate(routes.FORGOT_PASSWORD)
                  }>
                  <Text style={styles.color}>Forgot Password</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
                  <View style={styles.view4} />
                  <View style={styles.view5}>
                    <Text style={styles.text}>or continue with</Text>
                  </View>
                  <View style={styles.view4} />
                </View>
              </View>
              <View style={styles.optionView}>
                <TouchableOpacity
                  onPress={() => handleGoogle()}
                  style={styles.view2}>
                  <View style={styles.viewCA}>
                    <View style={styles.view3}>
                      <Image
                        source={require('../../../assets/images/png/googleButton.png')}
                        style={styles.viewImage}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleGoogle()}
                  style={styles.view2}>
                  <View style={styles.viewCA}>
                    <View style={styles.view3}>
                      <Image
                        source={require('../../../assets/images/png/facebookButton.png')}
                        style={styles.viewImage}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}>
                <BigButton
                  textButton="Sign In"
                  onPressButton={() => {
                    handleSignIn();
                    //NavigationService.navigate(routes.UPDATE_PROFILE);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
