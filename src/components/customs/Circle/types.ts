import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';

export type Circleprops = {
    title?: string;
    icEdit?: boolean;
    style?: StyleProp<ViewStyle>;
    icContinue?: boolean;
    circleColor?: string; // Thêm prop cho màu của vòng tròn
    avatarDummy?: boolean; // avatar mẫu 

    ic_Wallet?: boolean;
    ic_Notification?: boolean;
    ic_Security?: boolean;
    ic_VIP?: boolean;
    ic_HelpCenter?: boolean;
    ic_AboutApp?: boolean;
    ic_LogOut?: boolean;
};