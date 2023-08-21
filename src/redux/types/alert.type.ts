import LottieView from 'lottie-react-native';

export type AlertState = {
    isShow: boolean;
    title: string;
    description: string;
    onAccept: () => void;
    onCancel: () => void;
    imageTitle: any;

     isCancel?: boolean;
     isAccept?: boolean;
    // isLoader?: boolean;
};
