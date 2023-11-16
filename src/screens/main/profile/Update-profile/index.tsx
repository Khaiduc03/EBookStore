import React, {FunctionComponent, useEffect, useState} from 'react';

import DatePicker from '@react-native-community/datetimepicker';
import {Text} from '@rneui/base';
import {CheckBox} from '@rneui/themed';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {format} from 'date-fns';

import {CalendarImage} from '../../../../assets/svg';
import {BigButton, HeaderCustom} from '../../../../components';
import AvatarComponets from '../../../../components/customs/Avatar';
import InputCustomV1 from '../../../../components/customs/InputCustomV1';
import {useAppDispatch} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {AuthActions} from '../../../../redux';
import {Gender} from '../../../../types';
import useStyles from './styles';

const UpdateProfileScreen: FunctionComponent = () => {
  const styles = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [isCheckValidateFullName, setIsCheckValidateFullName] =
    useState<boolean>(true);
  const [isCheckValidatePhoneNumber, setIsCheckValidatePhoneNumber] =
    useState<boolean>(true);
  const [isCheckValidateDoB, setIsCheckValidateDoB] = useState<boolean>(true);
  const [isCheckValidateBio, setIsCheckValidateBio] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const [credentials, setCredentials] = React.useState<{
    fullname: string;
    phone_number: string;
    dob: string;
    biography: string;
    gender: Gender;
  }>({
    fullname: '',
    phone_number: '',
    dob: '',
    biography: '',
    gender: Gender.MALE || Gender.FEMALE,
  });

  useEffect(() => {
    if (
      credentials.fullname !== null &&
      credentials.phone_number !== null &&
      credentials.dob !== null
    ) {
      setIsCheckValidateFullName(true);
      setIsCheckValidatePhoneNumber(true);
      setIsCheckValidateDoB(true);
      setIsCheckValidateBio(true);
    }
  }, [credentials.fullname, credentials.phone_number, credentials.dob]);

  const handleDatePickerPress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event: any, selected: Date | undefined) => {
    if (selected) {
      setShowDatePicker(false);
      setSelectedDate(selected);
      setCredentials({
        ...credentials,
        dob: format(selected, 'yyyy-MM-dd'),
      });
    }
  };

  const handleUpdateProfile = () => {
    if (
      credentials.fullname &&
      credentials.phone_number &&
      credentials.dob !== null &&
      (credentials.gender === Gender.MALE ||
        credentials.gender === Gender.FEMALE)
    ) {
      dispatch(
        AuthActions.handleUpdateUserProfile({
          phone: credentials.phone_number,
          dob: credentials.dob,
          fullname: credentials.fullname,
          gender: credentials.gender,
        }),
      );
    }

    if (!credentials.fullname) {
      setIsCheckValidateFullName(false);
    } else {
      setIsCheckValidateFullName(true);
    }

    if (!credentials.phone_number) {
      setIsCheckValidatePhoneNumber(false);
    } else {
      setIsCheckValidatePhoneNumber(true);
    }

    if (!credentials.dob) {
      setIsCheckValidateDoB(false);
    } else {
      setIsCheckValidateDoB(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.wrapper}
          onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <HeaderCustom
              leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
              title="Update Profile"
              onPressLeftIcon={() => NavigationService.goBack()}
            />

            <View style={styles.viewImageProfile}>
              <AvatarComponets />
            </View>

            <View style={styles.formContainer}>
              {isCheckValidateFullName ? (
                <View>
                  <Text style={styles.titleInput}>Full Name</Text>
                  <InputCustomV1
                    placeholder="Enter your full name"
                    value={credentials.fullname}
                    onChangeText={text =>
                      setCredentials({...credentials, fullname: text})
                    }
                  />
                </View>
              ) : (
                <View style={styles.marginError}>
                  <Text style={styles.titleInput}>Full Name</Text>
                  <InputCustomV1
                    placeholder="Enter your full name"
                    value={credentials.fullname}
                    onChangeText={text =>
                      setCredentials({...credentials, fullname: text})
                    }
                    errorMessage="Full name cannot be empty !"
                  />
                </View>
              )}

              {isCheckValidatePhoneNumber ? (
                <View>
                  <Text style={styles.titleInput}>Phone Number</Text>
                  <InputCustomV1
                    placeholder="Enter your phone number"
                    keyboardType="phone-pad"
                    value={credentials.phone_number}
                    onChangeText={text =>
                      setCredentials({...credentials, phone_number: text})
                    }
                  />
                </View>
              ) : (
                <View style={styles.marginError}>
                  <Text style={styles.titleInput}>Phone Number</Text>
                  <InputCustomV1
                    placeholder="Enter your phone number"
                    keyboardType="phone-pad"
                    value={credentials.phone_number}
                    onChangeText={text =>
                      setCredentials({...credentials, phone_number: text})
                    }
                    errorMessage="Phone Number cannot be empty !"
                  />
                </View>
              )}

              {isCheckValidateDoB ? (
                <View>
                  <Text style={styles.titleInput}>Date of Birth</Text>
                  <InputCustomV1
                    placeholder="yyyy-MM-dd"
                    keyboardType="decimal-pad"
                    rightIcon={
                      <TouchableOpacity
                        onPress={() => {
                          handleDatePickerPress();
                        }}>
                        <CalendarImage />
                      </TouchableOpacity>
                    }
                    value={credentials.dob}
                    onChangeText={text =>
                      setCredentials({...credentials, dob: text})
                    }
                  />
                </View>
              ) : (
                <View style={styles.marginError}>
                  <Text style={styles.titleInput}>Date of Birth</Text>
                  <InputCustomV1
                    placeholder="yyyy-MM-dd"
                    keyboardType="decimal-pad"
                    rightIcon={
                      <TouchableOpacity
                        onPress={() => {
                          handleDatePickerPress();
                        }}>
                        <CalendarImage />
                      </TouchableOpacity>
                    }
                    value={credentials.dob}
                    onChangeText={text =>
                      setCredentials({...credentials, dob: text})
                    }
                    errorMessage="Date of Birth cannot be empty !"
                  />
                </View>
              )}

              {showDatePicker && (
                <DatePicker
                  value={selectedDate}
                  mode="date"
                  display="calendar"
                  onChange={handleDateChange}
                />
              )}
              {isCheckValidateFullName ? (
                <View>
                  <Text style={styles.titleInput}>Biography</Text>
                  <InputCustomV1
                    placeholder="Enter your biography"
                    value={credentials.biography}
                    onChangeText={text =>
                      setCredentials({...credentials, biography: text})
                    }
                  />
                </View>
              ) : (
                <View style={styles.marginError}>
                  <Text style={styles.titleInput}>Biography</Text>
                  <InputCustomV1
                    placeholder="Enter your Biography"
                    value={credentials.biography}
                    onChangeText={text =>
                      setCredentials({...credentials, biography: text})
                    }
                    errorMessage="Biography cannot be empty !"
                  />
                </View>
              )}

              <Text style={styles.titleInput}>Gender</Text>
              <View style={styles.checkBoxContainer}>
                <View style={styles.checkBoxItem}>
                  <CheckBox
                    checked={credentials.gender === Gender.MALE}
                    onPress={() =>
                      setCredentials({...credentials, gender: Gender.MALE})
                    }
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                  <Text style={styles.textGender}>Male</Text>
                </View>
                <View style={styles.checkBoxItem}>
                  <CheckBox
                    checked={credentials.gender === Gender.FEMALE}
                    onPress={() =>
                      setCredentials({...credentials, gender: Gender.FEMALE})
                    }
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                  <Text style={styles.textGender}>Female</Text>
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

export default UpdateProfileScreen;
