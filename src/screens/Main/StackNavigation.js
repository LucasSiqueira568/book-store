import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS, SIZES } from '../../theme/theme'
import {Feather } from '@expo/vector-icons'

import Home from '../Home'
import Details from '../Details'
import Cart from '../CartProduct'
import WellCome from '../WellCome';
import Signin from '../Signin';
import Signup from '../Signup';
import Settings from '../Settings';
import Estante from '../CartProduct'
import Search from '../Search'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
            // tabBarShowLabel: false,
  
          tabBarStyle: {
            backgroundColor: "white",
            height: 65,
            marginTop: 10,
            bottom: 0,
            right: 0,
            left: 0,
            paddingBottom: 5,
            position: 'absolute',
            elevation: 5,
  
          },
          tabBarActiveTintColor: COLORS.primary,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <Feather
                name="home"
                size={size}
                color={focused ? COLORS.primary : COLORS.grey}
              />
            ),
          }}
        />
   
        <Tab.Screen
          name="Estante"
          component={Estante}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <Feather
                name="book-open"
                size={size}
                color={focused ? COLORS.primary : COLORS.grey}
              />
            ),
          }}
        />
  
        <Tab.Screen
          name="Buscar"
          component={Search}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <Feather
                name="search"
                size={size}
                color={focused ? COLORS.primary : COLORS.grey}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Configurações"
          component={Settings}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <Feather
                name="settings"
                size={size}
                color={focused ? COLORS.primary : COLORS.grey}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

export default function StackNavigation() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="WellCome">
            <Stack.Screen name="Home" component={Tabs}/>
            <Stack.Screen name="Details" component={Details}/>
            <Stack.Screen name="Estante" component={Cart}/>
            <Stack.Screen name="WellCome" component={WellCome}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
    );
}