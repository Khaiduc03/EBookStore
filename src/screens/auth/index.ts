import {Onbroad} from '../../components';
import {routes} from '../../constants';
import {Screen} from '../../types';
import CreateAccount from './create-account';
import LobbyScreen from './lobby';
import Slider from './onboard';
import SignIn from './sign-in';
import ForgotPassword from './sign-in/forgot-password/ForgotPassword';
import SendOTP from './sign-in/send-otp/SendOTP';
import UpdateProfile from './update-profile';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: SignIn,
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
    component: UpdateProfile,
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
];
