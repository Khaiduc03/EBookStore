import React, {FunctionComponent, useState} from 'react';

import DatePicker from '@react-native-community/datetimepicker';
import {Text} from '@rneui/base';
import {CheckBox, Icon} from '@rneui/themed';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AuthHeader, BigButton, InputCustom} from '../../../components';
import Header from '../../../components/customs/Headers';
import {routes} from '../../../constants';
import {NavigationService} from '../../../navigation';

import {format} from 'date-fns';
import AvatarComponets from '../../../components/customs/Avatar';
import {Gender} from '../../../types';
import useStyles from './styles';

const UpdateProfile: FunctionComponent = () => {
  const styles = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [credentials, setCredentials] = React.useState<{
    fullname: string;
    phone_number: string;
    dob: string;
    gender: Gender;
  }>({
    fullname: '',
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
        dob: format(selected, 'dd/MM/yyyy'), // Định dạng ngày tháng
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      //  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.wrapper}
          onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <Header
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
              title="Complete Your Profile 🔐"
              subTitle="Don’t worry, only you can see your personal
              data. No one else will be able to see it.
              "
            />

            <AvatarComponets />

            <View style={styles.formContainer}>
              <Text style={styles.titleInput}>Full name</Text>
              <InputCustom
                placeholder="Enter your full name"
                value={credentials.fullname}
                onChangeText={text =>
                  setCredentials({...credentials, fullname: text})
                }
              />
              <Text style={styles.titleInput}>Phone number</Text>
              <InputCustom
                placeholder="Enter your phone number"
                value={credentials.phone_number}
                onChangeText={text =>
                  setCredentials({...credentials, phone_number: text})
                }
              />

              <Text style={styles.titleInput}>Date of Birth</Text>
              <InputCustom
                placeholder="dd/MM/yy"
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
                  setCredentials({...credentials, dob: text})
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
                      setCredentials({...credentials, gender: Gender.MALE})
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
                      setCredentials({...credentials, gender: Gender.FAMALE})
                    }
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                  <Text>Famale</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottom}>
              <BigButton textButton="Sign up" onPressButton={() => {}} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;
