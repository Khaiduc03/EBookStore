import {
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import React, { FunctionComponent, useState } from 'react'
import useStyles from '../Update-profile/styles'
import Header from '../../../../components/customs/Headers'
import AvatarComponets from '../../../../components/customs/Avatar'
import InputCustom from '../../../../components/customs/InputCustom/index'
import DatePicker from '@react-native-community/datetimepicker';
import { CheckBox, Icon, Text } from '@rneui/themed';
import { Gender } from '../../../../types';
import { format } from 'date-fns';
import { NavigationService } from '../../../../navigation';
import { AuthHeader, BigButton } from '../../../../components'
import { routes } from '../../../../constants'
import { ButtonBig } from '../../../../components/customs/Button'


const Update_Profile: FunctionComponent = () => {
    const styles = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isSelectingDate, setIsSelectingDate] = useState(false);

    const [credentials, setCredentials] = React.useState<{
        fullname: string;
        email: string;
        phone_number: string;
        dob: string;
        gender: Gender;
        biography: string;
    }>({
        fullname: '',
        email: '',
        phone_number: '',
        dob: '',
        gender: Gender.MALE,
        biography: '',
    });
    const handleInputChange = (text: string) => {
        if (!isSelectingDate && text.length <= 10) {
            let formattedDate = text;
            if (text.length === 2 || text.length === 5) {
                formattedDate += '/';
            }
            setCredentials({ ...credentials, dob: formattedDate });
        }
    };

    const handleDatePickerPress = () => {
        setShowDatePicker(true);
        setIsSelectingDate(true);
    };

    const handleDateChange = (event: any, selected: Date | undefined) => {
        if (selected && isSelectingDate) {
            setShowDatePicker(false);
            setSelectedDate(selected);

            const formattedDate = format(selected, 'dd/MM/yyyy');
            const dateParts = formattedDate.split('/');

            if (dateParts.length === 3) {
                const [day, month, year] = dateParts;

                if (
                    /^\d{2}$/.test(day) &&
                    /^\d{2}$/.test(month) &&
                    /^\d{4}$/.test(year)
                ) {
                    setCredentials({
                        ...credentials,
                        dob: day + '/' + month + '/' + year,
                    });
                    setIsSelectingDate(false);
                } else if (/^\d{2}$/.test(day) && /^\d{2}$/.test(month)) {
                    setCredentials({
                        ...credentials,
                        dob: day + '/' + month,
                    });
                    setIsSelectingDate(true);
                } else {
                    setCredentials({
                        ...credentials,
                        dob: formattedDate,
                    });
                }
            }
        }

        setIsSelectingDate(false);
    };
    const isEmailValid = (email: string) => {
        // Sử dụng biểu thức chính quy để kiểm tra định dạng email
        const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        return emailPattern.test(email);
    };

    return (
        <KeyboardAvoidingView style={styles.container}
        //  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Header leftIcon title='Update Profile' istitle />
            <ScrollView style={styles.container}>
                <TouchableWithoutFeedback
                    style={styles.wrapper}
                    onPress={() => Keyboard.dismiss()}>
                    <View style={styles.body}>

                        <AvatarComponets />

                        <View style={styles.formContainer}>
                            <Text style={styles.titleInput}>Full Name</Text>
                            <InputCustom
                                placeholder="Enter Your Full Name"
                                value={credentials.fullname}
                                onChangeText={text =>
                                    setCredentials({ ...credentials, fullname: text })
                                }
                            />
                            <Text style={styles.titleInput}>Email</Text>
                            <InputCustom
                                placeholder="Enter Your Email"
                                value={credentials.email}
                                onChangeText={text =>
                                    setCredentials({ ...credentials, email: text })
                                }
                            />
                            {!isEmailValid(credentials.email) && credentials.email !== '' && (
                                <Text style={styles.error}>Invalid email. Please use the @gmail.com domain.</Text>
                            )}
                            <Text style={styles.titleInput}>Phone</Text>
                            <InputCustom
                                placeholder="Enter your phone number"
                                keyboardType="numeric"
                                value={credentials.phone_number}
                                onChangeText={text => {
                                    // Bắt buộc người dùng phải nhập số và không quá 15 ký tự
                                    if (/^\d+$/.test(text) || text === '') {
                                        if (text.length <= 15) {
                                            setCredentials({ ...credentials, phone_number: text });
                                        }
                                    }
                                }}
                            />

                            <Text style={styles.titleInput}>Date of birth</Text>
                            <InputCustom
                                placeholder="dd/MM/yyyy"
                                value={credentials.dob}
                                onChangeText={handleInputChange}
                                rightIcon={
                                    <Icon
                                        type="ionicon"
                                        name={'calendar-outline'}
                                        color={'black'}
                                        size={24}
                                        onPress={handleDatePickerPress}
                                    />
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
                            <Text style={styles.titleInput}>Biography</Text>
                            <InputCustom
                                placeholder="Enter your Biography"
                                value={credentials.biography}
                                onChangeText={text =>
                                    setCredentials({ ...credentials, biography: text })
                                }
                            />

                            <Text style={styles.titleInput}>Genre</Text>
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
                                    <Text>Female</Text>
                                </View>
                            </View>


                        </View>
                        <View style={styles.bottom}>
                            {/* <BigButton textButton="Lưu" onPressButton={() => { }} /> */}
                            <ButtonBig title='Save' />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Update_Profile