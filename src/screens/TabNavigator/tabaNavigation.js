import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather } from "@expo/vector-icons";

import { COLORS } from "../../theme/theme";

import Home from "../Home";
import Details from "../Details";
import Estante from "../CartProduct";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
          // tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
          marginTop: 10,
          bottom: 0,
          right: 0,
          left: 0,
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
    </Tab.Navigator>
  );
}
