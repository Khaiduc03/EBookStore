import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import styles from './styles';
import Header from '../../../../../components/customs/Headers/index';
import { Toggleable } from '../../../../../components/customs/Toggleable/index';
import { images } from '../../../../../assets/images/png/index';
import { ButtonSmall } from '../../../../../components/customs/Button/index';
import { Search } from '../../../../../components/customs/Search/index';

const FAQ: React.FC = () => {
  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header
            leftIcon
            title='Trung tâm hỗ trợ'
            istitle />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={styles.ScrollView}>
            <View style={styles.viewConten}>
              <ButtonSmall title='Tổng quan' />
              <ButtonSmall title='Tài khoản' />
              <ButtonSmall title='Dịch vụ' />
              <ButtonSmall title='App' />
              <ButtonSmall title='App' />
              <ButtonSmall title='App' />
            </View>
          </ScrollView>
          <View style={styles.viewSearch}>
            <Search />
          </View>
          <View style={styles.Toggleable}>
            <View style={styles.viewToggleable}>
              <Toggleable title="Comic Verse là gì ?"
                content='Comic Verse là một ứng dụng độc đáo kết hợp mạng xã hội và việc đọc truyện tranh. Kết nối với cộng đồng yêu thích truyện tranh, chia sẻ, tương tác và tận hưởng hàng ngàn truyện tranh đa dạng, từ hài hước đến kinh dị. Dễ sử dụng và thú vị!' />
            </View>
            <View style={styles.viewToggleable}>
              <Toggleable title="Làm thế nào để trở thành thành viên VIP của Comic Verse ?"
                content='Nạp tiền vào là có VIP ^__^ !!!!!!!!!!!!!!!!!!!!!!!!!!' />
            </View>
            <View style={styles.viewToggleable}>
              <Toggleable title="Làm thế nào để trở thành thành viên VIP của Comic Verse ?"
                content='Nạp tiền vào là có VIP ^__^ !!!!!!!!!!!!!!!!!!!!!!!!!!' />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default FAQ