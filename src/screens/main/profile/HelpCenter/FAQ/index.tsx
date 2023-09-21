import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import Header from '../../../../../components/customs/Headers/index';
import {Toggleable} from '../../../../../components/customs/Toggleable/index';
import {images} from '../../../../../assets/images/png/index';
import {ButtonSmall} from '../../../../../components/customs/Button/index';
import SearchCustom from '../../../../../components/customs/Search';

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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.ScrollView}>
            <View style={styles.viewConten}>
              <ButtonSmall
                title="Overview"
                onPress={() => handleButtonPress('Overview')}
                isSelected={selectedButton === 'Overview'}
              />
              <ButtonSmall
                title="Account"
                onPress={() => handleButtonPress('Account')}
                isSelected={selectedButton === 'Account'}
              />
              <ButtonSmall
                title="Service"
                onPress={() => handleButtonPress('Service')}
                isSelected={selectedButton === 'Service'}
              />
              <ButtonSmall
                title="App"
                onPress={() => handleButtonPress('App')}
                isSelected={selectedButton === 'App'}
              />
              <ButtonSmall
                title="App"
                onPress={() => handleButtonPress('App')}
                isSelected={selectedButton === 'App'}
              />
              <ButtonSmall
                title="App"
                onPress={() => handleButtonPress('App')}
                isSelected={selectedButton === 'App'}
              />
            </View>
          </ScrollView>
          <View style={styles.viewSearch}>
            <SearchCustom />
          </View>
          <View style={styles.Toggleable}>
            <View style={styles.viewToggleable}>
              <Toggleable
                title="Comic Verse là gì ?"
                content="Comic Verse là một ứng dụng độc đáo kết hợp mạng xã hội và việc đọc truyện tranh. Kết nối với cộng đồng yêu thích truyện tranh, chia sẻ, tương tác và tận hưởng hàng ngàn truyện tranh đa dạng, từ hài hước đến kinh dị. Dễ sử dụng và thú vị!"
              />
            </View>
            <View style={styles.viewToggleable}>
              <Toggleable
                title="Làm thế nào để trở thành thành viên VIP của Comic Verse ?"
                content="Nạp tiền vào là có VIP ^__^ !!!!!!!!!!!!!!!!!!!!!!!!!!"
              />
            </View>
            <View style={styles.viewToggleable}>
              <Toggleable
                title="Làm thế nào để trở thành thành viên VIP của Comic Verse ?"
                content="Nạp tiền vào là có VIP ^__^ !!!!!!!!!!!!!!!!!!!!!!!!!!"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FAQ;
