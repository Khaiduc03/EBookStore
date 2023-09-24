import {Component} from 'react';
import {routes} from '../../../constants';
import {Screen} from '../../../types';
import HelpCenter from './HelpCenter';
import MyProfile from './MyProfile';
import Notification from './Notification';
import Security from './Security';
import Payments_method from './Payment-method';
import BecomeVIP from './BecomeVIP';
import AboutApp from './AboutApp';
import FAQ from './HelpCenter/FAQ';
import Contact_us from './HelpCenter/Contact_us';
import Update_Profile from './Update-profile';
import PostDetail from './MyProfile/PostDetail';
import ProfileUser from './Profile-User';
import PostDetailUser from './Profile-User/PostDetailUser';
import Message from '../message/Messages';

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
    name: routes.NOTIFICATION,
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
    name: routes.MESSAGES,
    component: Message,
  },
];
