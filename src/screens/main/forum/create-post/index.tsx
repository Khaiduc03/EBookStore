import React, {useState} from 'react';
import {Image, Text, TextInput, View, Alert} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {useAppSelector} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {getAuthUserProfile} from '../../../../redux';
import {AddPicture, SelectDropDown} from './components';
import useStyles from './styles';
import {SelectedImages} from './components/AddPicture/components';

const CreatePost: React.FC = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [textInputValue, setTextInputValue] = useState('');
  const handleImagesSelected = (images: string[]) => {
    console.log('Add Picture:', images);
    setSelectedImages(images);
  };
  const handleSendPost = () => {
    if (textInputValue.trim() === '') {
      Alert.alert('Failed', 'Please enter text before sending the post.');
    } else {
      Alert.alert('Success', 'Post sent successfully!');
      setTextInputValue('');
      setSelectedImages([]);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Create Your Post"
        rightIconRight={{name: 'checkmark', type: 'ionicon'}}
        onPressLeftIcon={() => NavigationService.goBack()}
        onPressRightIconRight={handleSendPost}
      />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.image} source={{uri: user.image_url}} />
          <View style={styles.viewStatus}>
            <Text style={styles.nameUser}>{user.fullname}</Text>
            <View style={styles.buttonClick}>
              <SelectDropDown />
              <AddPicture onImagesSelected={handleImagesSelected} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <SelectedImages images={selectedImages} />
        <View style={styles.viewInput}>
          <TextInput
            placeholder="What do you think today?"
            placeholderTextColor={'gray'}
            style={styles.input}
            multiline
            textAlignVertical="top"
            value={textInputValue}
            onChangeText={text => setTextInputValue(text)}
          />
        </View>
      </View>
    </View>
  );
};

export default CreatePost;
