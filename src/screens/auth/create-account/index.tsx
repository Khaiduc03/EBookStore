import React, {FunctionComponent} from 'react';

import {Text} from '@rneui/base';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CheckBox} from '@rneui/themed';
import {AuthHeader, BigButton, InputCustom} from '../../../components';
import Header from '../../../components/customs/Headers';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions} from '../../../redux';
import {
  comparePassword,
  isValidEmail,
  isValidPassword,
  showToastError,
} from '../../../utils';
import useStyles from './styles';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {ProfileImage} from '../../../assets/svg';
import AuthHeaderV1 from '../../../components/customs/AuthHeaderV1';
import {GoogleIcon} from '../../../assets/icons';
import {TextInput} from 'react-native-gesture-handler';

const CreateAccountScreen: FunctionComponent = () => {
  const styles = useStyles();

  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleCheckbox = () => setChecked(!checked);
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
    comfirmPassword: string;
  }>({
    email: '',
    password: '',
    comfirmPassword: '',
  });

  const handleCreateAccount = async () => {
    dispatch(
      AuthActions.handleCreateAccount({
        email: credentials.email,
        password: credentials.password,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
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

            <View style={styles.Headers}>
              <AuthHeaderV1
                title="Create Account "
                subTitle="You can create an account, and after that, you will be able to log in to our official application."
                avatar={<ProfileImage />}
              />
            </View>

            <TextInput style={{borderWidth: 1}} />
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
              <Text style={styles.titleInput}>Confirm Password</Text>
              <InputCustomV1
                placeholder="Enter your confirm password"
                secure={true}
                value={credentials.comfirmPassword}
                onChangeText={text =>
                  setCredentials({...credentials, comfirmPassword: text})
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
              <View style={styles.bottom}>
                <BigButton
                  textButton="Sign up"
                  onPressButton={() => {
                    handleCreateAccount();
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateAccountScreen;
