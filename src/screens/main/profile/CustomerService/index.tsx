import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
const CustomerService: React.FC = () => {
  const styles = useStyles();
  const handlePressGoBack = () => {
    NavigationService.goBack();
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
        leftIcon={{name: 'left', type: 'antdesign'}}
        onPressLeftIcon={handlePressGoBack}
      />
      <View style={{paddingHorizontal:20}}>
        <Text style={styles.name}>Title</Text>
        <View style={styles.viewbtn}>
          <TextInput
            style={styles.textInput}
            multiline
            value={text}
            onChangeText={handleTextChange}
            numberOfLines={1}
            placeholder="Please enter the subject you want"></TextInput>
        </View>
      </View>
    </View>
  );
};

export default CustomerService;
