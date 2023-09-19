import {
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    View,
    Alert,
} from 'react-native'
import React, { FunctionComponent, useState } from 'react'
import useStyles from '../Update-profile/styles'
import AvatarComponets from '../../../../components/customs/Avatar'
import InputCustom from '../../../../components/customs/InputCustom/index'
import DatePicker from '@react-native-community/datetimepicker';
import { CheckBox, Icon, Text } from '@rneui/themed';
import { Gender } from '../../../../types';
import { format } from 'date-fns';
import { BigButton } from '../../../../components'
import { NavigationService } from '../../../../navigation'
import { routes } from '../../../../constants'
import HeaderCustom from '../../../../components/customs/HeaderCustom'


const Update_Profile: FunctionComponent = () => {
    const styles = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isSelectingDate, setIsSelectingDate] = useState(false);
    const [error, setError] = useState('');
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
    const handlePressGoback = () => {
        NavigationService.navigate(routes.MYPROFILE);
    };
    const handleInputChange = (text: string) => {
        if (!isSelectingDate && text.length <= 10) {
            let formattedDate = text;
            if (text.length === 4 || text.length === 7) {
                formattedDate += '-';
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

            const formattedDate = format(selected, 'yyyy-MM-dd');
            const dateParts = formattedDate.split('-');

            if (dateParts.length === 3) {
                const [year, month, day] = dateParts;

                if (
                    /^\d{4}$/.test(year) &&
                    /^\d{2}$/.test(month) &&
                    /^\d{2}$/.test(day)
                ) {
                    setCredentials({
                        ...credentials,
                        dob: year + '-' + month + '-' + day
                    });
                    setIsSelectingDate(false);
                } else if (/^\d{2}$/.test(day) && /^\d{2}$/.test(month)) {
                    setCredentials({
                        ...credentials,
                        dob: day + '-' + month,
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
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const handlePhoneNumberChange = (text: string) => {
        if (/^\d+$/.test(text) || text === '') {
            if (text.length <= 12) {
                setCredentials({ ...credentials, phone_number: text });
                setError('');
            } else {
                setError('Please enter only phone numbers, no more than 12 numbers.');
            }
        } else {
            setError('Please enter numbers only.');
        }
    };
    const validateInputs = () => {
        const errors = [];

        if (!credentials.fullname) {
            errors.push('Full Name is required');
        }

        if (!credentials.email || !isEmailValid(credentials.email)) {
            errors.push('Invalid email. Please use a valid email format.');
        }

        if (!credentials.phone_number) {
            errors.push('Phone number is required');
        }

        if (!credentials.dob) {
            errors.push('Date of birth is required');
        }

        return errors;
    };
    const handleSaveButtonPress = () => {
        const validationErrors = validateInputs();

        if (validationErrors.length > 0) {
            // Hiển thị cảnh báo với các lỗi
            const errorMessages = validationErrors.join('\n');
            Alert.alert(errorMessages);
        } else {
            // Lưu thông tin nếu không có lỗi
            // Thực hiện lưu thông tin ở đây (ví dụ: gửi dữ liệu đến máy chủ)
            Alert.alert(
                'Update successful',
                'Your information has been successfully updated. 🥰',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            // Xử lí sau khi người dùng nhấn OK 
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container}
        //  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <HeaderCustom leftIcon={{ name: 'arrow-left', type: 'font-awesome-5' }} title='Update Profile'
                onPressLeftIcon={handlePressGoback}
            />
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
                                <Text style={styles.error}>Invalid email. Please use a valid email format.</Text>
                            )}
                            <Text style={styles.titleInput}>Phone</Text>
                            <InputCustom
                                placeholder="Enter your phone number"
                                keyboardType="numeric"
                                value={credentials.phone_number}
                                onChangeText={handlePhoneNumberChange}
                            />
                            {error !== '' && (
                                <Text style={styles.error}>{error}</Text>
                            )}

                            <Text style={styles.titleInput}>Date of birth</Text>
                            <InputCustom
                                placeholder="YYYY/MM/dd"
                                value={credentials.dob}
                                onChangeText={handleInputChange}
                                rightIcon={
                                    <Icon
                                        type="ionicon"
                                        name={'calendar-outline'}
                                        color={'#f89300'}
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
                            <BigButton textButton="Save" onPressButton={handleSaveButtonPress} />
                            {/* <ButtonBig title='Save' /> */}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Update_Profile