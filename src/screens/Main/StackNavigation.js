import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Home'
import Details from '../Details'
import Cart from '../CartProduct'
import TabNavigation from '../TabNavigator/tabaNavigation';
import WellCome from '../WellCome';
import Signin from '../Signin';
import Signup from '../Signup';
import Settings from '../Settings';


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    // const a = route.params;
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="WellCome">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details}/>
            <Stack.Screen name="Estante" component={Cart}/>
            <Stack.Screen name="WellCome" component={WellCome}/>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Settings" component={Settings}/>
            {/* <Stack.Screen name="TabNavigation" component={TabNavigation}/> */}
        </Stack.Navigator>
    );
}