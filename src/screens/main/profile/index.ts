import { Component } from 'react';
import { routes } from '../../../constants';
import { Screen } from '../../../types';
import HelpCenter from './HelpCenter';
import MyProfile from './MyProfile';
import Notification from './Notification';
import Security from './Security';

export { default as Profile } from './Profile';

export const profileScreens: Screen[] = [
    {
        name: routes.HELPCENTER,
        component: HelpCenter
    },
    {
        name: routes.SECURITY,
        component: Security
    },
    {
        name: routes.MYPROFILE,
        component: MyProfile
    },
    {
        name: routes.NOTIFICATION,
        component: Notification
    },
];
