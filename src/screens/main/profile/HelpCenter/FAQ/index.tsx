import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import SearchCustom from '../../../../../components/customs/Search';
import ItemListBtnSmall from './components/itemListBtnSmall';
import ItemListToggleable from './components/ItemListToggleable';

const FAQ: React.FC = () => {
  const styles = useStyles();
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonPress = (title: string) => {
    setSelectedButton(title);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.viewItemBtnSmall}>
            <ItemListBtnSmall />
          </View>
          <View style={styles.viewSearch}>
            <SearchCustom />
          </View>
          <View style={styles.viewToggleable}>
            <ItemListToggleable />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FAQ;