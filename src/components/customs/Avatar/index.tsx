import {Avatar, Icon, Text} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PERMISSION_TYPE,
  useAppDispatch,
  useAppSelector,
  usePermission,
} from '../../../hooks';
import {AuthActions, getAuthUserProfile} from '../../../redux';
import {showToastError} from '../../../utils';
import ModalWrapContent from '../ModalWrapContent';
import useStyles from './styles';
import {AvatarProps} from './type';

const AnimatedView = Animated.createAnimatedComponent(View);

const AvatarComponets: React.FunctionComponent<AvatarProps> = props => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);

  const dispatch = useAppDispatch();

  const [isZoomed, setIsZoomed] = useState(false);
  const permission = usePermission();
  const toggleZoom = () => setIsZoomed(!isZoomed);

  // animation
  const progress = useSharedValue(0.5);

  // when is show changed => run animation and reverse animation
  useEffect(() => {
    if (isZoomed) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0.5);
    }
  }, [isZoomed]);

  // when animation run => update overlayStyle
  const overlayStyle = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1, 0],
      ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.6)'],
    );

    return {
      backgroundColor: background,
    };
  }, []);

  // when animation run => update containerStyle
  const containerStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1, 0],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: scale}],
    };
  }, []);

  //show menu choose image
  const [isShow, setIsShow] = useState<boolean>(false);
  const toggleShow = () => setIsShow(!isShow);
  //image picker

  const optionsCamera: ImagePicker.CameraOptions = {
    quality: 1,
    mediaType: 'photo',
    cameraType: 'front',
    saveToPhotos: true,
  };
  const optionLibrary: ImagePicker.ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 0,
    maxWidth: 500,
    maxHeight: 500,
  };

  const showCamera = async () => {
    setIsShow(false);
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    ).then(async result => {
      if (result !== RESULTS.GRANTED && result !== RESULTS.UNAVAILABLE) {
        await permission.showPermissionDialog(PERMISSION_TYPE.camera);
      } else {
        const result = await ImagePicker.launchCamera(optionsCamera);
        if (result.errorCode) {
          showToastError(result.errorMessage + '');
        } else if (result.didCancel) {
          showToastError('Bạn chưa chụp ảnh');
        } else if (result.errorMessage) {
          showToastError('Có lỗi xảy ra khi mở camera');
        } else if (result.assets) {
          const formdata = new FormData();
          formdata.append('image', {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type,
          });
          await handleUploadImage(formdata);
        }
      }
    });
    setIsShow(false);
  };

  const showGallery = async () => {
    setIsShow(false);
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ).then(async result => {
      if (result !== RESULTS.GRANTED && result !== RESULTS.UNAVAILABLE) {
        await permission.showPermissionDialog(PERMISSION_TYPE.library);
      } else {
        const result = await ImagePicker.launchImageLibrary(optionLibrary);
        if (result.errorCode) {
          showToastError('Have error when open the libary');
        } else if (result.didCancel) {
          showToastError('You was cancel');
        } else if (result.errorMessage) {
          showToastError('Something wrong!!');
        } else if (result.assets) {
          const formdata = new FormData();
          formdata.append('image', {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type,
          });
          await handleUploadImage(formdata);
        }
      }
    });
    setIsShow(false);
  };

  const handleUploadImage = async (formdata: any) => {
    dispatch(AuthActions.handleUpdateAvatar(formdata));
  };

  const handleDeleteImage = async () => {
    setIsShow(false);
    dispatch(AuthActions.handleDeleteAvatar());
  };

  if (!isZoomed) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleShow}>
          <Avatar
            size={70}
            rounded
            source={{
              uri:
                user.avatar?.url ||
                'https://res.cloudinary.com/dohynhgvm/image/upload/f_auto,q_auto/cld-sample',
            }}
          />

          <Avatar
            size={24}
            rounded
            icon={{name: 'pencil', type: 'font-awesome'}}
            containerStyle={styles.pencilStyle}
          />
          {isShow && (
            <ModalWrapContent
              isVisible={isShow}
              onBackdropPress={() => setIsShow(false)}
              contentStyle={styles.contentStyle}>
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => toggleZoom()}>
                <Icon
                  type="ionicon"
                  name={'person-circle-outline'}
                  color={'black'}
                  size={28}
                  containerStyle={styles.iconStyle}
                />
                <Text style={styles.textStyle}>See your images</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => showCamera()}>
                <Icon
                  type="ionicon"
                  name={'camera-outline'}
                  color={'black'}
                  size={28}
                  containerStyle={styles.iconStyle}
                />
                <Text style={styles.textStyle}>Take a photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => showGallery()}>
                <Icon
                  type="ionicon"
                  name={'images-outline'}
                  color={'black'}
                  size={28}
                  containerStyle={styles.iconStyle}
                />
                <Text style={styles.textStyle}>Select a photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalItem}
                onPress={handleDeleteImage}>
                <Icon
                  type="ionicon"
                  name={'trash-outline'}
                  color={'black'}
                  size={28}
                  containerStyle={styles.iconStyle}
                />
                <Text style={styles.textStyle}>Remove photo</Text>
              </TouchableOpacity>
            </ModalWrapContent>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <AnimatedView style={[styles.overlay, overlayStyle]}>
      <TouchableOpacity onPress={toggleZoom}>
        <AnimatedView style={[styles.avatarContainer, containerStyle]}>
          <Avatar
            size={styles.avatarContainer.width}
            rounded
            source={{
              uri:
                user.avatar?.url ||
                'https://res.cloudinary.com/dohynhgvm/image/upload/f_auto,q_auto/cld-sample',
            }}
          />
        </AnimatedView>
      </TouchableOpacity>
    </AnimatedView>
  );
};

export default AvatarComponets;
