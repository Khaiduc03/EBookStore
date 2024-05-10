import DatePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CalendarImage, CreditCard} from '../../../../assets/svg';
import {BigButton, HeaderCustom} from '../../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';

const AddPayment: React.FC = () => {
  const styles = useStyles();
  const [expiryDate, setExpiryDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [ccv, setCcv] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [errorText, setErrorText] = useState('');
  const handleExpiryDateChange = (text: string) => {
    text = text.replace(/[^0-9]/g, '');
    if (text.length > 6) {
      text = text.substring(0, 6);
    } else if (text.length > 2) {
      const month = text.substring(0, 2);
      const year = text.substring(2);
      if (parseInt(month, 10) < 10 && month.length === 1) {
        text = '0' + month + '/' + year;
      } else {
        text = month + '/' + year;
      }
    }
    setExpiryDate(text);
  };
  const handleCardNumberChange = (text: string) => {
    text = text.replace(/-/g, '');

    text = text.replace(/[^0-9]/g, '');

    if (text.length > 16) {
      text = text.substring(0, 16);
    }
    const formattedText = text.replace(/(.{4})/g, '$1-');
    const trimmedText = formattedText.replace(/-$/, '');
    setCardNumber(trimmedText);
    if (trimmedText.length < 16) {
      setErrorState(true);
    } else {
      setErrorState(false);
      setErrorText('');
    }
  };

  const handleDateChange = (
    //@ts-ignore
    event: NativeSyntheticEvent<Readonly<PickerDateChangeEvent>>,
    selectedDate?: Date,
  ) => {
    setShowDatePicker(false);
    if (selectedDate) {
      let selectedMonth = selectedDate.getMonth() + 1;
      let selectedYear = selectedDate.getFullYear().toString().slice(-2);
      if (selectedMonth < 10) {
        //@ts-ignore
        selectedMonth = '0' + selectedMonth;
      }
      const formattedDate = `${selectedMonth}/${selectedYear}`;
      setExpiryDate(formattedDate);
    }
  };
  const handleCcvChange = (text: string) => {
    text = text.replace(/[^0-9]/g, '');

    if (text.length > 3) {
      text = text.substring(0, 3);
    }

    setCcv(text);
  };
  const handleAddButtonClick = () => {
    let hasErrors = false;
    if (!cardNumber || cardNumber.length < 16) {
      Alert.alert('Error 😅', 'Please enter all 16 numbers');
      hasErrors = true;
    }
    if (!fullName) {
      Alert.alert('Error 😅', 'Please enter your full name');
      hasErrors = true;
    }
    if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      Alert.alert('Error 😅', 'Please enter a valid expiry date (MM/YY)');
      hasErrors = true;
    }
    if (!ccv || ccv.length < 3) {
      Alert.alert('Error 😅', 'Please enter a valid CCV (3 digits)');
      hasErrors = true;
    }
    if (!hasErrors) {
      Alert.alert('Success 😎', 'All data has been entered successfully');
    }
  };
  const handleFullNameChange = (text: string) => {
    setFullName(text);
  };
  const handleGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Add New"
        onPressLeftIcon={handleGoback}
      />
      <View style={{borderBottomWidth: 0.5}}>
        <CreditCard width={'100%'} height={250} viewBox="55 20 200 300" />
      </View>

      <Text style={styles.textName}>Card Number</Text>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.textInput}
          multiline
          keyboardType="numeric"
          numberOfLines={1}
          placeholder="Please enter your card number"
          placeholderTextColor="gray"
          onChangeText={handleCardNumberChange}
          value={cardNumber}
        />
        {errorState && <Text style={styles.textError}>{errorText}</Text>}
      </View>
      <Text style={styles.textName}>Full Name</Text>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={1}
          placeholder="Please enter your Full name"
          placeholderTextColor="gray"
          onChangeText={handleFullNameChange}
        />
      </View>
      <View style={styles.viewText}>
        <View>
          <Text style={styles.textName}>Expiry Date</Text>
          <View style={styles.viewinputSmall}>
            <TextInput
              style={styles.textInputSmall}
              keyboardType="numeric"
              placeholder="MM/YY"
              placeholderTextColor="gray"
              onChangeText={handleExpiryDateChange}
              value={expiryDate}
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <CalendarImage />
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DatePicker
              value={new Date()}
              mode="date"
              display="spinner"
              //@ts-ignore
              onChange={handleDateChange}
            />
          )}
        </View>
        <View>
          <Text style={styles.textName}>CCV</Text>
          <View style={styles.viewinputSmallCCV}>
            <TextInput
              style={styles.textInputSmallCCV}
              placeholder="000"
              keyboardType="numeric"
              placeholderTextColor="gray"
              onChangeText={handleCcvChange}
              value={ccv}
            />
          </View>
        </View>
      </View>
      <View style={{paddingVertical: 30}}>
        <BigButton textButton="Add" onPressButton={handleAddButtonClick} />
      </View>
    </View>
  );
};

export default AddPayment;
