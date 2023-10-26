import {routes} from '../../../constants';
import {Screen} from '../../../types';
import AboutApp from './AboutApp';
import AddPayment from './AddPayment';
import BecomeVIP from './BecomeVIP';
import ChangePassWord from './ChangePassword';
import CustomerService from './CustomerService';
import HelpCenter from './HelpCenter';
import Contact_us from './HelpCenter/Contact_us';
import FAQ from './HelpCenter/FAQ';
import HistoryandFavorite from './HistoryandFavorite';
import FavoriteScreen from './HistoryandFavorite/Favorite';
import HistoryScreen from './HistoryandFavorite/History';
import MyProfile from './MyProfile';
import {PostDetail} from './MyProfile/components';
import Payments_method from './Payment-method';
import ProfileUser from './Profile-User';
import {PostDetailUser} from './Profile-User/components';
import Security from './Security';
import Notification from './SettingNotification';
import Update_Profile from './Update-profile';

export {default as Profile} from './Profile';

export const profileScreens: Screen[] = [
  {
    name: routes.HELPCENTER,
    component: HelpCenter,
  },
  {
    name: routes.SECURITY,
    component: Security,
  },
  {
    name: routes.MYPROFILE,
    component: MyProfile,
  },
  {
    name: routes.SETTINGNOTIFICATION,
    component: Notification,
  },
  {
    name: routes.PAYMENTSMETHOD,
    component: Payments_method,
  },
  {
    name: routes.BECOMEVIP,
    component: BecomeVIP,
  },
  {
    name: routes.ABOUTAPP,
    component: AboutApp,
  },
  {
    name: routes.FAQ,
    component: FAQ,
  },
  {
    name: routes.CONTACTUS,
    component: Contact_us,
  },
  {
    name: routes.UPDATE_PROFILE2,
    component: Update_Profile,
  },
  {
    name: routes.POSTDETAIL,
    component: PostDetail,
  },
  {
    name: routes.PROFILEUSER,
    component: ProfileUser,
  },
  {
    name: routes.POSTDETAILUSERS,
    component: PostDetailUser,
  },
  {
    name: routes.FAVORITE,
    component: FavoriteScreen,
  },
  {
    name: routes.HISTORY,
    component: HistoryScreen,
  },
  {
    name: routes.CHANGEPASSWORD,
    component: ChangePassWord,
  },
  {
    name: routes.CUSTOMERSERVICE,
    component: CustomerService,
  },
  {
    name: routes.ADDPAYMENT,
    component: AddPayment,
  },
  {
    name: routes.HISTORYANDFAVORITE,
    component: HistoryandFavorite,
  },
];
