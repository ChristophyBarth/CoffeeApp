import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from './assets/colors/colors'

import HomeTab from './tabs/HomeTab';
import FavouritesTab from './tabs/FavouritesTab';
import CartsTab from './tabs/CartsTab';
import NotificationsTab from './tabs/NotificationsTab';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'HomeTab') {
                        return <IonIcon name='home' size={size} color={color} />
                    } else if (route.name === 'FavouritesTab') {
                        return <IonIcon name='heart' size={size} color={color} />
                    } else if (route.name === 'CartsTab') {
                        return <FontAwesome name='shopping-bag' size={size - 3} color={color} />
                    } else if (route.name === 'NotificationsTab') {
                        return <IonIcon name='notifications' size={size} color={color} />
                    }

                },
                tabBarLabel: () => null,
                tabBarActiveTintColor: colors.coffee,
                tabBarInactiveTintColor: colors.ash,

                tabBarStyle: {
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    height: 70,
                }
            })}
        >
            <Tab.Screen name="HomeTab" component={HomeTab} options={{ unmountOnBlur: false, headerShown: false }} />
            <Tab.Screen name="FavouritesTab" component={FavouritesTab} />
            <Tab.Screen name="CartsTab" component={CartsTab} />
            <Tab.Screen name="NotificationsTab" component={NotificationsTab} />

        </Tab.Navigator>
    );
};

export default Home;