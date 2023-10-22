import LottieView from 'lottie-react-native';
import React from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../assets';
import {GoogleIcon} from '../../../assets/icons';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions, ComicActions} from '../../../redux/reducer';
import usestyles from './styles';

const LobbyScreen: React.FunctionComponent = () => {
  const styles = usestyles();

  const dispatch = useAppDispatch();
  // const getSatate = useAppSelector(getAppIsReady);

  const handleGoogle = async () => {
    dispatch(
      AuthActions.handleLoginGoogle({
        device_token: '1234567890',
      }),
    );
    dispatch(ComicActions.clearListData());
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <LottieView
            style={styles.headerIMage}
            source={images.logo}
            autoPlay
            loop={false}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>
              Welcome to{' '}
              <Text style={[styles.title, styles.colors]}>Comic verse 👋</Text>
            </Text>
          </View>
          <Text style={styles.subTitle}>
            Explore comics like never before with our app.{'\n'}Your stories,
            your way. Start reading today!
          </Text>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={[styles.button, styles.backgroundColorsWhite]}
              onPress={handleGoogle}>
              <GoogleIcon />
              <Text style={styles.buttonText}> Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(routes.CREATE_ACCOUNT);
              }}
              style={[styles.button, styles.backgroundColors]}>
              <Text style={[styles.buttonText, styles.colorWhite]}>
                Get Started
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(routes.SIGN_IN);
              }}
              style={[styles.button, styles.backgroundColorsSecondary]}>
              <Text style={[styles.buttonText, styles.colors]}>
                I Already Have an Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LobbyScreen;
