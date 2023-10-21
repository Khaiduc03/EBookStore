import {routes} from '../../constants';
import {Screen} from '../../types';
import CreateAccount from './create-account';
import CreateNewPassword from './create-new-password';
import ForgotPassword from './forgot-password';
import LobbyScreen from './lobby';
import Slider from './onboard';
import SendOTP from './send-otp';
import LoginScreen from './sign-in';
import UpdateProfileScreen from './update-profile';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: LoginScreen,
  },
  {
    name: routes.CREATE_ACCOUNT,
    component: CreateAccount,
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
    component: ForgotPassword,
  },
  {
    name: routes.SEND_OTP,
    component: SendOTP,
  },
  {
    name: routes.CREATE_NEW_PASSWORD,
    component: CreateNewPassword,
  },
];
