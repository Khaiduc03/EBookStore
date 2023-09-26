import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import useStyles from './styles';
import {Icon} from '@rneui/themed';

const AddFriend = () => {
  const styles = useStyles();
  const [isUserAdded, setUserAdded] = useState(false);

  const handleButtonPress = () => {
    if (isUserAdded) {
      Alert.alert(
        'Xác nhận hủy kết bạn',
        'Bạn có chắc chắn muốn hủy kết bạn không?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              setUserAdded(false);
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      setUserAdded(true);
    }
  };
  return (
    <View>
      <TouchableOpacity style={styles.btnAddUser} onPress={handleButtonPress}>
        <Icon
          name={isUserAdded ? 'user-minus' : 'user-plus'}
          type="font-awesome-5"
          size={18}
          color={'white'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddFriend;