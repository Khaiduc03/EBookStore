import {CheckBox} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import {BigButton, HeaderCustom} from '../../../../components';
import InputCustomV1 from '../../../../components/customs/InputCustomV1';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';

const ChangePassWord: React.FC = () => {
  const styles = useStyles();
  const [oldPassword, setoldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const [isCheckValidateOldPassword, setIsCheckValidateOldPassword] =
    useState<boolean>(true);
  const [isCheckValidatePassword, setIsCheckValidatePassword] =
    useState<boolean>(true);
  const [isCheckValidateConfirmPassword, setIsCheckValidateConfirmPassword] =
    useState<boolean>(true);

  useEffect(() => {
    if (
      oldPassword == password &&
      password !== null &&
      confirmpassword !== null
    ) {
      setIsCheckValidateOldPassword(true);
      setIsCheckValidatePassword(true);
      setIsCheckValidateConfirmPassword(true);
    }
  }, [oldPassword, password, confirmpassword]);

  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleCheckbox = () => setChecked(!checked);
  const validateOldPassword = (inputValue: string) => {
    return inputValue === oldPassword;
  };

  const validateInputs = () => {
    return (
      oldPassword.length > 0 &&
      password.length > 0 &&
      confirmpassword.length > 0
    );
  };

  const handleChangePassword = () => {
    if (validateOldPassword(oldPassword)) {
      setIsCheckValidateOldPassword(true);
      if (oldPassword !== password) {
        setIsCheckValidatePassword(true);
        if (password === confirmpassword) {
          setIsCheckValidateConfirmPassword(true);
          Alert.alert('Change password successfully.');
        } else {
          setIsCheckValidateConfirmPassword(false);
        }
      } else {
        setIsCheckValidatePassword(false);
      }
    } else {
      setIsCheckValidateOldPassword(false);
    }
  };

  const handleInputChange = () => {
    if (validateInputs()) {
      handleChangePassword();
    } else {
      Alert.alert('Please fill in all fields.');
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
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
            ) : (
              <View style={styles.marginError}>
                <Text style={styles.titleInput}>Password</Text>
                <InputCustomV1
                  placeholder="Enter your password"
                  secure={true}
                  value={password}
                  onChangeText={text => setPassword(text)}
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
