import {Icon, Text} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import ModalWrapContent from '../../../../../components/customs/ModalWrapContent';
import {useAppDispatch, useAppSelector} from '../../../../../hooks';
import {getAuthUserProfile} from '../../../../../redux';
import useStyles from '../styles';
import {AvatarProps} from '../types';

const AvatarComponets: React.FunctionComponent<AvatarProps> = props => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);

  const dispatch = useAppDispatch();

  const [isZoomed, setIsZoomed] = useState(false);

  const [selectImageCamera, setSelectImageCamera] = useState('');
  const [selectImageGallery, setSelectImageGallery] = useState('');

  const progress = useSharedValue(0.5);

  useEffect(() => {
    if (isZoomed) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0.5);
    }
  }, [isZoomed]);

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

  const [isShow, setIsShow] = useState<boolean>(false);
  const toggleShow = () => setIsShow(!isShow);

  const optionCamera: ImagePicker.CameraOptions = {
    mediaType: 'mixed',
    cameraType: 'front',
    quality: 1,
    saveToPhotos: true,
    includeBase64: false,
    maxWidth: 500,
    maxHeight: 500,
  };

  const optionLibrary: ImagePicker.ImageLibraryOptions = {
    mediaType: 'mixed',
    quality: 1,
    selectionLimit: 1,
    includeBase64: false,
    maxWidth: 500,
    maxHeight: 500,
  };

  const handleCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        const result = await launchCamera(optionCamera);
        if (result?.assets && result.assets[0].uri) {
          const formdata = new FormData();
          formdata.append('avatar', {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type,
          });
          setSelectImageCamera(result.assets[0].uri);
          ToastAndroid.show('Image taken successfully', ToastAndroid.TOP);
        } else {
          ToastAndroid.show('User cancelled launchCamera!', ToastAndroid.TOP);
        }
      } else {
        ToastAndroid.show('Camera permission denied!', ToastAndroid.TOP);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleGallery = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'Your app needs access to your gallery',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted) {
        const result = await launchImageLibrary(optionLibrary);
        if (result.didCancel) {
          ToastAndroid.show(
            'User cancelled launchImageLibrary',
            ToastAndroid.TOP,
          );
        } else {
          if (result?.assets && result.assets[0].uri) {
            const formdata = new FormData();
            formdata.append('avatar', {
              uri: result.assets[0].uri,
              name: result.assets[0].fileName,
              type: result.assets[0].type,
            });

            setSelectImageGallery(result.assets[0].uri);
            ToastAndroid.show('Image taken successfully', ToastAndroid.TOP);
          } else {
            ToastAndroid.show(
              'Image URI is missing in the response!',
              ToastAndroid.TOP,
            );
          }
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  if (!isZoomed) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleShow}>
          <Icon name="attach-outline" type="ionicon" size={30} color={'#000'} />
          {isShow && (
            <ModalWrapContent
              isVisible={isShow}
              onBackdropPress={() => setIsShow(false)}
              contentStyle={styles.contentStyle}>
              <TouchableOpacity style={styles.modalItem} onPress={handleCamera}>
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
                onPress={handleGallery}>
                <Icon
                  type="ionicon"
                  name={'images-outline'}
                  color={'black'}
                  size={28}
                  containerStyle={styles.iconStyle}
                />
                <Text style={styles.textStyle}>Select a photo</Text>
              </TouchableOpacity>
            </ModalWrapContent>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Image
      style={styles.avatarContainer}
      source={{
        uri: user.image_url,
      }}
    />
  );
};

export default AvatarComponets;
