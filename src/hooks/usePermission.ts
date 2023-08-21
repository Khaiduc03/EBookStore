import { Alert, Platform } from 'react-native';
import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  openSettings,
  Permission,
} from 'react-native-permissions';

export const capitalizeFirstLetter = (string: String) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export enum PermissionStatus {
  granted, //ok
  denied, // not ok
  unavailable, // ban
}

const CAMERA_PERMISSIONS = {
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
};

const LIBRARY_PERMISSIONS = {
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
};

const REQUEST_PERMISSION_TYPE = {
  camera: CAMERA_PERMISSIONS,
  library: LIBRARY_PERMISSIONS,
};

export const PERMISSION_TYPE = {
  camera: 'camera',
  library: 'library',
};

export const usePermission = () => {
  const requestPermission = async (permissions: Permission) => {
    try {
      const granted = await request(permissions);
      if (granted === RESULTS.GRANTED) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  const checkPermission = async (type: String) => {
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];

    const result = await check(permissions);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        return PermissionStatus.unavailable; // 2
      case RESULTS.DENIED:
        return PermissionStatus.denied; // 1
      case RESULTS.GRANTED:
        return PermissionStatus.granted; // 0
    }
  };

  const showPermissionDialog = async (type: String) => {
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
    try {
      const result = await check(permissions);

      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert(
            `${capitalizeFirstLetter(type)} permission`,
            `Ứng dụng cần quyền ${type} để lấy hoặc chụp hình ảnh sự cố.`,
            [
              {
                text: 'Go to Settings',
                onPress: () => openSettings(),
                style: 'cancel',
              },
              {
                text: 'Cancel',
                style: 'default',
                onPress: () => {
                  return false;
                },
              },
            ]
          );

          break;
        case RESULTS.BLOCKED:
          Alert.alert(
            `${capitalizeFirstLetter(type)} permission`,
            `Ứng dụng cần quyền ${type} để lấy hoặc chụp hình ảnh sự cố.`,
            [
              {
                text: 'Go to Settings',
                onPress: () => openSettings(),
                style: 'cancel',
              },
              {
                text: 'Cancel',
                style: 'default',
                onPress: () => {
                  return false;
                },
              },
            ]
          );

          break;
        case RESULTS.DENIED:
          Alert.alert(
            `${capitalizeFirstLetter(type)} permission`,
            `Ứng dụng cần quyền ${type} để lấy hoặc chụp hình ảnh sự cố.`,
            [
              {
                text: 'Go to Settings',
                onPress: () => openSettings(),
                style: 'cancel',
              },
              {
                text: 'Cancel',
                style: 'default',
                onPress: () => {
                  return false;
                },
              },
            ]
          );

          break;
        case RESULTS.GRANTED:
          return true;
      }
      console.log('===> PERSMI ', result);
      return requestPermission(permissions);
    } catch (err) {
      return false;
    }
  };

  return {
    checkPermission,
    showPermissionDialog,
  };
};
