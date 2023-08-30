import { View, Text } from 'react-native'
import React from 'react'
import FAQ from '../../screens/main/profile/HelpCenter/FAQ/index'
import Contact_us from '../../screens/main/profile/HelpCenter/Contact_us/index'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

type TabParamList = {
    FAQ: undefined;
    Contact_us: undefined;
};
const Tab = createMaterialTopTabNavigator<TabParamList>();

export const TopNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="FAQ" component={FAQ} />
                <Tab.Screen name="Contact_us" component={Contact_us} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}