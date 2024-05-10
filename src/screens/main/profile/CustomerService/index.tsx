import React, {useState} from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import {BigButton, HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
const CustomerService: React.FC = () => {
  const styles = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validationError, setValidationError] = useState(false);
  const handlePressGoBack = () => {
    NavigationService.goBack();
  };
  const handleAccept = () => {
    if (!title || !description) {
      Alert.alert('Failed', 'Please fill in all information');
    } else {
      Alert.alert('Successfully ', 'We have received your information');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        title="Customer Service"
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        onPressLeftIcon={handlePressGoBack}
      />
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text style={styles.name}>Title</Text>
        <View style={styles.viewinput}>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={1}
            placeholder="Please enter the subject you want"
            placeholderTextColor="gray"
            value={title}
            onChangeText={text => {
              setTitle(text);
              setValidationError(false);
            }}
          />
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.name}>Description</Text>
        <View style={styles.viewinputbig}>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Please enter the content of the topic"
            placeholderTextColor="gray"
            value={description}
            textAlignVertical="top"
            onChangeText={text => {
              setDescription(text);
              setValidationError(false);
            }}
          />
        </View>
      </View>
      <View style={styles.viewbtn}>
        <BigButton textButton="Accept" onPressButton={handleAccept} />
      </View>
    </View>
  );
};

export default CustomerService;
