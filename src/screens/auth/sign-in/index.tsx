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
import {JsonImages} from '../../../assets';
import {AuthHeader, BigButton} from '../../../components';
import Header from '../../../components/customs/Headers';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions, ComicActions} from '../../../redux/reducer';
import {AlertActions} from '../../../redux/reducer/alert.reducer';
import useStyles from './styles';
import {FacebookIcon, GoogleIcon} from '../../../assets/icons';

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
    dispatch(ComicActions.clearListData());
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
    dispatch(ComicActions.clearListData());
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
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
          <View style={{width: '100%', height: 'auto', marginVertical: 20}}>
            <AuthHeader
              title="Login 🔐"
              subTitle="Please enter your email and password to sign in."
            />
          </View>

          <View style={styles.body}>
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
              <View style={{width: '100%', height: 'auto'}}>
                <View style={styles.viewCenter}>
                  <TouchableOpacity
                    onPress={() =>
                      NavigationService.navigate(routes.FORGOT_PASSWORD)
                    }
                    style={styles.btnFP}>
                    <Text style={styles.color}>Forgot Password</Text>
                  </TouchableOpacity>
                  <View style={styles.viewRP}>
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
                        <GoogleIcon style={styles.viewImage} />
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => handleGoogle()}
                    style={styles.view2}>
                    <View style={styles.viewCA}>
                      <View style={styles.view3}>
                        <FacebookIcon style={styles.viewImage} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.bottom}>
                <BigButton
                  textButton="Sign In"
                  onPressButton={() => {
                    handleSignIn();
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
