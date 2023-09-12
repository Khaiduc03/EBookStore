import { Component } from 'react';
import { routes } from '../../../constants';
import { Screen } from '../../../types';
import HelpCenter from './HelpCenter';
import MyProfile from './MyProfile';
import Notification from './Notification';
import Security from './Security';
import Payments_method from './Payment-method';
import BecomeVIP from './BecomeVIP';
import AboutApp from './AboutApp';

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
    {
        name: routes.PAYMENTSMETHOD,
        component: Payments_method
    },
    {
        name: routes.BECOMEVIP,
        component: BecomeVIP
    },
    {
        name: routes.ABOUTAPP,
        component: AboutApp
    },
];
