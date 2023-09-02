import {Alert, TouchableOpacity, View} from 'react-native';
import {Text} from '@rneui/base';
import React from 'react';
import {Headers} from '../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';
import {TextInput} from 'react-native-gesture-handler';
import {CheckBox} from '@rneui/themed';
import {Eye_avatar} from '../../../assets';

const CreateNewPassword: React.FC = () => {
  const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);
  const [isPasswordConfirmHidden, setIsPasswordConfirmHidden] =
    React.useState(true);
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const isPasswordMatch = () => {
    return password === confirmPassword;
  };

  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleCheckbox = () => setChecked(!checked);

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Headers
          leftIcon={true}
          onPressLeftIcon={() =>
            NavigationService.navigate(routes.FORGOT_PASSWORD)
          }
          style={styles.marginHeader}
        />
        <Text style={styles.textTitleFP}>Create New Password 🔐</Text>
        <Text style={styles.text1}>
          Enter your new password. If you forget it, then you have to do forgot
          password.
        </Text>
        <View>
          <Text style={styles.text2}>Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={isPasswordHidden}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordHidden(!isPasswordHidden)}
            style={styles.eye}>
            <Eye_avatar />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text2}>Confirm Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={isPasswordConfirmHidden}
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordConfirmHidden(!isPasswordConfirmHidden)}
            style={styles.eye}>
            <Eye_avatar />
          </TouchableOpacity>
        </View>
        <View style={styles.viewRow}>
          <View style={styles.viewCB}>
            <CheckBox
              style={styles.checkBox}
              checked={checked}
              onPress={toggleCheckbox}
            />
          </View>
          <Text style={styles.textRM}>Remember me</Text>
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity
            style={styles.btnContinue}
            onPress={() => {
              if (isPasswordMatch()) {
                Alert.alert('Success', 'Account created successfully!');
              } else {
                Alert.alert('Error', 'Passwords do not match!');
              }
            }}>
            <Text style={styles.textContinue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateNewPassword;
