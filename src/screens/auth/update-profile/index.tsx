import React, { FunctionComponent, useState } from 'react';

import DatePicker from '@react-native-community/datetimepicker';
import { Text } from '@rneui/base';
import { CheckBox, Icon } from '@rneui/themed';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { AuthHeader, BigButton, InputCustom } from '../../../components';
import Header from '../../../components/customs/Headers';
import { routes } from '../../../constants';
import { NavigationService } from '../../../navigation';

import { format } from 'date-fns';
import AvatarComponets from '../../../components/customs/Avatar';
import { useAppDispatch } from '../../../hooks';
import { AuthActions } from '../../../redux';
import { Gender } from '../../../types';
import useStyles from './styles';

const UpdateProfile: FunctionComponent = () => {
  const styles = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useAppDispatch();

  const handleUpdateProfile = () => {
    dispatch(
      AuthActions.handleUpdateUserProfile({
        phone: credentials.phone_number,
        dob: credentials.dob,
        fullname: credentials.fullname,
        gender: credentials.gender,
      }),
    );
  };

  const [credentials, setCredentials] = React.useState<{
    fullname: string;
    email: string;
    phone_number: string;
    dob: string;
    gender: Gender;
  }>({
    fullname: '',
    email: '',
    phone_number: '',
    dob: '',
    gender: Gender.MALE,
  });
  const handleDatePickerPress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event: any, selected: Date | undefined) => {
    if (selected) {
      setShowDatePicker(false);
      setSelectedDate(selected);
      setCredentials({
        ...credentials,
        dob: format(selected, 'yyyy-MM-dd'), // Định dạng ngày tháng
      });
    }
  };
  const isEmailValid = (email: string) => {
    // Sử dụng biểu thức chính quy để kiểm tra định dạng email
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.wrapper}
          onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <Header logo
              leftIcon={true}
              onPressLeftIcon={() => {
                Keyboard.dismiss();
                try {
                  NavigationService.goBack();
                } catch (error) {
                  NavigationService.navigate(routes.LOBBY);
                }
              }}
            />

            <AuthHeader
              title="Hoàn thành hồ sơ của bạn 🔐"
              subTitle="Đừng lo lắng, chỉ bạn mới có thể xem dữ liệu cá nhân của mình. Sẽ không có ai khác có thể nhìn thấy nó."
            />

            <AvatarComponets />

            <View style={styles.formContainer}>
              <Text style={styles.titleInput}>Họ và tên</Text>
              <InputCustom
                placeholder="Vui lòng nhập họ và tên"
                value={credentials.fullname}
                onChangeText={text =>
                  setCredentials({ ...credentials, fullname: text })
                }
              />
              <Text style={styles.titleInput}>Email</Text>
              <InputCustom
                placeholder="Vui lòng nhập Email"
                value={credentials.email}
                onChangeText={text =>
                  setCredentials({ ...credentials, email: text })
                }
              />
              {!isEmailValid(credentials.email) && credentials.email !== '' && (
                <Text style={styles.error}>Email không hợp lệ. Vui lòng sử dụng định dạng example@gmail.com</Text>
              )}
              <Text style={styles.titleInput}>Số điện thoại</Text>
              <InputCustom
                placeholder="Vui lòng nhập số điện thoạir"
                value={credentials.phone_number}
                onChangeText={text =>
                  setCredentials({ ...credentials, phone_number: text })
                }
              />

              <Text style={styles.titleInput}>Ngày sinh</Text>
              <InputCustom
                placeholder="yy-MM-dd"
                rightIcon={
                  <Icon
                    type="ionicon"
                    name={'calendar-outline'}
                    color={'black'}
                    size={24}
                    onPress={() => {
                      handleDatePickerPress();
                    }}
                  />
                }
                value={credentials.dob}
                onChangeText={text =>
                  setCredentials({ ...credentials, dob: text })
                }
              />
              {showDatePicker && (
                <DatePicker
                  value={selectedDate}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}

              <Text style={styles.titleInput}>gender</Text>
              <View style={styles.checkBoxContainer}>
                <View style={styles.checkBoxItem}>
                  <CheckBox
                    checked={credentials.gender === Gender.MALE}
                    onPress={() =>
                      setCredentials({ ...credentials, gender: Gender.MALE })
                    }
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                  <Text>Male</Text>
                </View>
                <View style={styles.checkBoxItem}>
                  <CheckBox
                    checked={credentials.gender === Gender.FAMALE}
                    onPress={() =>
                      setCredentials({ ...credentials, gender: Gender.FAMALE })
                    }
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                  <Text>Famale</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottom}>
              <BigButton
                textButton="Continue"
                onPressButton={() => {
                  handleUpdateProfile();
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;
