import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../assets';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {AddPicture, SelectDropDown} from './components';
import useStyles from './styles';
import {useAppSelector} from '../../../../hooks';
import {getAuthUserProfile} from '../../../../redux';

const CreatePost: React.FC = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Create Your Post"
        rightIconRight={{name: 'checkmark', type: 'ionicon'}}
        onPressLeftIcon={() => NavigationService.goBack()}
      />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.image} source={{uri: user.image_url}} />
          <View style={styles.viewStatus}>
            <Text style={styles.nameUser}>{user.fullname}</Text>
            <View style={styles.buttonClick}>
              <SelectDropDown />
              <AddPicture />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="What do you think today?"
          placeholderTextColor={'gray'}
          style={styles.input}
          multiline
          textAlignVertical="top"
        />
      </View>
    </View>
  );
};

export default CreatePost;
