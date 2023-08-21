import React from 'react';

import {
    CommonActions,
    NavigationContainerRef,
    StackActions,
} from '@react-navigation/native';
import { routes } from '../constants';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export class NavigationService {
    static navigate(name: string, params?: any, key?: string) {
        if (key) {
            navigationRef.current?.navigate({ key, name, params });
            return;
        }
        navigationRef.current?.navigate(name, params);
    }

    static canGoBack() {
        return navigationRef.current?.canGoBack();
    }

    static goBack() {
        if (navigationRef.current?.canGoBack()) {
            navigationRef.current?.goBack();
        } else {
            this.navigateAndReset([{ name: routes.LOBBY }], 0);
        }
    }

    static navigateAndReset(
        routes: { name: string; params?: any }[],
        index: number
    ) {
        navigationRef.current?.dispatch(
            CommonActions.reset({
                index,
                routes,
            })
        );
    }

    static push(name: string, params?: any) {
        navigationRef.current?.dispatch(StackActions.push(name, params));
    }

    static replace(name: string, params?: any) {
        navigationRef.current?.dispatch(StackActions.replace(name, params));
    }

    static popToTop() {
        navigationRef.current?.dispatch(StackActions.popToTop());
    }

    static pop(count?: number) {
        navigationRef.current?.dispatch(StackActions.pop(count));
    }

    static resetRoot(routes: { name: string; params?: any }[]) {
        navigationRef.current?.resetRoot({
            index: 0,
            routes,
        });
    }
}
