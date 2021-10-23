import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Home'
import Details from '../Details'
import Cart from '../CartProduct'
import TabNavigation from '../TabNavigator/tabaNavigation'

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    // const a = route.params;
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TabNavigation">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details}/>
            <Stack.Screen name="Estante" component={Cart}/>
            <Stack.Screen name="TabNavigation" component={TabNavigation}/>
        </Stack.Navigator>
    );
}