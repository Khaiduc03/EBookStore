import {CheckBox} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {BigButton, HeaderCustom} from '../../../../components';
import InputCustomV1 from '../../../../components/customs/InputCustomV1';
import {useAppDispatch} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import useStyles from './styles';
import {AlertActions} from '../../../../redux/reducer/alert.reducer';
import Toast from 'react-native-toast-message';

const ChangePassWord: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [oldPassword, setoldPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const [isCheckValidateOldPassword, setIsCheckValidateOldPassword] =
    useState<boolean>(true);
  const [isCheckValidatePassword, setIsCheckValidatePassword] =
    useState<boolean>(true);
  const [isCheckValidateConfirmPassword, setIsCheckValidateConfirmPassword] =
    useState<boolean>(true);

  useEffect(() => {
    if (
      oldPassword !== null &&
      newPassword !== null &&
      confirmpassword == newPassword
    ) {
      setIsCheckValidateOldPassword(true);
      setIsCheckValidatePassword(true);
      setIsCheckValidateConfirmPassword(true);
    }
  }, [oldPassword, newPassword, confirmpassword]);

  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleCheckbox = () => setChecked(!checked);

  const validateInputs = () => {
    return (
      oldPassword.length > 0 &&
      newPassword.length > 0 &&
      confirmpassword.length > 0
    );
  };

  const handleChangePassword = () => {
    dispatch(
      UserAction.changePassword({
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmpassword,
      }),
    );
  };

  const handleInputChange = () => {
    if (validateInputs()) {
      handleChangePassword();
      Toast.show({
        type: 'success',
        text1: 'Change password successfully!',
        visibilityTime: 2000,
      });
    } else {
      setIsCheckValidateOldPassword(true);
      setIsCheckValidatePassword(true);
      setIsCheckValidateConfirmPassword(true);
      if (oldPassword.length === 0) {
        setIsCheckValidateOldPassword(false);
        Toast.show({
          type: 'error',
          text1: 'Please enter the old password',
          visibilityTime: 2000,
        });
      }
      if (newPassword.length !== 0) {
        setIsCheckValidatePassword(false);
        Toast.show({
          type: 'error',
          text1: 'Please enter the new password',
          visibilityTime: 2000,
        });
      }
      if (confirmpassword !== newPassword) {
        setIsCheckValidateConfirmPassword(false);
        Toast.show({
          type: 'error',
          text1: 'Passwords do not match',
          visibilityTime: 2000,
        });
      }
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <HeaderCustom
            title="Change Password"
            leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
            onPressLeftIcon={() => NavigationService.goBack()}
          />

          <View style={styles.formContainer}>
            {isCheckValidateOldPassword ? (
              <View>
                <Text style={styles.titleInput}>Old Password</Text>
                <InputCustomV1
                  placeholder="Enter your old password"
                  secure={true}
                  value={oldPassword}
                  onChangeText={text => setoldPassword(text)}
                />
              </View>
            ) : (
              <View style={styles.marginError}>
                <Text style={styles.titleInput}>Old Password</Text>
                <InputCustomV1
                  placeholder="Enter your old password"
                  secure={true}
                  value={oldPassword}
                  onChangeText={text => setoldPassword(text)}
                  errorMessage="Password must be longer than 6 characters."
                />
              </View>
            )}
            {isCheckValidatePassword ? (
              <View>
                <Text style={styles.titleInput}>Password</Text>
                <InputCustomV1
                  placeholder="Enter your password"
                  secure={true}
                  value={newPassword}
                  onChangeText={text => setnewPassword(text)}
                />
              </View>
            ) : (
              <View style={styles.marginError}>
                <Text style={styles.titleInput}>Password</Text>
                <InputCustomV1
                  placeholder="Enter your password"
                  secure={true}
                  value={newPassword}
                  onChangeText={text => setnewPassword(text)}
                  errorMessage="Password must be longer than 6 characters."
                />
              </View>
            )}
            {isCheckValidateConfirmPassword ? (
              <View>
                <Text style={styles.titleInput}>Confirm Password</Text>
                <InputCustomV1
                  placeholder="Enter your confirm password"
                  secure={true}
                  value={confirmpassword}
                  onChangeText={text => setConfirmpassword(text)}
                />
              </View>
            ) : (
              <View style={styles.marginError}>
                <Text style={styles.titleInput}>Confirm Password</Text>
                <InputCustomV1
                  placeholder="Enter your confirm password"
                  secure={true}
                  value={confirmpassword}
                  onChangeText={text => setConfirmpassword(text)}
                  errorMessage="The confirm password must match the previous password."
                />
              </View>
            )}
            <View style={styles.viewCBFP}>
              <View style={styles.checkbox}>
                <CheckBox
                  checked={checked}
                  textStyle={styles.textCheckbox}
                  onPress={toggleCheckbox}
                  title={'Remember me'}
                />
              </View>
            </View>
          </View>

          <View style={styles.viewBtnLogin}>
            <BigButton
              textButton="Change"
              style={styles.button}
              textStyle={{fontSize: 16}}
              onPressButton={handleInputChange}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChangePassWord;
