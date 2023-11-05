declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_URL: string;
    REGISTER: string;
    LOGIN: string;
    LOGIN_GOOGLE: string;
    UPDATE_PASSWORD: string;
    REFRESH_TOKEN: string;
    SEND_OTP: string;
    VERIFY_OTP: string;

    ///////------------USER-----------------//////////
    PROFILE: string;
    GET_ALL_USER: string;
    GET_USER_BY_UUID: string;
    UPLOAD_AVATAR: string;
    DELETE_AVATAR;

    IMAGE: string;
    UPLOAD_IMAGES: string;

    TOPIC: string;
    GET_TOPIC_BY_UUID: string;
    UPDATE_TOPIC: string;
    DELETE_TOPIC: string;

    COMIC: string;
    COMIC_BY_TOPIC: string;
    COMIC_BY_NAME: string;
    COMIC_UUID: string;
    COMIC_UPDATE: string;
    COMICS_DELETE: string;
    COMIC_UPDATE_IMAGE: string;

    CHAPTER: string;
    CHAPTER_UUID: string;
    COMIC_TOP_20: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
