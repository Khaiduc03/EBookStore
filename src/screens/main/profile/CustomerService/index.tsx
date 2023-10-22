import React, {useState} from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import useStyles from './styles';
import {BigButton, HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
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
      Alert.alert('Sending failed', 'Please fill in all information');
    } else {
      Alert.alert(
        'Submitted successfully',
        'We have received your information',
      );
    }
  };
  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    if (inputText.length <= 250) {
      setText(inputText);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        title="Customer Service"
        leftIcon={{name: 'arrow-left', type: 'font-awesome'}}
        onPressLeftIcon={handlePressGoBack}
      />
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.name}>Title</Text>
        <View style={styles.viewinput}>
          <TextInput
            multiline
            numberOfLines={1}
            placeholder="Please enter the subject you want"
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
        <BigButton textButton="Accep" onPressButton={handleAccept} />
      </View>
    </View>
  );
};

export default CustomerService;
