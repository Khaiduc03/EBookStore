import {Icon} from '@rneui/themed';
import React, {Fragment, useState} from 'react';
import {
  Image,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Asset} from 'react-native-image-picker';
import SelectDropdown from 'react-native-select-dropdown';
import {HeaderCustom} from '../../../../components';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {ForumActions, getAuthUserProfile} from '../../../../redux';
import {ForumType} from '../../../../redux/types/forum.type';
import {showToastError, showToastSuccess} from '../../../../utils';
import AddPicture from './components/AddPicture';
import SelectedImages from './components/RenderSelectedImages';
import useStyles from './styles';

const CreatePost: React.FC<ForumType> = props => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);
  const dispatch = useAppDispatch();

  const formData = new FormData();

  const [status, setStatus] = useState(true);
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedImages, setSelectedImages] = useState<Asset[]>([]);

  const [selectedStatus, setSelectedStatus] = useState(
    status ? 'Public' : 'Private',
  );

  const [checkSelectDropdown, setCheckSelectDropdown] = useState(false);

  function handleDropdown(
    setStatus: React.Dispatch<React.SetStateAction<boolean>>,
    formData: FormData,
  ): (selectedItem: any, index: number) => void {
    return (selectedItem, index) => {
      const newStatus = selectedItem === 'Public';
      setStatus(newStatus);
      formData.append('status', newStatus.toString());
      setCheckSelectDropdown(true);
    };
  }

  const handleSendPost = () => {
    formData.append('status', status);
    formData.append('content', textInputValue);
    if (selectedImages && selectedImages.length > 0) {
      selectedImages.forEach(item => {
        formData.append('images', {
          uri: item.uri,
          name: item.fileName,
          type: item.type,
        });
      });
    }
    // console.log('================ ', formdata);
    dispatch(ForumActions.handleCreatePostSuccess(formData));
    if (textInputValue.trim() === '') {
      showToastError('Failed!, Please enter text before sending the post.');
    } else {
      showToastSuccess('Success, Post sent successfully!');
      setTextInputValue('');
    }
    NavigationService.goBack();
  };

  const handleImagesSelected = async (images: Asset[]) => {
    try {
      if (images && images.length > 0) {
        setSelectedImages(images);
        console.log('aaaaa ', images);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const renderDropdownIcon = () => {
    return (
      <View>
        <View style={styles.iconleft}>
          {status && selectedStatus === 'Public' ? (
            <Icon
              name="public"
              type="material"
              size={16}
              color={styles.icon.color}
            />
          ) : (
            <Icon
              name="lock-closed"
              type="ionicon"
              size={14.6}
              color={styles.icon.color}
              style={{marginLeft: 6}}
            />
          )}
        </View>

        {checkSelectDropdown ? (
          <Icon name={'caret-down'} type="ionicon" />
        ) : (
          <Icon name={'caret-up'} type="ionicon" />
        )}
        {/* <Icon name={'caret-down'} type="ionicon" /> */}
      </View>
    );
  };

  const touchableWithoutFeedback = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={touchableWithoutFeedback}>
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
                <SelectDropdown
                  data={['Public', 'Private']}
                  onSelect={handleDropdown(setStatus, formData)}
                  buttonStyle={styles.buttonSelect}
                  dropdownStyle={styles.dropdownStyle}
                  dropdownOverlayColor="nothing"
                  renderDropdownIcon={renderDropdownIcon}
                  rowTextStyle={styles.textrowSelect}
                  buttonTextStyle={styles.textButtonSelect}
                  defaultButtonText={status ? 'Public' : 'Private'}
                  rowStyle={styles.viewbackgroundColor}
                  onFocus={() => setCheckSelectDropdown(!checkSelectDropdown)}
                />
                <AddPicture onImagesSelected={handleImagesSelected} />
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
    </TouchableWithoutFeedback>
  );
};

export default CreatePost;
