import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from './components/Onboarding'
import Home from './components/Home'
import CoffeeDetail from './components/CoffeeDetail'
import Checkout from './components/Checkout'
import TrackOrder from './components/TrackOrder'

import Toast from 'react-native-toast-message';

import { Provider } from 'react-redux';
import store from './components/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Onboarding"
                        component={Onboarding}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="CoffeeDetail"
                        component={CoffeeDetail}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="TrackOrder"
                        component={TrackOrder}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>

                <Toast />
            </NavigationContainer>
        </Provider>
    );
}