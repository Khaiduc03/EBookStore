import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {ForumActions, getAuthUserProfile} from '../../../../redux';
import {ForumType} from '../../../../redux/types/forum.type';
import {showToastError, showToastSuccess} from '../../../../utils';
import {AddPicture, StatusPost} from './components';
import {SelectedImages} from './components/AddPicture/components';
import useStyles from './styles';
import {routes} from '../../../../constants';

const CreatePost: React.FC<ForumType> = props => {
  const styles = useStyles();

  const user = useAppSelector(getAuthUserProfile);

  const dispatch = useAppDispatch();

  const formdata = new FormData();

  const [status, setStatus] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [textInputValue, setTextInputValue] = useState('');
  const handleImagesSelected = (images: string[]) => {
    console.log('Add Picture:', images);
    setSelectedImages(images);
  };
  const handleStatusChange = (newStatus: any) => {
    newStatus = setStatus(!status);
    // Làm gì đó với newStatus...
    console.log('New status: ', newStatus);
  };

  const handleSendPost = () => {
    if (textInputValue.trim() === '') {
      showToastError('Failed!, Please enter text before sending the post.');
    } else {
      showToastSuccess('Success, Post sent successfully!');
      setTextInputValue('');
      setSelectedImages([]);
    }
    console.log('================ ', formdata);
    dispatch(ForumActions.handleCreatePostSuccess(formdata));

    // NavigationService.navigate(routes.FORUM);
  };

  formdata.append('content', textInputValue);
  formdata.append('status', status);

  console.log('fd: ', formdata);

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
              <StatusPost status={status} onStatusChange={handleStatusChange} />
              <AddPicture
                onImagesSelected={handleImagesSelected}
                formData={formdata}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.viewBorder} />

      <View style={styles.viewInput}>
        <TextInput
          placeholder="What do you think today?"
          placeholderTextColor={styles.placeHolderColor.color}
          style={styles.input}
          multiline
          textAlignVertical="top"
          value={textInputValue}
          onChangeText={text => setTextInputValue(text)}
        />
      </View>

      {selectedImages.length > 0 && (
        <SelectedImages forum={props} images={selectedImages} />
      )}
    </View>
  );
};

export default CreatePost;
