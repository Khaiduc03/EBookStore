import {routes} from '../../constants';
import {Screen} from '../../types';
import CreateAccountScreen from './create-account';
import CreateNewPasswordScreen from './create-new-password';
import ForgotPasswordScreen from './forgot-password';
import LobbyScreen from './lobby';
import Slider from './onboard';
import SendOTPScreen from './send-otp';
import LoginScreen from './sign-in';
import UpdateProfileScreen from './update-profile';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: LoginScreen,
  },
  {
    name: routes.CREATE_ACCOUNT,
    component: CreateAccountScreen,
  },
  {
    name: routes.LOBBY,
    component: LobbyScreen,
  },
  {
    name: routes.UPDATE_PROFILE,
    component: UpdateProfileScreen,
  },
  {
    name: routes.ONBOARD,
    component: Slider,
  },
  {
    name: routes.FORGOT_PASSWORD,
    component: ForgotPasswordScreen,
  },
  {
    name: routes.SEND_OTP,
    component: SendOTPScreen,
  },
  {
    name: routes.CREATE_NEW_PASSWORD,
    component: CreateNewPasswordScreen,
  },
];
