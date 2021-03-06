import React from 'react';

import { Home } from '../Screens/Home';
import { Mycars } from '../Screens/Mycars';
import { Profile } from '../Screens/Profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen } = createBottomTabNavigator();

import { AppStackRoutes } from './app.stack.routes';

import HomeSvg from '../assets/home.svg';
import UserSvg from '../assets/people.svg';
import CarSvg from '../assets/car.svg';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';



export function AppTabRoutes() {

    const theme = useTheme();


    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 78,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: theme.colors.background_primary
                },
                tabBarActiveTintColor: theme.colors.main,
                tabBarInactiveTintColor: theme.colors.text_detail,
            }}
        >

            <Screen
                name="Home"
                component={AppStackRoutes}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <HomeSvg width={24} height={24} fill={color} color={color} />
                    )
                }}
            />

            <Screen
                name='Mycars'
                component={Mycars}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <CarSvg width={24} height={24} fill={color} color={color} />
                    )
                }}
            />

            <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <UserSvg width={24} height={24} fill={color} color={color} />
                    )
                }}
            />

        </Navigator>
    )
}